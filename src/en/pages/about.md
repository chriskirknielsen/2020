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

<p class="u-textLarger u-fontBold">I'm a designer turned developer who loves working on the web.</p>

<div class="about__profile u-posRelative u-floatRight u-marginBlock--double u-marginInlineStart">
  {% set ckn_profile -%}
  {%- include "assets/img/ckn-profile.svg" -%}
  {%- endset -%}
  {{ ckn_profile | htmlmin | safe }}
</div>

Front-end development is my main focus nowadays, but it wasn't always the case. I spent a lot of my free time in middle school playing around with graphic software (from MS Paint to Photoshop) and making a little website to talk about a video game I liked (and trying to style my MySpace page). As that took off, I learned how to make dynamic websites, and built a community. Designing and developing that was a hobby that became a passion project of mine, and grew far bigger than my teenage self could ever have anticipated.

This lead me to study for graphic design for 4 years, with notable interest in typography, colour theory, composition, as well as animation. That said, I still kept learning about the web, making blogs and other small projects. I made my way into freelancing for a few years, balancing design and development, which was great for me.

I eventually came to realise that making websites was what I'd rather be doing. At its core, this field is always growing, evolving, which means I can always learn new things. And that got me hooked.

<div class="u-floatClear u-displayFlex u-flex--center">
  {% set trinkets -%}
  {%- include "assets/img/about-trinkets.svg" -%}
  {%- endset -%}
  {{ trinkets | htmlmin | safe }}
</div>

When I'm not doing web-related things, I might be either making **electronica music** as [Chronoise](https://chronoise.com), or listening to some, mainly rock, metal, and synthwave (I'm infatuated with '80s aesthetics). I enjoy movies and T.V. shows, as well as video games, which I sometimes review on my blog (in French): [Geekometric](https://geekometric.com). I also appreciate reading a nice book during my commute in New York City, but I'm originally from Lyon, in France. I speak English, French, Danish and some Italian — I love languages and wouldn't mind learning more!

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
- [Geekometric](https://geekometric.com) (static site built with Hugo, running on Netlify)
- [Chronoise](https://chronoise.com)

</div>
</details>