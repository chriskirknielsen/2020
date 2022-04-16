---
slug: a-dry-approach-to-color-themes-in-css
title: A DRY Approach to Color Themes in CSS
summary: Using a CSS custom property trick to define themes variables only once.
externalHost: CSS-Tricks
externalUrl: https://css-tricks.com/a-dry-approach-to-color-themes-in-css/
metaImageBackground: https://css-tricks.com/wp-content/uploads/2021/02/dry-css-dark-mode.jpg
date: 2021-02-24
tags:
    - css
---

I wrote an article on CSS-Tricks about using a `--var: ;` [trick from Lea Verou](https://lea.verou.me/2020/10/the-var-space-hack-to-toggle-multiple-values-with-one-custom-property/) to define theme variables only once, when you need to respect a user-preference media query as well as CSS classes. Since you can't do both in a single declaration block, you usually repeat these theme variables… but with this little hack, no need!

```css
--color: var(--light, orchid) var(--dark, rebeccapurple);
```

The article details the trick and how to set it up (because it _does_ look weird at first glance), maybe you'll find another use case for it!
