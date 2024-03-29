---
layout: layouts/about.njk
templateEngineOverride: njk,md
title: Hello, I'm Chris
subtitle: I'm a designer turned developer who loves building for the web.
summary: Learn more about Christopher Kirk-Nielsen
permalink: /about/
navtitle: About
---

<div class="about__grid u-flow">
  
  ## Origin Story

  <div class="about__profile u-posRelative u-flex--alignSelfStart u-floatLeft u-marginBlock--double u-marginInlineEnd--double" data-grid-el="trinket-profile">
    {% set ckn_profile -%}
    {%- include "assets/img/ckn-profile.svg" -%}
    {%- endset -%}
    {{ ckn_profile | htmlmin | safe }}
  </div>

Front-end development is my main focus nowadays, but it wasn't always the case. I spent a lot of my free time in middle school playing around with graphic editing software (from MS Paint to Photoshop, which was a totally legit copy…), and trying to skin a MySpace page. After a while, I started making a little website to talk about a video game I liked (Jak & Daxter, if you're curious!).

As that took off, I learned how to make **dynamic websites**, and built a community — back when discussion forums were still a thing. Designing and developing that was a hobby that became a passion project of mine, and grew far bigger than my teenage self could ever have anticipated. I was one of those antiquated "webmasters"…

This led me to study **graphic and motion design** for 4 years, with notable interest in **typography, colour theory, composition, as well as animation**. That said, I kept learning about the web, making blogs and other small projects. I made my way into **freelancing for a few years**, balancing design and development, which was great for me.

I eventually came to realise what I'd rather be doing: **building for the web to benefit everyone** (or at least, do my part), landing a senior front-end developer role at MOJO PSG. At its core, this field is always growing, evolving, which means I can always learn new things. Now, _that_ got me <span data-about-action="hooked-delorean">hooked</span>.

  <div class="about__delorean-wrap u-displayFlex u-flex--center u-floatClear" data-grid-el="trinket-delorean">
    {% set delorean -%}
    {%- include "assets/img/delorean.svg" -%}
    {%- endset -%}
    {{ delorean | htmlmin | safe }}
  </div>

## Projects

### Open Source Things

I've made a few plugins for the tools I use the most. For VS Code, I missed having a CSS easing preview, so I took it upon myself to make a plugin for that. The result is [VisuBezier](https://marketplace.visualstudio.com/items?itemName=chriskirknielsen.visubezier), which will allow you to preview a CSS animation when hovering the timing function/easing keyword.

  <div class="about__plugin-wrap u-floatRight u-marginBlockStart u-marginBlockEnd u-marginInlineStart" data-grid-el="trinket-plugin">
    {% set plugin -%}
    {%- include "assets/img/plugin.svg" -%}
    {%- endset -%}
    {{ plugin | htmlmin | safe }}
  </div>
  
  I've made micro-contributions here and there but nothing worthy of a mention. Feel free to peruse my GitHub account, though. Perhaps there is something of interest to you in there!

{% set vhsImageRoot = '/' + metadata.assetUrl.imagesFolder + '/design-vhs-' %}
<a href="/designs" class="u-posRelative u-displayFlex u-flex--startBlock u-flex--justifyInline u-marginBlockEnd u-c--grey-min about__designs-wrap" data-grid-el="trinket-designs" aria-label="View my designs gallery.">
<span class="u-posRelative u-displayBlock about__vhs about__vhs--back about__vhs--dark u-flex--grow-0 u-flex--shrink-1" data-vhs-spine="Vectors" data-vhs-title="Scalable AF!">
<img src="{{ vhsImageRoot + 'svg.jpg' }}" alt="A VHS tape design inspired by SVG" width="120" height="220" loading="lazy">
</span>
<span class="u-posRelative u-displayBlock u-flex--alignSelfEnd about__vhs about__vhs--front about__vhs--light u-flex--grow-0 u-flex--shrink-1" data-vhs-spine="Web Fundamentals" data-vhs-title="Semantics FTW">
<img src="{{ vhsImageRoot + 'html.jpg' }}" alt="A VHS tape design inspired by HTML" width="120" height="220" loading="lazy">
</span>
{% set shirt -%}
{%- include "assets/img/shirt.svg" -%}
{%- endset -%}
{{ shirt | htmlmin | safe }}
<span class="u-posRelative u-displayBlock u-flex--alignSelfEnd about__vhs about__vhs--front about__vhs--dark u-flex--grow-0 u-flex--shrink-1" data-vhs-spine="Style your pages" data-vhs-title="Embrace the Cascade">
<img src="{{ vhsImageRoot + 'css.jpg' }}" alt="A VHS tape design inspired by CSS" width="120" height="220" loading="lazy">
</span>
<span class="u-posRelative u-displayBlock about__vhs about__vhs--back about__vhs--light u-flex--grow-0 u-flex--shrink-1" data-vhs-spine="Dynamic content" data-vhs-title="Just a pinch">
<img src="{{ vhsImageRoot + 'js.jpg' }}" alt="A VHS tape design inspired by JavaScript" width="120" height="220" loading="lazy">
</span>
</a>

