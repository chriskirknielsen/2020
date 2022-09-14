---
slug: css-grid-with-a-preferred-column-count
title: 'CSS Grid with a preferred column count'
summary: Set up a CSS grid with a specific ideal number of columns.
date: 2022-09-13
metaImageBackground: 'https://images.unsplash.com/photo-1561386384-b4eac7f8724b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbHVtbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
tags:
    - quick-tip
    - css
---

Have you ever had to create a neat little grid of logos on a page? CSS can help you with grid and its `grid-template-columns` property. Using `auto-fill` and `minmax` you can say “Take up as much space as possible but I want each item to be between X and Y wide!” Legitimately powerful stuff in its own right.

I have needed this but with a specific number of columns: I want 3 columns when there is space, but I also don’t want to write media/container queries for narrower viewports (nothing wrong with using media queries, mind you, but with the recent advances in CSS, they are not always the best tool for the job). Well, I’ve come up with this little solution that I quite like. First, the code, then a breakdown, and finally a demo:

```css
.grid {
	--_cols: max(1, var(--cols, 3)); /* Ideal number of columns is 3 by default; at least one! */
	--_gap: var(--gap, 2.5rem); /* Space between each logo */
	--_min: var(--min, 160px); /* Logos must be at least this wide */
	--_max: var(--max, 320px); /* Logos cannot be wider than this size */

	display: grid;
	gap: var(--_gap);
	/* Take up at least --_min, and up to 100%/count (minus value of each added gap), whichever is largest */
	grid-template-columns: repeat(auto-fill, minmax(max(var(--_min), calc((100% - var(--_gap) * (var(--_cols) - 1)) / var(--_cols))), 1fr));
}
```

I define four pseudo-private custom properties, denoted by an underscore as a prefix (yet another excellent [Lea Verou idea](https://lea.verou.me/2021/10/custom-properties-with-defaults/)). The `.grid` element can take overrides with the `style` attribute, such as `style="--cols: 4; --gap: 10px;"`. The grid is set up with `display: grid;` and the gap between each item is controlled by the `--gap` variable.

Now for the interesting part, `grid-template-columns`, which looks a bit complex, so let me break it down:

-   `repeat` does exactly that: repeats the second parameter (`minmax(…)`) as many times as indicated by the first parameter (`auto-fill`). Here, that is a special keyword to dynamically create the columns depending on their provided size and the available space. You could use `var(--cols)` but that won’t adapt to the viewport size. `auto-fit` is another valid keyword: in this [CSS-Tricks article, Sara Soueidan explains the difference](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) better than I ever could.
-   `minmax(max(…), 1fr)` sets the width to be between the first and second value. The first value here is a `max()` function I’ll explain in a moment, and the second is `1fr`, standing for “one fraction of the available space”.
-   `max(…)` uses the greatest value in the provided list, in this case either the `--_min` variable or the `calc()` expression (described below). Note that you do not need to wrap this in a `calc` function when you are already within `min`, `max`, or `clamp` but I feel it improves readability (and minifiers will remove this regardless!).
-   `calc(…)` is doing the heavy lifting: `100%` is the grid’s available width, and if `--_cols` is set to `3`, I want `100%/3 = 33.333%` to be used. But wait, that doesn’t account for gaps… So, just like a good ol’ flex-based grid, I can subtract the gap value from the total available space, keeping in mind that if I have 3 columns (`N = 3`), there are 2 gutters (`N - 1`), meaning that the formula is `100% - gap-size * (columns - 1)`, which then gets divided by the number of columns, resulting in the available space for each column: `(100% - var(--_gap) * (var(--_cols) - 1)) / var(--_cols)`. Who said maths were useless after school?!

This results in a grid that will have up to `--_cols` columns, but that will show fewer columns on narrower viewports, depending on `--_min`, `--_max`, and `--_gap` (or their defaults if omitted). The only way this would break, I believe, would be if `--_min` was set to a rather large value. If you need to implement this and don’t trust that value, you can wrap the `max(…)` expression in a `min(100%, max(…))`. I’d reach for `clamp` but it is not exactly the same since `clamp(var(--_min), calc(…), 100%)` does not evaluate to the same result, as `--min` could be wider than `100%` — watch out for those kinds of traps!

There is a little more going on for each grid item and its logo (`<img>` or `<svg>`), leveraging those `--_min` and `--_max` variables, but they do not define the column sizes so I’ve left them out from the code above, but you’ll find all them in the CodePen demo. Here’s how that looks in action (if your browser supports grid, custom properties and max functions, that is — I’ve removed flex and var-less/min-max-less fallbacks for conciseness, but always favour progressive enhancement in client work!):

{% codepen "https://codepen.io/chriskirknielsen/pen/oNdzOwJ/", "result", "480" %}

This is one of many possible ways to make this work, and I have likely over-engineered this, so if you have ideas to simplify this code, I’d love to know. In the meantime, keep on making cool things!
