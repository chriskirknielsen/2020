---
title: Testing!
summary: Testing some syntax highlighting
date: 2019-10-19
language: en
tags:
  - post
  - css
  - js
---

# Test

I like to write `code` sometimes and it looks like `<html>` with a twist.

## CSS

``` css
pre[class*="language-"] {
	font-family: monospace !important; /* win! */
}

#my-id.visible > * { color: #ff0000; }
```

## JS

``` js
function myFunction(arg) {
  // Hello
  /* Comment */
  var test2 = arg && arg.trim() == 'test';
  var test = arg && arg.trim() == 'test';
  if (test) {
    return false;
  }
  return true;
}
```