### T-Shirts, Posters & More

I'll occasionally go back to my designer roots and make some little projects. I've made a few dev-inspired designs you can buy on shirts, posters and the like — if you like blank VHS artwork or the '80s aesthetic, you just might enjoy it: I have [a gallery of t-shirts and posters](/designs) on various shops. Your support would mean a lot!

  <p class="about__quotebox" data-grid-el="quote-design">I try to have fun when designing things, since it’s not my job anymore.</p>

### Chronoise

If I'm not doing web-related things, I might be making **electronica music** as [Chronoise](https://chronoise.com), which is a side project I started back in 2010. With no music theory training, it hasn't been easy but it's so fun to experiment with sounds, and there are so many resources available online to learn about music production. In recent years I haven't really had the opportunity to write music, but as much as I suck at guitar, I like having a little session here and there to build up my calluses!

  <div class="u-marginBlockEnd u-marginInline--auto u-displayFlex u-gap u-flex--column u-flex--center" data-grid-el="trinket-keyboard">
    {% set keyboard -%}
    {%- include "components/synth.njk" -%}
    {%- endset -%}
    {{ keyboard | htmlmin | safe }}
    <p class="u-fontItalic u-textSmall" data-about-keyboard-melodies="QWERTY" data-about-melodies-label="Play or Stop melody" hidden>
      A few melodies for you (for QWERTY keyboards):
    </p>
  </div>

### Typefaces

I've always been a bit of a font nerd. And a video game nerd… So when my favourite games have a cool logo: font opportunity! You can check out [my fonts and play with them over here](/fonts).

### Geekometric

Since 2013, I run **a blog where I review** movies, music, shows and video games (in French!): [Geekometric](https://geekometric.com) (which was also a great excuse to migrate my WordPress site to a static site generator: Hugo). Sure, everyone has an opinion, but it's still nice to be able to sit down and process the whole experience, break it down, and write about it.

## Hobbies

Like many other humans, listening to music is a big part of my life, mainly rock, metal, electronica, and everything in between — I'm infatuated with '80s aesthetics. Something about synthesizers really appeals to me — maybe the neon colours just seep straight into my soul.

If you like some fantasy or science-fiction books, let me know because I love that stuff. I'm also very much into movies and TV shows, not too picky on the genre there (though horror is not my cup of tea) as long as it is in the original language.

  <p class="about__quotebox" data-grid-el="quote-accent">My English accent is weird and all over the place, but it isn't French.</p>

**I'm originally from Lyon, France**, with immigrant parents from Denmark, and I spent some time in Australia growing up. As a result, I speak English, French and Danish fluently. I also learned some Italian, can read the Cyrillic alphabet (just read, that is), and am slowly getting back into Japanese. I love languages, if you couldn't tell, and wouldn't mind learning more!

## Sure, I'm a professional

If you want to learn more about my skills, I don't have a formal résumé here, but you can take a peek at [my LinkedIn profile](https://www.linkedin.com/in/chriskirknielsen/) (I am **not** looking for new opportunities). I can program in HTML, CSS, JavaScript, PHP, and MySQL, I love the JAMstack for static sites, like Eleventy or Hugo, but I'm also very comfortable with a WordPress site. The Adobe Creative Suite (my usual suspects are Photoshop, Illustrator, InDesign, After Effects and Premiere Pro) is dear to me, as well as Sketch and Cinema 4D. I'm a French/Danish dual-citizen, and a US "Green Card" holder (what a process that is!), and… that about covers it.

## Find me on the web

-   [Twitter: @ckirknielsen](https://twitter.com/ckirknielsen)
-   [GitHub: chriskirknielsen](https://github.com/chriskirknielsen)
-   [CodePen: chriskirknielsen](https://codepen.io/chriskirknielsen)
-   [Geekometric](https://geekometric.com)
-   [Chronoise](https://chronoise.com)

  <p class="about__quotebox" data-grid-el="quote-phone">Unknown phone numbers are the bane of my existence.</p>

## Fancy a chat?

I prefer written forms of communication, so please send an email at <a href="mailto:{{ metadata.author.email | charToHtml | safe }}">{{ metadata.author.email | charToHtml | safe }}</a>. If you'd like to talk over the phone, please send me an e-mail first and we can schedule a call. Thanks!
