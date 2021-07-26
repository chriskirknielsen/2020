---
templateEngineOverride: njk,md
eleventyExcludeFromCollections: true
title: Font Directory
subtitle: A collection of (nerdy) typefaces I made in my spare time
summary: You might find a cool, nerdy font by Christopher Kirk-Nielsen here
---

{% set fontslist = collections.fonts %}
<section class="postlist u-marginBlockStart">
{% for font in collections.fonts %}
  <!-- {{ font.data | console | safe }} -->
  <article class="postlist__post u-posRelative u-displayFlex u-flex--wrap u-flex--centerBlock u-paddingBlock">
    <div class="u-paddingInlineEnd">
      <img src="{{ font.data.customMetaImage | url }}" alt="Font preview" width="120" height="120" class="u-border u-border-radius--circle">
    </div>
    <div class="postlist__content u-flex--grow-3">
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