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
  <!-- {% set trinkets -%}
  {%- include "assets/img/about-trinkets.svg" -%}
  {%- endset -%}
  {{ trinkets | htmlmin | safe }} -->

  <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="205.4" viewBox="0 0 1000 205.4" style="--w:1000;--h:205.4;" class="about__landscape">
    <g class="about__landscape-fillbg about__landscape-shapes" style="--t:6">
      <path d="M777.8 191.6H573.2L675.5 89.3z" style="--d:6"/>
      <path d="M309.1 191.6H87.5L198.3 80.8z" style="--d:5" />
      <path d="M277 191.6H2.3L139.6 54.3z" style="--d:4"/>
      <path d="M999.3 191.6H686.2L842.8 35z" style="--d:3"/>
      <path d="M463.3 191.6H143.1L303.2 31.5z" style="--d:2"/>
      <path d="M680.2 191.6H337.4L508.8 20.2z" style="--d:1" />
    </g>
    <g class="about__landscape-delorean">
      <g class="about__landscape-fillbg">
        <path d="M325 124.8c0-1.2 2.1-1.1 2.1-2.3.5-7.2 2.4-14.9 3.4-19.3.5-2.2 2.1-4 4.2-4.8l7.5-2.2s21.4-5.7 50.4-11.9c29.3-6.3 50.4-10.1 55.9-10.1 8.8-.5 19.4-.8 31.9-.8H527c5.2 0 10.4 1 15.3 3l62.4 25.8s128.1 14.9 133.7 15.7c.4.1.7.3.8.6.8 2.1 5.3 14.5 5.3 14.5h1.9c.4 0 .8.4.8.8v9.3c0 .4-.3.7-.7.8l-.6.1v1.3c-2.3 2.4-11.3 5.7-13.5 6.5-.3.1-.5.4-.5.7v7c0 .3.1.5.4.7l3.8 2.4c.7.4.4 1.5-.4 1.5H701c-2.3 0-4.3-1.8-4.4-4.1-.8-10.5-5.6-35.6-33.8-35.6-39.3 0-34.9 47.3-34.9 47.3H450s5.8-52.4-39.1-52.4c-37.7 0-37.6 35.3-37.1 44 .1.9-.8 1.6-1.7 1.3-25.3-8.9-40.1-16.8-43.7-18.8-.5-.3-.8-.8-.8-1.4v-1.3l-4.2-1.9c-.5-.2-.8-.7-.8-1.2v-12.7c0-.7.5-1.2 1.2-1.2h1.1v-1.3z"/>
        <circle cx="663" cy="160.9" r="30.5"/>
        <circle cx="411.6" cy="158.1" r="33.3"/>
      </g>
      <g class="about__landscape-stroke">
        <path d="M437 101.3c-.5 2-2.3 3.3-4.3 3.3h-78c-1.4 0-2.5-1.3-2.2-2.7l.7-3.3c.2-1 .9-1.8 1.9-2.1 4.4-1.4 18.2-5.5 45.6-10.8 26.4-5.1 37.5-6.6 41.2-7 .7-.1 1.3.6 1.1 1.3l-6 21.3zM444.8 104.4l7.4.1c.7 0 1.3-.5 1.4-1.2l2.2-23.9c.1-.8-.6-1.5-1.4-1.5h-4.9c-.6 0-1.1.4-1.3 1-.7 2.3-2.5 9-4.8 24-.1.8.5 1.5 1.4 1.5zM342.3 96.1s-4.6 16.2-2.6 51.4M373.8 155.8s-29.1-5.5-46.2-12.7M339.4 143.1s-11.1-1.7-16.8-3.3M462.3 73.6s-2.6 14.5-2.6 30.8c0 12.9 26.9 41 39.1 52.5M449.7 156.9h178.7M584.8 156.9l19.9-54.8"/>
        <circle cx="411.6" cy="158.1" r="21.5"/>
        <circle cx="663" cy="160.9" r="20.6"/>
        <path d="M745.9 145.2l-50.1 9.6M727.4 116.4l-.5 16.2-1.6 16.5M745.9 143.9l-20.3 2.4"/>
        <circle cx="411.6" cy="158.1" r="8"/>
        <path style="--cx:411.6;--cy:158.1;" class="about__landscape-delorean-wheel" d="M411.6 150.1v-13.5M410 150.3l-2.8-13.3M408.4 150.8l-5.5-12.4M407 151.6l-8-10.9M405.7 152.8l-10.1-9.1M404.7 154.1l-11.7-6.8M404.1 155.6l-12.9-4.2M403.7 157.3l-13.5-1.5M403.7 158.9l-13.5 1.4M404.1 160.5l-12.9 4.2M404.7 162.1l-11.7 6.7M405.7 163.4l-10.1 9.1M407 164.5l-8 11M408.4 165.4l-5.5 12.3M410 165.9l-2.8 13.2M411.6 166v13.6M413.3 165.9l2.8 13.2M414.9 165.4l5.5 12.3M416.3 164.5l8 11M417.5 163.4l10.1 9.1M418.5 162.1l11.8 6.7M419.2 160.5l12.9 4.2M419.6 158.9l13.4 1.4M419.6 157.3l13.4-1.5M419.2 155.6l12.9-4.2M418.5 154.1l11.8-6.8M417.5 152.8l10.1-9.1M416.3 151.6l8-10.9M414.9 150.8l5.5-12.4M413.3 150.3l2.8-13.3"/>
        <circle cx="663" cy="160.9" r="8.2"/>
        <path style="--cx:663;--cy:160.9;" class="about__landscape-delorean-wheel" d="M663 152.6v-12.3M661.3 152.8l-2.6-12M659.7 153.3l-5.1-11.2M658.2 154.2l-7.3-10M656.9 155.4l-9.2-8.3M655.9 156.8l-10.7-6.2M655.2 158.3l-11.8-3.8M654.8 160l-12.2-1.3M654.8 161.7l-12.2 1.3M655.2 163.4l-11.8 3.8M655.9 165l-10.7 6.2M656.9 166.4l-9.2 8.2M658.2 167.5l-7.3 10M659.7 168.4l-5.1 11.3M661.3 168.9l-2.6 12.1M663 169.1v12.3M664.7 168.9l2.6 12.1M666.4 168.4l5 11.3M667.8 167.5l7.3 10M669.1 166.4l9.2 8.2M670.1 165l10.7 6.2M670.8 163.4l11.8 3.8M671.2 161.7l12.3 1.3M671.2 160l12.3-1.3M670.8 158.3l11.8-3.8M670.1 156.8l10.7-6.2M669.1 155.4l9.2-8.3M667.8 154.2l7.3-10M666.4 153.3l5-11.2M664.7 152.8l2.6-12"/>
        <path d="M363.7 126.6l22.7.4"/>
        <path d="M325 126l18.1.3M436.3 127.8l205 3.4M722.3 132.5l22.2.4"/>
        <path d="M684.5 131.9l16.3.3"/>
        <path d="M553.6 106.6l-25-12.4c-3-1.5-6.4-2.3-9.8-2.3h-17.3c-2.8 0-5.5 1.4-7.2 3.7l-6.9 9.5"/>
        <path d="M571.3 107.1l-97.9-2.4c-2.6-.1-4.7-2.3-4.6-4.9l.7-18.8c.1-1.7 1.5-3.1 3.2-3.1h51.9c6 0 12 1.4 17.4 4l1.9.9 32.4 15.7M582.1 101.2l6 2.9c.3.1.5.5.5.8v1.7c0 .5-.4.9-.9.9l-5.6-.1"/>
        <path d="M575.1 109.1h7V98.6h-7c-2.2 0-4 1.8-4 4v2.5c-.1 2.2 1.7 4 4 4z"/>
        <path d="M487.5 128.7l13.4.2v3.2c0 .9-.7 1.5-1.6 1.5l-10.3-.2c-.8 0-1.5-.7-1.5-1.5v-3.2z"/>
      </g>
      <g class="about__landscape-fill">
        <path d="M343.8 125.4l19.2.3c.4 0 .7.3.7.7v1.7c0 .4-.3.7-.7.7l-19.2-.3c-.4 0-.7-.3-.7-.7V126c0-.3.3-.6.7-.6z"/>
        <path d="M701.5 131.1l20.1.3c.4 0 .7.3.7.7l-.1 1.3c0 .4-.3.6-.7.6l-20-.3c-.4 0-.7-.3-.7-.7v-1.3c0-.3.3-.6.7-.6z"/>
        <circle cx="663" cy="160.9" r="3"/>
        <circle cx="411.6" cy="158.1" r="3.1"/>
      </g>
    </g>
  </svg>
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