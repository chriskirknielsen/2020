---
templateEngineOverride: njk,md
eleventyExcludeFromCollections: true
title: Font Directory
subtitle: A collection of (nerdy) typefaces I made in my spare time
summary: You might find a cool, nerdy font by Christopher Kirk-Nielsen here
---

{% set fontslist = collections.fonts %}
<section class="cards u-displayFlex u-flex--wrap u-marginBlockStart">
{% for font in fontslist %}
  <article class="card u-posRelative u-displayFlex u-flex--column u-border u-border u-border--grey-med {{ utilities.cardBoxLink }}">
    <a class="card__image u-flex--shrink-0" href="{{ font.url | url }}">
      <img src="{{ font.data.customMetaImage + '?nf_resize=fit&w=400' | url }}" alt="" width="1200" height="1200">
    </a>
    <div class="card__content u-padding u-flex--grow-1 u-textCenter u-bg--grey-max">
      <h2 class="h3">
        <a href="{{ font.url | url }}" class="u-c--primary-min h_u-c--color-accent u-textDecoration--underline">
          {{- font.data.title -}}
        </a>
      </h2>
      <p class="u-marginBlockStart--half">
        {{- font.data.summary -}}
      </p>
    </div>
  </article>
{% endfor %}
</section>