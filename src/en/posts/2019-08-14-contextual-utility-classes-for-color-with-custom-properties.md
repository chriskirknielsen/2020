---
slug: contextual-utility-classes-for-color-with-custom-properties
title: Contextual Utility Classes for Color with Custom Properties
summary: Use the cascade to colour links in their context.
externalHost: CSS-Tricks
externalUrl: https://css-tricks.com/contextual-utility-classes-for-color-with-custom-properties/
metaImageBackground: 'https://css-tricks.com/wp-content/uploads/2019/08/currentColor.png'
date: 2019-08-14
tags:
    - css
---

I wrote an article on CSS-Tricks about using the power of the cascade to style links within their context, with custom properties!

Here's an example: you have a block with a dark-blue background and light grey text. Say that block has link, and you want that link to invert the background and the text colour when it becomes hovered/focused. You can do that easily if you apply utility classes (`.bg--dark-blue` and `.color--light-grey`) that pass along custom properties, that you can then levarage in your link styles.

Simple, when you boil it down, but very powerful, because if the block's colours change, you don't need to worry about updating your link styles.
