---
layout: layouts/about.njk
templateEngineOverride: njk,md
title: Hello, I'm Chris
subtitle: I'm a designer turned developer who loves building for the web.
summary: Learn more about Christopher Kirk-Nielsen
permalink: /about/
navtitle: About
---

<div class="md_u-displayFlex u-flex--startBlock">
  <div class="about__profile u-floatLeft u-posRelative u-flex--shrink-0 u-marginBlock--double u-marginInlineEnd--double">
    {% set ckn_profile -%}
    {%- include "assets/img/ckn-profile.svg" -%}
    {%- endset -%}
    {{ ckn_profile | htmlmin | safe }}
  </div>

  <div class="u-flow">

  ## Origin Story

  Front-end development is my main focus nowadays, but it wasn't always the case. I spent a lot of my free time in middle school playing around with graphic editing software (from MS Paint to Photoshop), and trying to skin a MySpace page. After a while, I started making a little website to talk about a video game I liked (Jak & Daxter, if you're curious!).

  As that took off, I learned how to make **dynamic websites**, and built a community — back when discussion forums were still a thing. Designing and developing that was a hobby that became a passion project of mine, and grew far bigger than my teenage self could ever have anticipated. I was one of those antiquated "webmasters"…

  This led me to study **graphic and motion design** for 4 years, with notable interest in **typography, colour theory, composition, as well as animation**. That said, I kept learning about the web, making blogs and other small projects. I made my way into **freelancing for a few years**, balancing design and development, which was great for me.

  I eventually came to realise what I'd rather be doing: **building for the web to benefit everyone** (or at least, do my part), landing a senior front-end developer role at MOJO PSG. At its core, this field is always growing, evolving, which means I can always learn new things. Now, *that* got me <span data-about-action="hooked-delorean">hooked</span>.

  <div class="u-displayFlex u-flex--center u-floatClear">
    {% set delorean -%}
    {%- include "assets/img/delorean.svg" -%}
    {%- endset -%}
    {{ delorean | htmlmin | safe }}
  </div>
  </div>
</div>

## Projects

### Open Source Things

I've made a few plugins for the tools I use the most. For VS Code, I missed having a CSS easing preview, so I took it upon myself to make a plugin for that. The result is [VisuBezier](https://marketplace.visualstudio.com/items?itemName=chriskirknielsen.visubezier), which will allow you to preview a CSS animation when hovering the timing function/easing keyword. I've also built a plugin for 11ty that allows you to copy assets from a directory to the output folder without messing with the passthrough configuration, which is aptly named [eleventy-plugin-copy-local-assets](https://www.npmjs.com/package/eleventy-plugin-copy-local-assets). That way you keep your images in the same folder as your blog post's Markdown file, for example.

<div class="u-floatRight u-marginBlockEnd u-marginInlineStart--double">
  {% set shirt -%}
  <a href="/designs" class="u-c--grey-min">{%- include "assets/img/shirt.svg" -%}</a>
  {%- endset -%}
  {{ shirt | htmlmin | safe }}
</div>

### T-Shirts, Posters & More

I'll occasionally go back to my designer roots and make some little projects. I've made a few dev-inspired designs you can buy on shirts, posters and the like — if you like blank VHS artwork or the '80s aesthetic, you just might enjoy it: I have [a gallery of t-shirts and posters](/designs) on various shops. Your support would mean a lot!

### Chronoise

If I'm not doing web-related things, I might be making **electronica music** as [Chronoise](https://chronoise.com), which is a side project I started back in 2010. With no music theory training, it hasn't been easy but it's so fun to experiment with sounds, and there are so many resources available online to learn about music production.

<div class="u-marginBlockEnd u-marginInline--auto u-displayFlex u-flex--center">
  {% set keyboard -%}
  {%- include "assets/img/keyboard.svg" -%}
  {%- endset -%}
  {{ keyboard | htmlmin | safe }}
</div>

### Geekometric

Since 2013, I run **a blog where I review** movies, music, shows and video games (in French!): [Geekometric](https://geekometric.com) (which was also a great excuse to migrate my WordPress site to a static site generator: Hugo). Sure, everyone has an opinion, but it's still nice to be able to sit down and process the whole experience, break it down, and write about it.

### Typefaces

I've always been a bit of a nerd for fonts. And a video game nerd… So when my favourite games have a cool logo, it's time to make a font! You can check out [my fonts and play with them over here](/fonts).

## Hobbies

Like many other humans, listening to music is a big part of my life, mainly rock, metal, electronica, and everything in between — I'm infatuated with '80s aesthetics. Something about synthesizers really appeals to me — maybe the neon colours just seep straight into my soul.

If you like some fantasy or science-fiction books, let me know because I love that stuff. I'm also very much into movies and TV shows, not too picky on the type there but horror is not my cup of tea — as long as it is in the original language.

**I'm originally from Lyon, France**, with immigrant parents from Denmark, and I spent some time in Australia growing up. As a result, I speak English, French and Danish fluently. I also learned some Italian, can read the Cyrillic alphabet, and would like to get back into Japanese. I love languages, if you couldn't tell, and wouldn't mind learning more!

## Sure, I'm a professional

If you want to learn more about my skills, I don't have a formal résumé here, but you can take a peek at [my LinkedIn profile](https://www.linkedin.com/in/chriskirknielsen/) (I am **not** looking for new opportunities). I can program in HTML, CSS, JavaScript, PHP, and MySQL, I love the JAMstack for static sites, like Eleventy or Hugo, but I'm also very comfortable with a WordPress site. The Adobe Creative Suite (my usual suspects are Photoshop, Illustrator, InDesign, After Effects and Premiere Pro) is dear to me, as well as Sketch and Cinema 4D. I'm a French/Danish dual-citizen, and a US "Green Card" holder (what a process that is!), and… that about covers it.

## Find me on the web

- [Twitter: @ckirknielsen](https://twitter.com/ckirknielsen)
- [GitHub: chriskirknielsen](https://github.com/chriskirknielsen)
- [CodePen: chriskirknielsen](https://codepen.io/chriskirknielsen)
- [Geekometric](https://geekometric.com)
- [Chronoise](https://chronoise.com)

## Fancy a chat?

I prefer written forms of communication, so please send an email at <a href="mailto:{{ metadata.author.email | charToHtml | safe }}">{{ metadata.author.email | charToHtml | safe }}</a>. If you'd like to talk over the phone, please send me an e-mail first and we can schedule a call. Thanks!