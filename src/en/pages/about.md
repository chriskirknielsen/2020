---
templateEngineOverride: njk,md
title: Hello, I'm Chris
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
<div class="u-posRelative u-floatRight about__profile">
  {% set ckn_profile -%}
  {%- include "assets/img/ckn-profile.svg" -%}
  {%- endset -%}
  {{ ckn_profile | htmlmin | safe }}
</div>

I'm a designer-turned-developer who loves working on websites. What started as a little side project in middle school became an eye-opening experience, a hobby that has stuck with me for over a decade. I've already learned a lot about front-end development, but there's always more to learn (and share!), which is why I cherish this field. Plus, I still get to flex my designer muscles here and there!

When I'm not doing web-related things, I might be making electronica music as [Chronoise](https://chronoise.com), or listening to some, mainly rock and synthwave (I'm infatuated with '80s aesthetics). I enjoy movies and T.V. shows, as well as video games, which I sometimes review on my blog, [Geekometric](https://geekometric.com). I also appreciate reading a nice book during my commute in New York City, but I'm originally from Lyon, in France. I speak English, French, Danish and some Italian — I love languages and wouldn't mind learning more!

<hr class="u-floatClear">

## Overly-Formal Résumé

Here is a bullet-list representation of me, if you're into that sort of thing:

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

<p class="u-marginBlockStart--double">
  <a href="/assets/pdf/resume.pdf" download="chriskirknielsen.pdf" class="u-displayInlineFlex u-flex--centreBlock u-paddingBlock--half u-paddingInline u-textDecoration--none u-c--grey-max u-bg--grey-min u-border u-border--grey-min h:u-c--grey-min h:u-bg--grey-max u-lineHeight--1">
    <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="u-displayBlock u-marginInlineEnd--half about__download">
      <path d="M3 0v5c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V0h1l2 2v13c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V1c0-.6.4-1 1-1h2zm10 15c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H3a1 1 0 0 0-1 1v6c0 .6.4 1 1 1h10zM10 5V1h2v4h-2z" fill="currentColor" fill-rule="evenodd"/>
    </svg>
    <span class="u-flex--alignSelfEnd u-fontBold">Download PDF</span>
  </a>
</p>