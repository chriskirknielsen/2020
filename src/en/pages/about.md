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
<div class="about__profile u-posRelative u-floatLeft u-marginBlock--double u-marginInlineEnd--double">
  {% set ckn_profile -%}
  {%- include "assets/img/ckn-profile.svg" -%}
  {%- endset -%}
  {{ ckn_profile | htmlmin | safe }}
</div>

**I'm a designer turned developer who loves working on the web.**

Front-end development is my main focus nowadays, but it wasn't always the case. I spent a lot of my free time in middle school playing around with graphic software (from MS Paint to Photoshop) and making a little website to talk about a video game I liked (and trying to style my MySpace page). As that took off, I learned how to make dynamic websites, and built a community. Designing and developing that was a hobby that became a passion project of mine, and grew far bigger than my teenage self could ever have anticipated.

This lead me to study for graphic design for 4 years, with notable interest in typography, colour theory, composition, as well as animation. That said, I still kept learning about the web, making blogs and such. I made my way into freelancing for a few years, balancing design and development, which was great for me.

I eventually came to realise that making websites was what I'd rather be doing. At its core, this field is always growing, evolving, which means I can always learn new things. And that got me hooked.

<div aria-hidden="true" class="u-floatClear"></div>

{# <div class="about__lady-liberty u-posRelative u-floatRight u-marginBlockEnd--double u-marginInlineStart--double">
  {% set lady_liberty -%}
  {%- include "assets/img/lady-liberty.svg" -%}
  {%- endset -%}
  {{ lady_liberty | htmlmin | safe }}
</div> #}

When I'm not doing web-related things, I might be either making **electronica music** as [Chronoise](https://chronoise.com), or listening to some, mainly rock, metal, and synthwave (I'm infatuated with '80s aesthetics). I enjoy movies and T.V. shows, as well as video games, which I sometimes review on my blog (in French): [Geekometric](https://geekometric.com). I also appreciate reading a nice book during my commute in New York City, but I'm originally from Lyon, in France. I speak English, French, Danish and some Italian — I love languages and wouldn't mind learning more!

<div class="u-floatClear u-displayFlex u-flex--center">
  <svg xmlns="http://www.w3.org/2000/svg" width="425" height="120" viewBox="0 0 425 120">
    <g fill="none" stroke="#fff" stroke-width=".5">
      <path d="M2.6 51.7c0-1.2 2.1-1.1 2.1-2.3.5-7.2 2.4-14.9 3.4-19.3.5-2.2 2.1-4 4.2-4.8l7.5-2.2s21.4-5.7 50.4-11.9c29.3-6.3 50.4-10.1 55.9-10.1 8.8-.5 19.4-.8 31.9-.8h46.5c5.2 0 10.4 1 15.3 3l62.4 25.8S410.3 44 415.9 44.8c.4.1.7.3.8.6.8 2.1 5.3 14.5 5.3 14.5h1.9c.4 0 .8.4.8.8V70c0 .4-.3.7-.7.8l-.6.1v1.3c-2.3 2.4-11.3 5.7-13.5 6.5-.3.1-.5.4-.5.7v7c0 .3.1.5.4.7l3.8 2.4c.7.4.4 1.5-.4 1.5h-34.7c-2.3 0-4.3-1.8-4.4-4.1-.8-10.5-5.6-35.6-33.8-35.6-39.3 0-34.9 47.3-34.9 47.3H127.6s5.8-52.4-39.1-52.4c-37.7 0-37.6 35.3-37.1 44 .1.9-.8 1.6-1.7 1.3C24.5 82.6 9.6 74.8 6.1 72.8c-.5-.3-.8-.8-.8-1.4v-1.3L1 68.2C.5 68 .2 67.5.2 67V54.2c0-.7.5-1.2 1.2-1.2h1.1v-1.3z"/>
      <path d="M114.6 28.3c-.5 2-2.3 3.3-4.3 3.3h-78c-1.4 0-2.5-1.3-2.2-2.7l.7-3.3c.2-1 .9-1.8 1.9-2.1 4.4-1.4 18.2-5.5 45.6-10.8 26.4-5.1 37.5-6.6 41.2-7 .7-.1 1.3.6 1.1 1.3l-6 21.3zM122.3 31.4l7.4.1c.7 0 1.3-.5 1.4-1.2l2.2-23.9c.1-.8-.6-1.5-1.4-1.5H127c-.6 0-1.1.4-1.3 1-.7 2.3-2.5 9-4.8 24 0 .7.6 1.5 1.4 1.5zM19.8 23.1s-4.6 16.2-2.6 51.4M51.4 82.7S22.3 77.2 5.2 70M17 70.1S5.9 68.4.2 66.8M139.8.5s-2.6 14.5-2.6 30.8c0 12.9 26.9 41 39.1 52.5M127.3 83.8H306M262.4 83.8l19.8-54.7"/>
      <circle cx="340.6" cy="87.9" r="30.5"/>
      <circle cx="89.2" cy="85.1" r="33.3"/>
      <circle cx="89.2" cy="85.1" r="21.5"/>
      <circle cx="340.6" cy="87.9" r="20.6"/>
      <path d="M423.5 72.2l-50.1 9.6M405 43.4l-.6 16.2-1.5 16.5M423.5 70.8l-20.3 2.4"/>
      <circle cx="89.2" cy="85.1" r="8"/>
      <circle cx="340.6" cy="87.9" r="8.2"/>
      <path d="M340.6 79.6V67.3M338.9 79.8l-2.6-12.1M337.2 80.3l-5-11.2M335.7 81.2l-7.2-10M334.5 82.3l-9.2-8.2M333.5 83.7l-10.7-6.1M332.8 85.3L321 81.5M332.4 87l-12.3-1.3M332.4 88.7L320.1 90M332.8 90.4L321 94.2M333.5 92l-10.7 6.1M334.5 93.4l-9.2 8.2M335.7 94.5l-7.2 10M337.2 95.4l-5 11.2M338.9 95.9l-2.6 12.1M340.6 96.1v12.3M342.3 95.9l2.6 12.1M343.9 95.4l5.1 11.2M345.4 94.5l7.3 10M346.7 93.4l9.2 8.2M347.7 92l10.7 6.1M348.4 90.4l11.7 3.8M348.8 88.7L361 90M348.8 87l12.2-1.3M348.4 85.3l11.7-3.8M347.7 83.7l10.7-6.1M346.7 82.3l9.2-8.2M345.4 81.2l7.3-10M343.9 80.3l5.1-11.2M342.3 79.8l2.6-12.1M89.2 77.1V63.6M87.6 77.3L84.7 64M86 77.8l-5.5-12.4M84.5 78.6l-7.9-10.9M83.3 79.7l-10.1-9M82.3 81.1l-11.7-6.8M81.6 82.6l-12.8-4.2M81.3 84.2l-13.5-1.4M81.3 85.9l-13.5 1.4M81.6 87.5l-12.8 4.2M82.3 89l-11.7 6.8M83.3 90.4l-10.1 9.1M84.5 91.5l-7.9 11M86 92.3l-5.5 12.4M87.6 92.9l-2.9 13.2M89.2 93v13.6M90.9 92.9l2.8 13.2M92.5 92.3l5.5 12.4M93.9 91.5l8 11M95.1 90.4l10.1 9.1M96.1 89l11.7 6.8M96.8 87.5l12.9 4.2M97.1 85.9l13.5 1.4M97.1 84.2l13.5-1.4M96.8 82.6l12.9-4.2M96.1 81.1l11.7-6.8M95.1 79.7l10.1-9M93.9 78.6l8-10.9M92.5 77.8L98 65.4M90.9 77.3L93.7 64M41.3 53.6L64 54"/>
      <path d="M2.6 53l18.1.3M113.9 54.8l205 3.4M399.9 59.5l22.1.4"/>
      <path d="M362.1 58.9l16.3.3M231.2 33.6l-25-12.4c-3-1.5-6.4-2.3-9.8-2.3h-17.3c-2.8 0-5.5 1.4-7.2 3.7l-6.9 9.5"/>
      <path d="M248.9 34.1L151 31.7c-2.6-.1-4.7-2.3-4.6-4.9l.8-18.8c.1-1.7 1.5-3.1 3.2-3.1h51.9c6 0 12 1.4 17.4 4l1.9.9L254 25.5M259.7 28.2l6 2.9c.3.1.5.5.5.8v1.7c0 .5-.4.9-.9.9l-5.6-.1"/>
      <path d="M252.7 36.1h7V25.5h-7c-2.2 0-4 1.8-4 4V32c-.1 2.3 1.7 4.1 4 4.1zM165.1 55.6l13.4.2V59c0 .9-.7 1.5-1.6 1.5l-10.3-.2c-.8 0-1.5-.7-1.5-1.5v-3.2z"/>
    </g>
    <g fill="#fff">
      <path d="M21.4 52.3l19.2.3c.4 0 .7.3.7.7V55c0 .4-.3.7-.7.7l-19.2-.3c-.4 0-.7-.3-.7-.7V53c0-.4.3-.7.7-.7z"/>
      <path d="M379.1 58.1l20.1.3c.4 0 .7.3.7.7l-.1 1.3c0 .4-.3.6-.7.6l-20-.3c-.4 0-.7-.3-.7-.7v-1.3c0-.3.3-.6.7-.6z"/>
      <circle cx="340.6" cy="87.9" r="3"/>
      <circle cx="89.2" cy="85.1" r="3.1"/>
    </g>
  </svg>
</div>

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