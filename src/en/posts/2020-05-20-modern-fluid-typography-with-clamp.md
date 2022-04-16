---
slug: modern-fluid-typography-with-clamp
title: Modern Fluid Typography with clamp()
summary: Get a more consistent sizing with viewport-based font sizing
date: 2020-05-20
metaImageBackground: 'https://images.unsplash.com/reserve/uZYSV4nuQeyq64azfVIn_15130980706_64134efc6e_o.jpg'
tags:
    - css
    - sass
    - clamp
    - typography
    - font
    - quick-tip
---

Recently, CSS introduced `min()` and `max()` which are now available in every major browser. Along with those two came `clamp()`, which is basically a wrapper for the combination of the two aforementioned functions, but easier to read: `clamp(MIN, VAL, MAX)` (where `VAL` would usually be a responsive unit). Here's a quick tip to go along with its use!

You can now define your font to scale with the viewport size with a simple line, such as `clamp(1rem, 2.5vw, 2rem)`, which is nice and clean. However, the scaling will be inconsistent depending on the font-size you're ideally targeting, even with `clamp(1rem, 0.5rem + 2vw, 2rem)` (which is already a lot better, as the font will scale with the zoom level). You could try to find the sweet spot manually for each heading size, for example, but if you're a bit like me, I like to leave the computation bit to the machine.

Before, we'd use a tool to calculate the ideal font-size based on the viewport, and add media queries to "lock" the size between minimum and maximum, which was great, but three declarations is a lot with something we can achieve simply nowadays.

You'd probably be using a pre-processor to define these in the past, like so (stripped down bare; assumes all units are the same):

```scss
@mixin fluid-type($min-vw, $max-vw, $min-value, $max-value) {
	$factor: 1 / ($max-vw - $min-vw) * ($max-value - $min-value);
	$calc-value: unquote('#{ $min-value - ($min-vw * $factor) } + #{ 100vw * $factor }');

	font-size: $min-value;

	@media screen and (min-width: #{ $min-vw }) {
		font-size: calc(#{$calc-value});
	}

	@media screen and (min-width: #{ $max-vw }) {
		font-size: $max-value;
	}
}
```

What is nice about this technique is that it results in a linear range that scales with the target size, instead of using the viewport size, which might be excessive or too small to work across the board. I suppose you could simplify the mixin call by having your viewport breakpoints defined as global variables.

What would you say about getting the best of both worlds? We can reuse our code from before, but strip away a few bits and pieces, to get a condensed Sass mixin, _and_ a condensed CSS output:

```scss
@mixin fluid-type($min-vw, $max-vw, $min-value, $max-value) {
	$factor: 1 / ($max-vw - $min-vw) * ($max-value - $min-value);
	$calc-value: unquote('#{ $min-value - ($min-vw * $factor) } + #{ 100vw * $factor }');

	font-size: $min-value; // Fallback for older browsers
	font-size: clamp(#{if($min-value > $max-value, $max-value, $min-value)}, #{$calc-value}, #{if($min-value > $max-value, $min-value, $max-value)});
}
```

{% callout %}
`clamp()` won't allow `MIN > MAX`, so we add a couple of `if()` inside the clamp function to flip the values if the small breakpoint font size is larger than its large breakpoint counterpart. Also, you don't need to wrap the middle expression in `calc()`, as `clamp()` will evaluate its contents just the same!
{% endcallout %}

Here's an example using this mixin, and its result:

```scss
p {
	// Calling the mixin below…
	@include fluid-type(20rem, 64rem, 1rem, 2rem);

	// … outputs the following:
	font-size: 1rem;
	font-size: clamp(1rem, 0.5454545455rem + 2.2727272727vw, 2rem);
}
```

With this, we now have type that scales in a fluid and consistent fashion, all with a single line of CSS (or two, rather, with our fallback), no media queries, and we can "inverse scale" if we want to, thanks to the conditionals on the minimal and maximal values. I like this level of control, but you could also run this with native CSS and some custom properties.

CSS is a programming language that just keeps getting better!

## More reading

-   [`clamp()` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
-   ["Sass and clamp" on Adactio](https://adactio.com/journal/16887): a deeper look at font sizing with new CSS, which raises some very good points!
