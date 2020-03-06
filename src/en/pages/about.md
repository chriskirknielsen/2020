---
templateEngineOverride: njk,md
title: Hello, I'm Chris
summary: Learn more about Christopher Kirk-Nielsen
date: 2017-01-01T00:00:00.000Z
permalink: /about/index.html
translationKey: "aboutPage"
navtitle: About
ownstyles: about
tags:
  - nav
---

{# <div class="u-posRelative u-beforeCover u-afterCover u-floatRight u-displayInlineBlock u-marginBlockEnd--half u-marginInlineStart u-bg--currentColor about__image">
  <img src="/assets/img/profile.jpg" alt="CKN profile" width="512" height="512" class="u-zIndex--1 u-posRelative" onload="this.parentElement.className+=' about__image--loaded'">
</div> #}

<p class="u-textLarger">I'm a designer turned developer who loves working on the web.</p>

<div class="about__profile u-posRelative u-floatRight u-marginBlock--double u-marginInlineStart">
  {% set ckn_profile -%}
  {%- include "assets/img/ckn-profile.svg" -%}
  {%- endset -%}
  {{ ckn_profile | htmlmin | safe }}
</div>


## Origin Story

Front-end development is my main focus nowadays, but it wasn't always the case. I spent a lot of my free time in middle school playing around with graphic editing software (from MS Paint to Photoshop), and trying to skin a MySpace page. After a while, I started making a little website to talk about a video game I liked.

As that took off, I learned how to make **dynamic websites**, and built a community — back when discussion forums were still a thing. Designing and developing that was a hobby that became a passion project of mine, and grew far bigger than my teenage self could ever have anticipated.

This lead me to study for **graphic design** for 4 years, with notable interest in **typography, colour theory, composition, as well as animation**. That said, I kept learning about the web, making blogs and other small projects. I made my way into **freelancing for a few years**, balancing design and development, which was great for me.

I eventually came to realise what I'd rather be doing: **working on the web to benefit everyone** (or at least, do my part). At its core, this field is always growing, evolving, which means I can always learn new things. Now, *that* got me hooked.

<div class="u-floatClear u-displayFlex u-flex--center">
  {% set delorean -%}
  {%- include "assets/img/delorean.svg" -%}
  {%- endset -%}
  {{ delorean | htmlmin | safe }}
</div>

## Hobbies

When I'm not doing web-related things, I might be either making **electronica music** as [Chronoise](https://chronoise.com), or listening to some, mainly rock, metal, and synthwave (I'm infatuated with '80s aesthetics). Something about synthesizers really appeals to me. Maybe the neon colours just seep straight into my soul, or something.

<div class="u-displayFlex u-flex--center">
  {% set keyboard -%}
  {%- include "assets/img/keyboard.svg" -%}
  {%- endset -%}
  {{ keyboard | htmlmin | safe }}
</div>

Like many other humans, I enjoy movies and T.V. shows, as well as video games, which I sometimes **review on my blog** (in French): [Geekometric](https://geekometric.com), which was also a great excuse to migrate my WordPress to a static site generator, Hugo. Sure, everyone has an opinion, but still it's nice to be able to just sit down and process the whole experience, break it down, and write about it.

<div class="u-displayFlex u-flex--center">
  {% set headphones -%}
  {%- include "assets/img/headphones.svg" -%}
  {%- endset -%}
  {{ headphones | htmlmin | safe }}
</div>

I also appreciate reading a nice book & playlist combo during my hour-long commute in **New York City**, but **I'm originally from Lyon, France**, with immigrant parents from Denmark. As a result, I speak English, French and Danish fluently. I also learned some Italian, and am currently getting back into Japanese. I love languages, if you couldn't tell, and wouldn't mind learning more!

<hr>

## Overly-Formal Résumé

<details class="u-flow">
<summary class="fluid-type">Click here to view a bullet-list representation of me, if you're into that sort of thing.</summary>

<div>

### Skills

- **Development:** HTML5, CSS, JavaScript, PHP (OOP, WordPress), MySQL
- **Tools:** Git, Gulp, JAMstack (static sites with Hugo or Eleventy, on Netlify)
- **Design:** Photoshop, Illustrator, InDesign, Sketch
- **Motion Design:** After Effects, Premiere Pro, Cinema 4D

### Experience

- **2020:** senior front-end developer at MOJO PSG
- **2018–2019:** front-end developer at MOJO PSG
- **2015–2018:** freelance activity in digital marketing

### Education

- **2015:** Digital Transformation Certificate from HEC Paris
- **2014–2015:** motion design studies at e-artsup Paris
- **2011–2014:** graphic design studies at e-artsup Lyon

### Languages

- **English:** fluent
- **French:** fluent
- **Danish:** fluent
- **Italian:** intermediate
- *Also reads Cyrillic, Hiragana and Katakana*

### Interests

- **Daily intake:** tea or coffee, music, books, video games, movies, and T.V. shows
- **Geekometric:** personal blog reviewing movies, music, and games (since 2013)
- **Chronoise:** creating electronica music (since 2010)

### Legal Documents

- **Work:** United States "Green Card" holder

### Online

- [Twitter: @ckirknielsen](https://twitter.com/ckirknielsen)
- [GitHub: chriskirknielsen](https://github.com/chriskirknielsen)
- [CodePen: chriskirknielsen](https://codepen.io/chriskirknielsen)
- [Geekometric](https://geekometric.com)
- [Chronoise](https://chronoise.com)

</div>
</details>