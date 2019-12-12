---
title: Breakout Container
summary: Make a contained element span the entire horizontal space.
date: 2019-11-23
language: en
tags:
  - post
  - css
  - quick-tip
---

Here's a quick tip if you have your content limited to a certain width but you want an element to "break out".

I did not in any way invent this concept, but I've seen methods out there with some `transform` to move the element back into place but that is not necessary, you can make it a lot easier with relative positioning.

Say you have a `.container` class with a `max-width` value and `margin: 0 auto`:

```css
.container {
  max-width: 48em;
  margin: 0 auto;
}
```

You can break an element out of this container by making it take up the whole screen's width (`100wv`), then move it left by `50%` of the container (which is the middle of the screen), minus half the screen's width (`50vw`), effectively placing it on the very first horizontal pixel of the viewport.

```css
.breakout {
  position: relative;
  left: calc(50% - 50vw);
  width: 100vw;
}
```

You should also add `overflow-x: hidden` to the `body` (or a main wrapper around your container that takes up 100% of the width) to help with breakout elements that might eat up extra space for the vertical scrollbar on some browsers/operating systems.

```css
.main {
  overflow-x: hidden;
  width: 100%;
}
```

Additionally, if you want to really push the backward compatibility to avoid a broken layout for browsers that support the `vw` unit but not `calc()`, you can use any variation of `calc(50vw * 2)`. This will ensure older browsers won't have content outside the viewport.

As a bonus, if you want to avoid having an absurdly large content on an ultra-wide viewport, use "dynamic" padding! This `calc` value will take the screen width (`100vw`) minus the maximum width of the content (`80em`) and divide the result by `2`.

If the screen width is equal to `80em`, the padding will compute to `0`, but if `100vw` is worth `100em`, the padding will evaluate to `(100em - 40em) / 2 = 10em` on each side. Note that `* { box-sizing: border-box; }` is necessary to ensure the padding is subtracted from the full viewport width instead of added to it.

```css
* { box-sizing: border-box; }

@media (min-width: 80em) {
  .breakout {
    padding: 0 calc((100vw - 80em) / 2);
  }
}
```

{% callout %}
  The media query is redundant since negative padding values are ignored. I'm only leaving it to make everything crystal clear. If you do go that route and need padding for the block direction (`top` and `bottom`), be sure to define that after this rule, or use the long-hand syntax.
{% endcallout %}

Let's have a look at the complete code all together now:

{% codepen "https://codepen.io/chriskirknielsen/pen/abzoJWr/", "html,css", "480", "33007"  %}