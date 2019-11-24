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

Say you have a `.container` class with a `max-width` value and `margin: 0 auto`. You can also add `overflow-x: hidden` to the `body` (or a main wrapper around your container that takes up 100% of the width) to help with breakout elements that might eat up extra space for the vertical scrollbar on some browsers/operating systems.

```css
.container {
  max-width: 48em;
  margin: 0 auto`;
}
```

You can break out of this container by making it take up the whole screen's width (`100wv`), then move it left by `50%` of the container minus half the screen's width (`50vw`).

```css
.breakout {
  position: relative;
  width: 100vw;
  left: calc(50% - 50vw);
}
```

Additionally, if you want to really push the backward compatibility to avoid a broken layout for browsers that support the `vw` unit but not `calc()`, you can use `calc(50vw * 2)`. This will ensure older browsers won't have content outside the viewport.

As a bonus, if you want to avoid having an absurdly large content on an ultra-wide viewport, use "dynamic" padding! Since padding can't have a negative value, this `calc` value will take half the screen width (`50vw`) minus half the maximum width of the content (`80em / 2 = 40em`). If the screen width is equal to `80em`, the padding will be `0`, but if it is `100em`, the padding will evaluate to `100em/2 - 40em = 10em` on each side.

```css
@media (min-width: 80em) {
  .breakout {
    padding: 0 calc(50vw - 40em);
    /* 40em = min-width value of 80em divided by 2 */
  }
}
```