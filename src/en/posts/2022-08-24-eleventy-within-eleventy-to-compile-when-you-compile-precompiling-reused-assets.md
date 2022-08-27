---
slug: eleventy-within-eleventy-precompiling-reused-assets
title: 'Eleventy within Eleventy to compile when you compile: precompiling reused assets'
summary: Pre-compile some reused assets to avoid repeating the same operation.
date: 2022-08-25
metaImageBackground: 'https://images.unsplash.com/photo-1602157339949-d229cb6d223c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9zc3VtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
tags:
    - eleventy
    - js
templateEngineOverride: njk,md
---

A bit of a weird title, but I’m sure Xzibit would approve. So let me explain what I’m on about: I have two components on my site that use inlined JS: once in the `<head>`, once before `</body>`. These two components are included on every page, and me being forever the optimist—I mean optimiser—I minify those bits of JS with a `jsmin` filter. This is an [approach recommended by Eleventy](https://www.11ty.dev/docs/quicktips/inline-js/). Totally valid, if you do this, don’t let me stop you!

Additionally, those components of mine use some global data, so I inject it into a variable via Nunjucks, with a little bit of processing to remove unused information (in my case, I have an object but I only need its keys), making the output lighter. This also means that regular bundling/minification as a build step before Eleventy (like gulp) can’t be done since it’s a Nunjucks file at this point, not pure JS. (well, it’s probably possible but it sounds like a lot of file read/write operations and I am not that smart)

Here’s how that particular section looks in that `head.njk` component of mine:

```jsx{% raw %}
{% set headScript %}
(function(){
	// tokens.json is a data file in the _data folder
	// objectKeys is a custom filter that runs Object.keys on an object
	// dump is a Nunjucks filter that outputs the variable contents in a JS-compatible format
	// safe is a Nunjucks filter that prevents escaping special characters, indicating the contents are safe to render as-is
	const themeKeys = {{ tokens.themes | objectKeys | dump | safe }}; // => Outputs a valid JS object

	// For example, set the first theme as the active theme on load
	document.documentElement.data('theme', themeKeys[0]);
})()
{% endset %}
<script>{{ headScript | jsmin | safe }}</script>
{% endraw %}
```

Ultimately, this all works but here’s my “issue”: if, like me, you are seeing Eleventy warning you that the `jsmin` filter is taking up quite a bit of time by running in all the pages (once per page for every minified script), then read on: I have an idea! If not, your build is probably fast enough that you don't need to worry about this.

## Eleventy’s before event

Okay so I need to build the file first so I can include it into my `head.njk` component, but I cannot compile the file before everything else… Hey, what’s this [eleventy.before event](https://www.11ty.dev/docs/events/#eleventy.before)?

This event lets you run some operations before Eleventy builds your site. Sounds like the perfect time to compile those JS files, if you ask me. First off, here is how that bit of code above looks in its own file (I removed the comments to remain brief):

```jsx
// src/assets/js/head-script.js.njk
---
permalink: head-script.js
---
{% raw %}
{% set headScript %}
(function(){
	const themeKeys = {{ tokens.themes | objectKeys | dump | safe }};
	document.documentElement.data('theme', themeKeys[0]);
})()
{% endset %}
{{ headScript | jsmin | safe }}
{% endraw %}
```

{% callout %}
I’m wrapping this in an Immediately-Invoked Function Expression (also called IIFE) so that the JS minifier can make variable names shorter. I’m also leaving the `script` tags out so that’ll be the responsibility of the `head` component, outputting this as a JS file and nothing else.
{% endcallout %}

So how do you run Eleventy before Eleventy runs? Well, you can run it on the command line, so if you make use of the Node-provided `child_process.exec` method, you can run `npx @11ty/eleventy`—very cool. I could probably provide all the options right there but honestly, using a config file is way easier to me. Yup, two Eleventy config files—that there is enough to make me realise this is weird. But does that stop me? Hah, no!

Here’s how I set up the `before` event in my `.eleventy.js` file (my main configuration file):

```js
// .eleventy.js
const { exec } = require('child_process'); // Require the method to run the code
module.exports = function (eleventyConfig) {
	eleventyConfig.on('eleventy.before', async function () {
		return new Promise((resolve, reject) => {
			exec('npx @11ty/eleventy --config=_before.eleventy.js', (error, stdout, stderr) => {
				if (error) {
					return reject(error); // Early return means the resolve never gets called
				}
				resolve(stdout);
			});
		});
	});

	// ... and the rest of my config below
};
```

I use a promise to ensure Eleventy waits for this to be done before the main build. The `exec` method takes a second argument, which is a callback function, so I’m using that as a signal that processing is done, meaning `before` has finished running. It provides an `error` argument, which will be `null` if all went well, letting me resolve or reject the promise accordingly. There is quite a bit going on despite being a short block of code, I'll admit!

The `_before.eleventy.js` file is a bit weird, so let me explain what I need it to do before showing the code: I want to pull in the global data, but also I don’t want it to look over the whole project, only the folder with my script to pre-compile. To that end, I adjust the input and output paths, and I make use of `addGlobalData` to load in the tokens file. I also add in my `objectKeys` filter, and the star of the show: `jsmin` (along with the `terser` package). I need to ignore all other files, controlled by the `ignores` method which lets me define files to add or remove from the ignored list. I want my `*.js.njk` files and none of the real `.js` files. And then I return all that good stuff. Here’s how that looks:

```js
// _before.eleventy.js
const inputDir = 'src/assets/js/'; // Root folder
const outputDir = 'src/_includes/assets/js'; // Build destination folder
const tokens = require('./src/_data/tokens.json');
const { minify } = require('terser');

module.exports = function (eleventyConfig) {
	eleventyConfig.ignores.add('**/*.js');
	eleventyConfig.ignores.delete('*.js.njk');

	eleventyConfig.addGlobalData('tokens', tokens);
	eleventyConfig.addFilter('objectKeys', (obj) => Object.keys(obj));
	eleventyConfig.addNunjucksAsyncFilter('jsmin', async function (code, callback) {
		try {
			const minified = await minify(code);
			callback(null, minified.code);
		} catch (err) {
			console.error('Terser error: ', err);
			callback(null, code); // Fail gracefully.
		}
	});

	return {
		templateFormats: ['njk', 'html'],
		pathPrefix: '/',
		dir: {
			input: inputDir,
			output: outputDir,
		},
	};
};
```

And now, when the main Eleventy build runs, it’ll run this beforehand, creating my `head-script.js` file in the `_includes/assets/js` folder, which I can inject in my `head.njk` component:

```jsx{% raw %}
<script>{% include 'assets/js/head-script.js' %}</script>
{% endraw %}
```

The `jsmin` filter now runs once on the same piece of code instead of running on every single page using this layout. It’s a minor optimisation, for sure, but it does make my build time non-trivially faster, so I’ll take it. Given I have 2 scripts and about 80 pages, that's running it twice instead of 160 times, so technically an improvement of 98.75%, I guess? Someone who is good at maths please help me calculate this. My statistic is dying.

### Uh oh, it’s looping

When I first did this, I realised that any change would trigger a new build, which would trigger the `before` event, which would compile the files, which would trigger a change, which would trigger a new build… you get the point: an infinite loop. But Eleventy has a way to prevent this: ignores, to the rescue (again)! Ignored files are not watched for changes, so by ignoring the compiled `head-script.js` file, Eleventy would not fall into a loop. I didn’t ignore the original `njk` file though, meaning that changing it would trigger a new build as well. Neat!

```jsx
eleventyConfig.ignores.add('src/_includes/assets/js/head-script.js');
```

### Bonus: includes?

I admit it: my example was simplified. There is a whole JS script making use of those tokens that are included and captured in that `headScript` variable. Well, not to worry, Eleventy’s Render plugin saves the day (note that it must be added in the “before” config). By using `setAsync` instead, I can capture the rendered file and run `jsmin` the same way as before. (hat tip to Aankhen from the Eleventy Discord for tipping me to the existence of `setAsync`!)

```jsx
// src/assets/js/head-script.js.njk (with "includes")
---
permalink: head-script.js
---
{% raw %}
{% setAsync "headScript" %}
(function(){
	const themeKeys = {{ tokens.themes | objectKeys | dump | safe }};
	{% renderFile "./src/assets/js/theme-selector.js", null, "html" %}
})()
{% endsetAsync %}
{{ headScript | jsmin | safe }}
{% endraw %}
```

{% callout %}
The file is rendered with the HTML engine since that effectively passes it as plaintext, as [noted in the docs](https://www.11ty.dev/docs/languages/), preventing any unnecessary transformations on the file.
{% endcallout %}

One caveat is that those files get rendered at the root of the main build due to the `permalink` in the frontmatter, but I'm sure that could be worked around. And that’s it. That’s my hacky solution. But then [on Twitter, I was asked about if I had tried a global data file](https://twitter.com/eleven_ty/status/1562480526396919808)… here’s what I came up with.

## Using a global data file instead

I couldn’t make it work. Maybe I need more caffeine but couldn't figure out where to start, sorry!

## Quick update

After publishing this post, [Zach proposed using a custom cache solution](https://twitter.com/eleven_ty/status/1562796287786754049) which is indeed a great idea! I made a minor adjustment to set a particular cache key (so the filter can be called like `… | jsmin('someKey')`), but the idea is the same:

```js
const jsminCache = {};
// ...
module.exports = function (eleventyConfig) {
	eleventyConfig.addNunjucksAsyncFilter('jsmin', async function (code, ...rest) {
		const callback = rest.pop();
		const cacheKey = rest.length > 0 ? rest[0] : null;

		try {
			if (cacheKey && jsminCache[cacheKey]) {
				// Wait for the data, wrapped in a resolved promise in case the original value already was resolved
				const cacheValue = await Promise.resolve(jsminCache[cacheKey]);
				// Access the code property of the cached value
				callback(null, cacheValue.code);
			} else {
				const minified = minify(code);
				if (cacheKey) {
					// Store the promise which has the minified output (an object with a code property)
					jsminCache[cacheKey] = minified;
				}
				// Await and use the return value in the callback
				callback(null, (await minified).code);
			}
		} catch (err) {
			console.error('Terser error: ', err);
			callback(null, code); // Fail gracefully.
		}
	});
};
```

Given [the callback is always the last argument in an async Nunjucks filter](https://www.11ty.dev/docs/languages/nunjucks/#asynchronous-nunjucks-filters), I used rest parameters to get an array of the arguments. By using `.pop()`, I get the last value in the `rest` array, no matter the length, and it is removed from the array. Whatever is left is either the cache key, or if the filter was used without a second argument, the array will have no items, so I define the key as `null`.

Running Eleventy in Eleventy is a fun challenge, but this caching solution is simple, elegant, and also quicker! I ran my build five times and the caching technique was significantly faster. On average, precompiling took 3.36 seconds, while caching took 2.15 seconds. It's not really surprising, but a 36% build-time decrease is definitely better.

So there you have it. My hacky solution is not a great idea for my use case. But if you have some, please let me know, I'd be super curious to hear what you come up with!
