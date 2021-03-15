---
templateEngineOverride: njk,md
title: Hello, I'm Chris
subtitle: I'm a designer turned developer who loves working on the web.
summary: Learn more about Christopher Kirk-Nielsen
permalink: /about/
navtitle: About
ownstyles: about
ownscripts: about
tags:
  - nav
---

<div class="md:u-displayFlex u-flex--startBlock">
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

  I eventually came to realise what I'd rather be doing: **working on the web to benefit everyone** (or at least, do my part), landing a senior front-end developer role at MOJO PSG. At its core, this field is always growing, evolving, which means I can always learn new things. Now, *that* got me <span data-about-action="hooked-delorean">hooked</span>.

  <div class="u-displayFlex u-flex--center u-floatClear">
    {% set delorean -%}
    {%- include "assets/img/delorean.svg" -%}
    {%- endset -%}
    {{ delorean | htmlmin | safe }}
  </div>
  </div>
</div>

## Projects

### VisuBezier

When I write code, I use VS Code, but I sometimes miss features from other editors, like a CSS easing preview, so I took it upon myself to make a plugin for that. The result is [VisuBezier](https://marketplace.visualstudio.com/items?itemName=chriskirknielsen.visubezier), which will allow you to preview a CSS animation when hovering the timing function/easing keyword. I am not really into TypeScript (though I understand how it can be useful), and being my first venture into making an extension for VS Code, it was quite a challenge, but it certainly is satisfying to see it in action!

<div class="u-floatRight u-marginBlockEnd u-marginInlineStart--double">
  {% set shirt -%}
  <a href="{{ metadata.merch.TeePublic }}" class="u-c--grey-min">{%- include "assets/img/shirt.svg" -%}</a>
  {%- endset -%}
  {{ shirt | htmlmin | safe }}
</div>

### T-Shirts, Posters & More

I'll occasionally go back to my designer roots and make some little projects. I've made a few designs you can buy on shirts, posters and the like — if you like CSS and '80s style, you just might enjoy it: check them out on {% for store, link in metadata.merch -%}
  {{- ", " if not loop.first -}}
  {{- andWord + " " if loop.last -}}
  <a href="{{ link }}">{{ store }}</a>
{%- endfor %}. Your support would mean a lot!

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

## Hobbies

Like many other humans, listening to music is a big part of my life, mainly rock, metal, and synthwave — I'm infatuated with '80s aesthetics. Something about synthesizers really appeals to me — maybe the neon colours just seep straight into my soul.

I also <del>appreciate</del> <ins>used to appreciate</ins> a nice book & playlist combo during my hour-long commute in **New York City**, but **I'm originally from Lyon, France**, with immigrant parents from Denmark. I moved to the Big Apple to be with my wonderful wife Ilona — a nice reason to change continents! As a result, I speak English, French and Danish fluently. I also learned some Italian, can read the Cyrillic alphabet, and would like to get back into Japanese. I love languages, if you couldn't tell, and wouldn't mind learning more!

## Sure, I'm a professional

If you want to learn more about my skills, I don't have a formal résumé here, but you can take a peek at [my LinkedIn profile](https://www.linkedin.com/in/chriskirknielsen/) (I'm not looking for new opportunities). I can program in HTML, CSS, JavaScript, PHP, and MySQL, I love the JAMstack for static sites, like Eleventy or Hugo, but I'm also very comfortable with WordPress. The Adobe Creative Suite (<abbr title="Photoshop">Ps</abbr>, <abbr title="Illustrator">Ai</abbr>, <abbr title="InDesign">Id</abbr>, <abbr title="After Effects">Ae</abbr>, <abbr title="Premiere Pro">Pr</abbr>) is dear to me, as well as Sketch and Cinema 4D. I'm a French/Danish dual-citizen, and US "Green Card" holder — what a process that is!

## Find me on the web

- [Twitter: @ckirknielsen](https://twitter.com/ckirknielsen)
- [GitHub: chriskirknielsen](https://github.com/chriskirknielsen)
- [CodePen: chriskirknielsen](https://codepen.io/chriskirknielsen)
- [Geekometric](https://geekometric.com)
- [Chronoise](https://chronoise.com)

## Fancy a chat?

I prefer written forms of communication, so please send an email at <a href="mailto:{{ metadata.author.email | charToHtml | safe }}">{{ metadata.author.email | charToHtml | safe }}</a>. If you'd like to talk over the phone, please send me an e-mail first and we can schedule a call. Thanks!