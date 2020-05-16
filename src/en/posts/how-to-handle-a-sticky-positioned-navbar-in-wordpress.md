---
title: How to Handle a Sticky-Positioned Navbar in WordPress
summary: Ensure a sticky navbar never overlaps anything, nor gets overlapped in WordPress
date: 2020-05-16
language: en
tags:
  - post
  - css
  - sass
  - navbar
  - wordpress
---

I recently wanted to simplify how I managed a sticky navbar, with some browser fallbacks and also handling the WordPress admin bar, since I was working on a WP project (which I still thoroughly enjoy, despite being way more invested in static site generators since last year!).

I wanted an easy solution I could reuse for top-positioned elements that needed to react to the presence of a WP admin bar, and to the viewport size. I came up with a little Sass mixin to make my life a tiny bit easier, but all of this is easily doable in regular CSS, too, which we'll look at at the end of this article. This requires your navbar to be of a fixed height, which is a pretty big pre-requisite… but that's it!

Let's first take care of the setting up a pretty classic navbar as an element with a fixed height:

```scss
$navbar-height: 4rem;

.navbar {
  width: 100%;
  height: $navbar-height;
}
```

Then we'll need to position this navbar, with a fallback for older browsers:

```scss
.navbar {
  // Previous styles…

  position: fixed; // Fallback
  position: sticky;
  left: 0;
  top: 0;
}
```

Let's make sure the element that follows the navbar is pushed down on older browsers, but then reset on modern ones.

```scss
.navbar {
  // Previous styles…

  & + * { // Fallback
    margin-top: $navbar-height;

    @supports (position: sticky) {
      margin-top: 0; // Reset this for modern browsers
    }
  }
}
```

{% callout %}
This works if the structure is `.navbar` followed by `.content`. If your navbar and content don't share the same level of hierarchy but are always sitting in the same spot, you can directly target the `.content` element without the `.navbar` selector or the `+` sibling combinator.
{% endcallout %}

So far, so good: a navbar that stays stuck on the top of the page regardless of browser support. Just for kicks, let's add a little trick to offset active anchorable elements so they aren't hidden beneath the navbar.

```scss
[id] {
  scroll-margin-top: $navbar-height;
}
```

Neat. Now, let's add WordPress into the equation. First, let's set some variables for the size of the admin bar, and the breakpoints WordPress uses:

```scss
$wp-admin-bar-md: 32px;
$wp-admin-bar-sm: 48px;

$wp-breakpoint-md: 784px;
$wp-breakpoint-sm: 600px;
```

We can create a mixin to handle this kind of situation for any property we choose. We'll set up a default situation (no navbar — most users), and a condition where the bar is present, respecting media queries.

```scss
@mixin wp-admin-offset($prop: top, $offset: 0) {
  // No WP admin bar
  #{ $prop }: #{ $offset };
 
  // WP admin bar is visible
  body.admin-bar & {
    // Medium-sized devices
    #{ $prop }: if(
      $offset != 0,
      calc(#{ $offset } + #{ $wp-admin-bar-sm }),
      #{ $wp-admin-bar-sm }
    );

    // Larger devices
    @media (min-width: #{ $wp-breakpoint-md }) {
      #{ $prop }: if(
        $offset != 0,
        calc(#{ $offset } + #{ $wp-admin-bar-md }),
        #{ $wp-admin-bar-md }
      );
    }

    // Mobile-ish sizes, the admin bar isn't sticky anymore
    @media (max-width: #{ $wp-breakpoint-sm }) {
      #{ $prop }: #{ $offset };
    }
  }
}
```

{% callout %}
This code makes use of the functional version of `if` in Sass: `if (condition, value_if_true, value_if_false)`. Feel free to convert it to a traditional `@if/@else` block!
{% endcallout %}

Thanks to this mixin, we can style our navbar based on various device sizes, taking into account the WP Admin bar size and positioning method.

With our navbar, we can now do the following to keep it stuck at the top in any viewport configuration, while moving it down if the WordPress admin bar is displayed:

```scss
.navbar {
  @include wp-admin-offset(top, $navbar-height);
}
```

{% callout %}
On a small device with no `sticky` support, the navbar will be stuck below the admin bar. The reason is simply that both the admin bar and navbar would be positioned as `fixed`. Not perfect, but mobile browsers are usually up-to-date, so this is an edge case I didn't dig into (open to CSS solutions, if any!).
{% endcallout %}

All in all, we end up with the following code for our navbar:

```scss
.navbar {
  position: fixed; // Fallback
  position: sticky;
  left: 0;
  
  @include wp-admin-offset(top, 0); // Default of top: 0 is included
  
  height: $navbar-height;
  
  & + * { // Fallback
    @include wp-admin-offset(margin-top, $navbar-height);
  }

  @supports (position: sticky) {
    & + * {
      // Reset this for modern browsers
      margin-top: 0 !important; // Overwrite the specificity induced by body.admin-bar
    }
  }
}
```

In a real project, you'll probably want to adjust the colours, `z-index`, but for the purposes of this demo, we'll simplify it. You can find a [demo of this Sass implementation here](https://codepen.io/chriskirknielsen/pen/OJyZrjG).

## Hold the Sass, please

Let's revisit this without any pre-processing. Sounds like a wonderful use-case for CSS custom properties! We'll start with the variables, which will be reassigned as particular conditions are met:

```css
:root {
  --navbar-height: 4rem;
  --wp-admin-bar: 0px;
}
```

We're not defining the breakpoints as variables since [they can't be used outside of a property value](https://www.w3.org/TR/css-variables-1/#using-variables).

Now we set up our `.navbar` styles, and the sibling's offset:

```css
.navbar {
  position: fixed;
  position: sticky;
  left: 0;
  top: var(--wp-admin-bar, 0);
  
  height: var(--navbar-height);
}

.navbar + * {
  margin-top: calc(var(--navbar-height) + var(--wp-admin-bar));
}
```

All that's left is to assign the admin bar height.

```css
/* Fallback styles */
body.admin-bar {
  --wp-admin-bar: 46px;
}

@media (min-width: 784px) {
  body.admin-bar {
    --wp-admin-bar: 32px;
  }
}

@media (max-width: 600px) {
  body.admin-bar {
    --wp-admin-bar: 0px;
  }
}

/* Sticky support styles*/
@supports (position: sticky) {
  body.admin-bar {
    --wp-admin-bar: 0px;
  }
}
```

What's cool about this method is that if your navbar changes height on smaller devices, you only need to update a single property, instead of rewriting the whole set of styles again. Powerful stuff, isn't it?

You can find a [demo of the CSS and variables version here](https://codepen.io/chriskirknielsen/pen/PoPeXev).

## Yes, but what about a simpler method?

Okay, I have one last option to share, that I use with the Stylus browser extension, in order to affect some WordPress sites I might see an admin bar on…

```css
html { margin-top: 0 !important; }

#wpadminbar {
  opacity: .5;
  transform: translateY(-50%);
  transition: 150ms ease-in-out;
}

#wpadminbar:hover,
#wpadminbar:focus-within {
  opacity: 1;
  transform: none;
}
```

You could probably apply this to all URLs, since using `margin-top` on the `html` element is pretty uncommon, and I for one wouldn't recommend doing that, so… use at your own discretion!