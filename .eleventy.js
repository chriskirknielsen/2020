const root = 'src'; // Root folder
const outputDir = '_site'; // Build destination folder
const util = require("util");
const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const { PurgeCSS } = require("purgecss");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const slugify = require("slugify");
const blogTools = require("eleventy-plugin-blog-tools");
const moment = require("moment");
const metadata = require("./src/_data/metadata.js");
const cssUtilityClasses = require("./src/_data/utilities.js");
const copyLocalAssets = require("eleventy-plugin-copy-local-assets");
const purgeCssSafeList = {
	_global: ['translated-rtl'], // Translation class
	home: [],
	blog: [], // Article list links and external article button
	about: [],
};

module.exports = function(eleventyConfig) {
	eleventyConfig.setDataDeepMerge(true); // Ensure `ownstyles` are merged together
	
	eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

	/* PLUGINS */
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addPlugin(blogTools);

	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		templateFormats: ["md","html","njk"],
		preAttributes: {
			tabindex: 0,
			// 'data-lang': function (context) { return context.language.toUpperCase(); }
		}
	});

	eleventyConfig.addPlugin(copyLocalAssets, { verbose: true });

	/* SHORTCODES */

	eleventyConfig.addShortcode("figure", function(imageUrl, altText, caption, figureClass, imageClass, captionClass, dimensions) {
		altText = altText || '';
		imageClass = imageClass || '';
		figureClass = figureClass || '';
		captionClass = captionClass || '';
		var size = (dimensions && dimensions.indexOf('x') > -1) ? dimensions.split('x') : false;

		// Define image attributes
		var imageAttr = [`alt="${altText}"`, 'loading="lazy"'];
		if (imageClass) { imageAttr.push(`class="${imageClass}"`); }
		if (size) { imageAttr.push(`width="${size[0]}" height="${size[1]}"`); }
		var imageAttrs = imageAttr.join(' ');

		if (!caption) {
			return `<img src="${imageUrl}" ${imageAttrs}>`;
		}

		return `<figure${figureClass ? ' class="'+figureClass+'"' : ''}>
			<img src="${imageUrl}" ${imageAttrs}>
			<figcaption${captionClass ? ' class="'+captionClass+'"' : ''}>${caption}</figcaption>
		</figure>`;
	});

	eleventyConfig.addPairedShortcode("callout", function(content, pseudo) {
		const md = new markdownIt();
		return `<div class="callout ${cssUtilityClasses.callout}"${ typeof pseudo === 'string' ? ' data-callout="'+pseudo+'"' : '' }>
			<p>${ md.renderInline(content) }</p>
		</div>`;
	});

	eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
		const md = new markdownIt();
		return inline
			? md.renderInline(content)
			: md.render(content);
	});
	
	eleventyConfig.addPairedShortcode("printf", (content, ...values) => {
		return content.replace(/{(\d+)}/g, (match, index) => (typeof values[index] !== 'undefined') ? values[index] : match);
	});

	/* FILTERS */

	eleventyConfig.addFilter("slug", (input) => {
		const options = {
			replacement: "-",
			remove: /[&,+()$~%.'":*?!<>{}]/g,
			lower: true
		};
		return slugify(input, options);
	});

	eleventyConfig.addFilter("charToHtml", function(string) {
		return string.replace(/[\u0020-\u007E]/g, (v) => '&#'+v.charCodeAt()+';');
	});

	eleventyConfig.addFilter("cloudinaryEscape", function(string) {
		return encodeURIComponent(string).replaceAll(',', "%252C"); // Double-escape commas to avoid being seens as a parameter-separating comma
	});

	eleventyConfig.addFilter("split", function(string, delimiter) {
		delimiter = delimiter || ',';
		return string.trim().split(delimiter);
	});

	eleventyConfig.addFilter('makeUppercase', function(string) { return string.toUpperCase() });
	eleventyConfig.addFilter('makeLowercase', function(string) { return string.toLowerCase() });

	eleventyConfig.addFilter('console', function(value) {
		const str = util.inspect(value);
		return `<div style="white-space: pre-wrap;">${ unescape(str) }</div>`;
	});

	// -- DATE FILTERS
	// Date formatting (custom)
	eleventyConfig.addFilter("date", function(date, format, locale = 'en') {
		moment.locale(locale);
		return moment(date).utc().format(format); // Adjust for UTC
	});

	// Date formatting (human readable)
	eleventyConfig.addFilter("readableDate", dateObj => {
		return DateTime.fromJSDate(dateObj).toUTC().toFormat("dd LLL yyyy");
	});

	// Date formatting (machine readable)
	eleventyConfig.addFilter("machineDate", dateObj => {
		return DateTime.fromJSDate(dateObj).toUTC().toFormat("yyyy-MM-dd");
	});

	// -- LOCALISATION FILTERS
	// Sort a collection of pages for the navigation based on the locale's navSet setting
	eleventyConfig.addFilter('sortNavLocale', function(collection, navSet) {
		if (!Array.isArray(collection)) { return collection; }

		let collectionFiltered = collection.filter(function(c) {
			return navSet.indexOf(c.fileSlug) > -1;
		});

		// Neat solution found on https://stackoverflow.com/a/44063445/3624336
		let collectionSorted = collectionFiltered.slice().sort(function(a, b){
			return navSet.indexOf(a.fileSlug) - navSet.indexOf(b.fileSlug);
		});
		
		return collectionSorted;
	});

	eleventyConfig.addFilter("tagLocale", function(collection, locale) {
		if (!locale) { return collection; }
		const filtered = collection.filter(item => item.data.language == locale);
		return filtered;
	});

	eleventyConfig.addFilter("findVariants", function(collections, collectionName, fileSlug, locale) {
		if (!collections || !collectionName || !locale || !fileSlug) { return []; }
		if (!Object.keys(collections).includes(collectionName)) { return []; }
		const collection = collections[collectionName];
		const filtered = collection.filter(item => item.fileSlug == fileSlug && item.data.locale != locale);
		return filtered;
	});

	eleventyConfig.addFilter("getLocalisedPage", function(collections, fileSlug, locale) {
		if (!collections || !locale || !fileSlug) { return false; }
		const collection = collections['pages_all'];
		const filtered = collection.find(item => item.fileSlug == fileSlug && item.data.locale == locale);
		return filtered;
	});

	// -- MINIFICATION FILTERS
	// Minify HTML/SVG
	eleventyConfig.addFilter("htmlmin", function(code) {
		return htmlmin.minify(code, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true
		});
	});

	// Minify CSS
	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	// Minify JS
	eleventyConfig.addFilter("jsmin", function(code) {
		let minified = UglifyJS.minify(code);
		if (minified.error) {
			console.log("UglifyJS error: ", minified.error);
			return code;
		}
		return minified.code;
	});

	/* COLLECTIONS */

	eleventyConfig.addCollection("pages_all", function(collection) {
		return [].concat(
			collection.getFilteredByGlob("./src/en/pages/*.md"),
			collection.getFilteredByGlob("./src/fr/pages/*.md"),
			collection.getFilteredByGlob("./src/en/pages/*.njk"),
			collection.getFilteredByGlob("./src/fr/pages/*.njk"),
		);
	});

	eleventyConfig.addCollection("posts_all", function(collection) {
		return [].concat(
			collection.getFilteredByGlob("./src/en/posts/*.md"),
			collection.getFilteredByGlob("./src/fr/posts/*.md"),
			collection.getFilteredByGlob("./src/en/posts/*.njk"),
			collection.getFilteredByGlob("./src/fr/posts/*.njk"),
		);
	});

	// -- ENGLISH
	eleventyConfig.addCollection("pages_en", function(collection) {
		return [].concat(
			collection.getFilteredByGlob("./src/en/pages/*.md"),
			collection.getFilteredByGlob("./src/en/pages/*.njk"),
		);
	});

	eleventyConfig.addCollection("posts_en", function(collection) {
		return [].concat(
			collection.getFilteredByGlob("./src/en/posts/*.md"),
			collection.getFilteredByGlob("./src/en/posts/*.njk"),
		);
	});

	// -- FRENCH
	eleventyConfig.addCollection("pages_fr", function(collection) {
		return [].concat(
			collection.getFilteredByGlob("./src/fr/pages/*.md"),
			collection.getFilteredByGlob("./src/fr/pages/*.njk"),
		);
	});

	eleventyConfig.addCollection("posts_fr", function(collection) {
		return [].concat(
			collection.getFilteredByGlob("./src/fr/posts/*.md"),
			collection.getFilteredByGlob("./src/fr/posts/*.njk"),
		);
	});

	// only content in the `posts/` directory
	eleventyConfig.addCollection("posts", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			var postsRegExp = new RegExp("^\.\/"+(root ? (root+'/') : '')+"posts\/");
			return item.inputPath.match(postsRegExp) !== null;
		});
	});

	// only _published_ content in the `fonts/` directory
	eleventyConfig.addCollection("fonts", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			var postsRegExp = new RegExp("^\.\/"+(root ? (root+'/') : '')+"fonts\/");
			var isDraft = Boolean(item.data.draft);
			return item.inputPath.match(postsRegExp) !== null && !isDraft;
		}).sort(function(a, b) {
			return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
		});
	});

	/* TRANSFORMS */

	// PurgeCSS
	eleventyConfig.addTransform('purge-and-inline-css', async (content, outputPath) => {
		if (!outputPath.endsWith('.html')) {
			return content;
		}

		let safeSelectors = purgeCssSafeList._global;
		if (/\/(index\.html|fr\/index\.html)/.exec(outputPath)) { safeSelectors = safeSelectors.concat(purgeCssSafeList.home); }
		else if (/\/(about|fr\/a-propos)/.exec(outputPath)) { safeSelectors = safeSelectors.concat(purgeCssSafeList.about); }
		else if (/\/(blog|tags)\//.exec(outputPath)) { safeSelectors = safeSelectors.concat(purgeCssSafeList.blog); }

		const purgeCSSResults = await new PurgeCSS().purge({
			content: [{ raw: content }],
			css: [`${outputDir}/${metadata.assetUrl.allStyles}`],
			keyframes: true,
			safelist: safeSelectors,
		});

		return content.replace('/*INLINE_CSS*/', (purgeCSSResults[0].css || ''));
	});

	// Minify HTML output
	eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
		if (!outputPath.endsWith('.html')) {
			return content;
		}

		let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true
		});
		return minified;
	});

	// Minify JSON output (this can get heavy for big JSON files)
	eleventyConfig.addTransform('jsonmin', function(content, outputPath) {
		if (outputPath.endsWith('.json')) {
			return JSON.stringify(JSON.parse(content));
		}
		return content;
	});

	/* MISC OPTIONS */

	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		// Optional, default is "---"
		excerpt_separator: "<!-- excerpt -->"
	});

	// Don't process folders with static assets e.g. images
	eleventyConfig.addPassthroughCopy({
		[`${root}/_includes/assets/fonts`]: "/assets/fonts",
		[`${root}/_includes/assets/img`]: "/assets/img",
		[`${root}/_includes/assets/css`]: "/assets/css",
		[`${root}/_includes/assets/jsmin`]: "/assets/js",
	});

	/* Markdown Plugins */
	let markdownIt = require("markdown-it");
	let markdownItAnchor = require("markdown-it-anchor");
	let markdownItFootnote = require("markdown-it-footnote");
	let markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true,
	};
	let markdownItAnchorOptions = {
		permalink: true,
		permalinkSpace: false,
		permalinkSymbol: '#',
		permalinkClass: 'heading-anchor',
		renderPermalink: (slug, opts, state, idx) => {
			// Based on https://nicolas-hoizey.com/articles/2021/02/25/accessible-anchor-links-with-markdown-it-and-eleventy/
			// Itself based on fifth version from https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
		
			// Create the opening/closing <a> and the <svg><use /></svg> tokens
			const headingAnchorTokenOpen = Object.assign(new state.Token('link_open', 'a', 1), {
				attrs: [
					...(opts.permalinkClass ? [['class', opts.permalinkClass]] : []),
					['href', opts.permalinkHref(slug, state)],
					...Object.entries(opts.permalinkAttrs(slug, state)),
				],
			});
			const svgSymbolTokenOpen = Object.assign(new state.Token('svg_open', 'svg', 1), {
				attrs: [
					['width', 16],
					['height', 16],
					['class', 'heading-anchor-symbol'],
					['aria-hidden', 'true'],
					['focusable', 'false'],
				]
			});
			const svgUseTokenOpen = Object.assign(new state.Token('use_open', 'use', 1), {
				attrs: [
					['xlink:href', '#anchor-link'],
				]
			});
			const svgUseTokenClose = Object.assign(new state.Token('use_close', 'svg', -1));
			const svgSymbolTokenClose = Object.assign(new state.Token('svg_close', 'svg', -1));
			const headingAnchorTokenClose = Object.assign(new state.Token('link_close', 'a', -1));

			// idx is the index of the heading's first token
			const tokensBeforeContent = [headingAnchorTokenOpen, svgSymbolTokenOpen, svgUseTokenOpen, svgUseTokenClose, svgSymbolTokenClose];
			const tokensAfterContent = [headingAnchorTokenClose];
			// insert the anchor opening inside the heading, before the content token
			state.tokens.splice(idx + 1, 0, ...tokensBeforeContent);
			// insert the anchor closing after the heading opening and the content token + the tokens before the content
			state.tokens.splice(idx + 2 + tokensBeforeContent.length, 0, ...tokensAfterContent);
		},
		slugify: (s) => encodeURIComponent(String(s).trim().normalize('NFD').replace(/([\u0300-\u036f]|[,;:.'"?!&])/g, '').toLowerCase().replace(/\s+/g, '-')), // Remove accents/punctuation in addition to regular slugification
	};

	eleventyConfig.setLibrary("md", markdownIt(markdownItOptions)
		.disable('code')
		.use(markdownItAnchor, markdownItAnchorOptions)
		.use(markdownItFootnote)
	);

	/* TIME TO JAM */

	return {
		templateFormats: ["md", "njk", "html", "liquid"],
		pathPrefix: "/",
		markdownTemplateEngine: "liquid",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: `./${root}/`,
			includes: "_includes",
			data: "_data",
			output: outputDir
		}
	};
};
