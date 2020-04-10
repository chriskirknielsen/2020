---
title: Easing Gradients With Sass
summary: Smooth out your gradients with Sass
date: 2020-03-19
language: en
tags:
  - post
  - css
  - sass
  - gradient
  - easing
---

You might have heard about [Andreas Larsen's easing gradients](https://larsenwork.com/easing-gradients/). It's a fantastic idea that [has gained traction](https://github.com/w3c/csswg-drafts/issues/1332), but it's not available in browsers just yet. Andreas has [an editor](https://larsenwork.com/easing-gradients/#editor) to generate the necessary syntax, but I find myself wanting to have it all run automatically in my CSS. It is true that there is [a PostCSS plugin](https://github.com/larsenwork/postcss-easing-gradients), but it has limitations that I ran into when I created the sun and its glow on my homepage, namely: not `0%` nor `100%` stops values. I wanted to fine-tune the number of stops, and their positions.

I took it upon myself to reverse-engineer Andreas's easing, learning a few things along the way. Please note that while this is useful for me, most people will probably be better off using the PostCSS plugin, since the syntax will also be the same (or very close) to the real thing. Not to mention, it'll run in the browser instead of adding to your Sass compilation time!

# How does it work?

The first step was to figure out how it works. It uses the same kind of easing seen on animation: a value from `0` to `1` with some math applied to it. Here is what Andreas's editor provides for a black-to-white gradient with an ease-in-out function:
```css
.forNow {
  linear-gradient(
    to bottom,
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 11.29%) 8.1%,
    hsl(0, 0%, 22.04%) 15.5%,
    hsl(0, 0%, 32.25%) 22.5%,
    hsl(0, 0%, 41.88%) 29%,
    hsl(0, 0%, 50.92%) 35.3%,
    hsl(0, 0%, 59.33%) 41.2%,
    hsl(0, 0%, 67.09%) 47.1%,
    hsl(0, 0%, 74.16%) 52.9%,
    hsl(0, 0%, 80.50%) 58.8%,
    hsl(0, 0%, 86.07%) 64.7%,
    hsl(0, 0%, 90.81%) 71%,
    hsl(0, 0%, 94.66%) 77.5%,
    hsl(0, 0%, 97.54%) 84.5%,
    hsl(0, 0%, 99.36%) 91.9%,
    hsl(0, 0%, 100%) 100%
  );
}
```

At a glance, you can see that the stops are placed at regular interval (about 7 or 8), but the lightness values follow a different pattern. Since we have the function (ease-in-out), we can easily assume the easing affects the colour itself, and not the stops, which remain at their "linear" positions. Some things might be obvious, but we're trying to retrace all the steps to get out stop lists.

# Result

Here is our final set of tools to generate eased gradients stops:

```scss
/**
 * Remaps a number `n` from range `[in_min, in_max]` to range `[out_min, out_max]`
 * @param $n: Number to remap
 * @param $in_min: Minimum input value
 * @param $in_max: Maximum input value
 * @param $out_min: Minimum output value
 * @param $out_max: Maximum output value
 */
@function remap-number($n, $in_min, $in_max, $out_min, $out_max) {
    @return ($n - $in_min) * ($out_max - $out_min) / ($in_max - $in_min) + $out_min;
}

// Clamp a number
@function clamp-num($min, $number, $max) {
    @return min(max($number, $min), $max);
}

// Split a string into a list (from: https://stackoverflow.com/a/42295154/3624336)
@function str-split($string, $separator) {
    // empty array/list
    $split-arr: ();
    // first index of separator in string
    $index : str-index($string, $separator);
    // loop through string
    @while $index != null {
        // get the substring from the first character to the separator
        $item: str-slice($string, 1, $index - 1);
        // push item to array
        $split-arr: append($split-arr, $item);
        // remove item and separator from string
        $string: str-slice($string, $index + 1);
        // find new index of separator
        $index : str-index($string, $separator);
    }
    // add the remaining string to list (the last item)
    $split-arr: append($split-arr, $string);

    @return unquote($split-arr);
}

@function cubic-bezier-point($t, $n1, $n2) {
    // Keep the values within [0,1]
    $t: clamp-num(0, $t, 1);
    $n1: clamp-num(0, $n1, 1);
    $n2: clamp-num(0, $n2, 1);
    
    @return (1 - $t) * (1 - $t) * (1 - $t) * 0 +
            3 * ((1 - $t) * (1 - $t)) * $t * $n1 +
            3 * (1 - $t) * ($t * $t) * $n2 +
            $t * $t * $t * 1;
}

@function cubic-bezier-coordinates($x1, $y1, $x2, $y2, $s) {
    $steps: ();

    // Keep the values within [0,1]
    $x1: clamp-num(0, $x1, 1);
    $y1: clamp-num(0, $y1, 1);
    $x2: clamp-num(0, $x2, 1);
    $y2: clamp-num(0, $y2, 1);

    @for $i from 1 through $s {
        $t: $i / $s;
        $ix: cubic-bezier-point($t, $x1, $x2);
        $iy: cubic-bezier-point($t, $y1, $y2);
        $steps: append($steps, (
            x: $ix,
            y: $iy
        ));
    }
    
    @return $steps;
}

/** 
 * Returns a list of eased color stops
 * @param $sc: Start color: fully opaque value
 * @param $sa: Start alpha: [0,1]
 * @param $ec: End color: fully opaque value
 * @param $ea: End alpha: [0,1]
 * @param $sp: Start point (length value)
 * @param $ep: End point (length value)
 * @param $s: Stops: Number of stops
 * @param $xb: Exclude boundaries: doesn't output the boundary stops
 */
@function eased-gradient-stops($sc: #000, $sa: 1, $ec: #000, $ea: 0, $sp: 0%, $ep: 100%, $s: 8, $xb: false, $ease: 'in-out') {
    $stops : (); // Initialise the stops

    // Define the colour with alpha
    $c1: rgba($sc, $sa);
    $c2: rgba($ec, $ea);

    // Define easings as cubic Bézier coodinates
    @if ($ease == 'ease') { $ease: (0.25, 0.1, 0.25, 1); }
    @else if ($ease == 'in' or $ease == 'ease-in') { $ease: (0.42, 0, 1, 1); }
    @else if ($ease == 'out' or $ease == 'ease-out') { $ease: (0, 0, 0.58, 1); }
    @else if ($ease == 'in-out' or $ease == 'ease-in-out') { $ease: (0.42, 0, 0.58, 1); }
    @else { $ease: str-split($ease, ','); }

    @if (length($ease) != 4) {
        @error "The `gradient-stops` function's `$ease` parameter requires either a valid CSS keyword, or a 4-value list of numbers between 0 and 1 (x1, y1, x2, y2).";
    }

    // Compute the $s stops along the cubic Bézier
    $easing-coordinates: cubic-bezier-coordinates(nth($ease, 1), nth($ease, 2), nth($ease, 3), nth($ease, 4), $s);

    // Add start boundary
    @if ($xb == false) {
        $stops: append($stops, 
            (#{ rgba($sc, $sa) } #{ $sp })
        );
    }

    // Add stops
    @for $stop from 1 to $s {
        $progress: $stop / $s; // Returns a decimal belonging to ]0,1[

        $easing-stop: nth($easing-coordinates, $stop);
        $easing-amount: map-get($easing-stop, x);
        $easing-value: map-get($easing-stop, y);
        $easing-mix: percentage($easing-value); // Compute the percentage

        $position-value: remap-number($easing-amount, 0, 1, $sp, $ep);

        $color-value: mix($c2, $c1, $easing-mix);
        
        $stops: append($stops,
            (#{ $color-value } #{ $position-value })
        );
    }

    // Add end boundary
    @if ($xb == false) {
        $stops: append($stops,
            (#{ rgba($ec, $ea) } #{ $ep })
        );
    }

    // Return comma-separated list of stops
    @return zip($stops);
}
```