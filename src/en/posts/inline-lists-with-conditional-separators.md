---
title: Inline lists with conditional separators
summary: Only show a separator when two items are next to each other, and skip for new lines.
date: 2020-07-18
language: en
tags:
  - post
  - css
  - quick-tip
---

Here's a quick tip that my superior shared with me (thanks Matthew! — and you can find a version of it on [StackOverflow](https://stackoverflow.com/questions/15306108/css-styling-for-horizontal-list-with-bullet-only-between-elements/40162380#40162380), by Tom Robinson from 2016!). I always keep coming back to it, looking in repositories for old projects: I figured it's about time I had an easy way to find it.

Say you have an inline list of items that are next to each other, but the list is long or the container is narrow — whichever, as long as it's at risk of wrapping to a new line. And what if you wanted to have a separator between each item? Sounds easy, right? Add a pseudo-element on each `li` that has a sibling, like `li + li::after`, and you're done!

Not quite.

If your list wraps, you will see your separator at the end of a line (or in some cases, even at the start of the next one!), which doesn't look all that great. Let's try to fix that!

The heart of this trick is the following idea, a very clever one: whitespace is collapsed between words if it's at a line break. However, if that pseudo-element has a `display` value other than `inline`, it won't collapse, so you can't use regular sizing properties like `width` or `padding`, but you can use text-related ones… like `letter-spacing`!

By defining a rather high letter spacing, we can adjust the length of our whitespace so that there is enough room for our separator. We'll add that via a background-image, since we need the `content` to be a whitespace (`" "`) and nothing else.

Here's the whole setup, using a pipe as a separator, similar to what I use on my website footer:

```css
/*
    1: Not essential but good to do to if your list lives alongside other content
    2: If you don't have a reset in place, this will remove the user-agent stylesheet default padding
    3: This is required to ensure all items flow next to each other
    4: The whitespace required for this trick to work — no other character should be used
    5: Setting a larger letter-spacing effectively provides a wider whitespace
    6: Apply a background image to fake any kind of bullet or pipe character, or any other separator you can think of
*/

.inline-list {
    display: inline-block; /* 1 */
    padding: 0; /* 2 */
}

.inline-list > li {
    display: inline; /* 3 */
}

.inline-list > li::after {
    content: " "; /* 4 */
    letter-spacing: 1em; /* 5 */
    background: linear-gradient(90deg, transparent calc(50% - 0.03125em), currentColor 0, currentColor calc(50% + 0.03125em), transparent 0); /* 6 */
}
```

{% callout %}
Setting a gradient stop of `0` will effectively make the colour startpoint the same as the previous colour's endpoint, removing the need to repeat the `calc()` declarations in this situation.
{% endcallout %}

Here I'm setting a very thin line at the centre of the space, but you could use any background, such as a `radial-gradient` to make a bullet, or load in an SVG or image… We don't need to ensure it isn't applied to the last item since the whitespace will collapse at the end of the text-block that is our list, but if you do happen to run into issues, you can add `:not(:last-child)` to prevent that behaviour.

## Caveat

If you try this and the effect doesn't work, you might want to check that your text content isn't surrounded by whitespace inside the list item — for example, here the links have whitespace around them due to indentation:

```html
<ul class="inline-list">
    <li>
        <a href="/en">English</a>
    </li>
    <li>
        <a href="/fr">Français</a>
    </li>
    <li>
        <a href="/da">Dansk</a>
    </li>
</ul>
```

The line break and tab between `</a>` and `</li>` will be counted as whitespace and the pseudo-element will collapse. To fix this, you must ensure your list item content is declared within a single line, padded with a "comment hack", or split within the element tag across lines:

```html
<ul class="inline-list">
    <li><a href="/en">English</a></li>
    <li><!--
        --><a href="/fr">Français</a><!--
    --></li>
    <li
        ><a
            href="/da"
        >Dansk</a
    ></li>
</ul>
```

I'd recommend the first one.

## Demo

{% codepen "https://codepen.io/chriskirknielsen/pen/KKVryZB/", "result", "480", "33007"  %}