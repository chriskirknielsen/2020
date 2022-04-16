---
slug: building-and-maintaning-components-from-utility-classes-in-eleventy
title: Building and maintaining components from utility classes in Eleventy
summary: Use a collection of utilities to form components without additional CSS.
date: 2020-06-29
metaImageBackground: 'https://images.unsplash.com/photo-1593280527195-3f0d612d90dc'
tags:
    - css
    - quick-tip
    - eleventy
---

I'm a big fan of Eleventy (this site is built with it), and also a big fan of utility-first CSS. You can check this site's source code in your browser or on GitHub: component classes are rarely used. That said, it can be quite frustrating to constantly have to find the same classes you want to use for a component in different situations — components that are at a low enough level that they shouldn't be their own template file, like a styled link or button. Take this example (the `u-` prefix stands for `utility`):

```html
<a href="https://www.11ty.dev/" class="u-displayInlineFlex u-colorPrimary u-backgroundDark u-borderOne u-paddingBlock u-paddingInline--half">Eleventy's website</a>
```

That's a lot of classes that would be pretty nice to condense into something like `c-buttonLink` or whatnot, but that would bloat your CSS a bit, and over time, with several components, that's a lot of repeated styles. It is convenient however, because if you decide the link shouldn't have a border, or the padding should change, it'd be a single property to update in your component's style declarations. With the example above, you'd have to hunt for each instance of that link, and update them all. Far from ideal…

Well, who says you can't have both in Eleventy? Oh, please note that you can probably port this to any form of website, including something like a WordPress. The idea is to build a library of components, defined with utility classes.

First, we create a data file in the `_data` folder and name it `utilities.json`. We'll then create our link's "utility set" as a collection of utility classes; with the example above, we'd get:

```json
{
	"buttonLink": "u-displayInlineFlex u-colorPrimary u-backgroundDark u-borderOne u-paddingBlock u-paddingInline--half"
}
```

{% callout %}
You can also create a `.js` file instead, if you need some JavaScript sprinkled on top of it (in my case, with comments) — just make sure to use the `module.exports = { ... }` syntax!
{% endcallout %}

We can now call this collection of utility classes very easily, we don't need to remember all the classes it requires, and if we need to update it, all is maintained in a single file that's easy to find and edit:

```html
<a href="https://www.11ty.dev/" class="{% raw %}{{ utilities.buttonLink }}{% endraw %}">Eleventy's website</a>
```

## Usage within a shortcode

I ran into a little problem when I was creating some shortcodes that make use of one of these "utility sets". The file wasn't directly called in `.eleventy.js`, but it's not a big deal. You can call your data file like you'd require a plugin in Eleventy in the global scope of the file:

```js
const utilities = require('./src/_data/utilities.js'); // Make sure to adjust the path depending on your setup!
```

You're then free to use the utilities in a shortcode definition, like a callout block in the (simplified) example below:

```js
eleventyConfig.addPairedShortcode('callout', function (content) {
	return `<div class="${utilities.callout}">
        <p>${content}</p>
    </div>`;
});
```

This may be basic, but it certainly is powerful. It has made maintenance of my components a lot easier — hopefully this will be useful for you, as well!
