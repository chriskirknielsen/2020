---
templateEngineOverride: njk,md
title: Font Directory
subtitle: A collection of typefaces I made in my spare time
summary: You might find a cool, nerdy font by Christopher Kirk-Nielsen here
fonts: {
  'ottselesque': { title: 'Ottselesque', 'summary': 'A Jak and Daxter-inspired font' },
    # 'rg-future': { title: 'RG Future', 'summary': 'A Ratchet & Clank-inspired font' }
}
---

These fonts are nerdy as they are based on existing elements: video game logos! Here's what I got so far…

<section class="postlist u-marginBlockStart">
{% for fontSlug, fontData in fonts %}
  <article class="postlist__post u-posRelative u-displayFlex u-flex--wrap u-paddingBlock">
    <div class="postlist__content u-flex--grow-3">
      <h2 class="h3">
        <a href="{{ '/fonts/' + fontSlug | url }}" class="u-c--primary-min h_u-c--color-accent u-textDecoration--underline">
          {{- fontData.title -}}
        </a>
      </h2>
      <p class="u-marginBlockStart--half">
        {{- fontData.summary -}}
      </p>
    </div>
  </article>
{% endfor %}
</section>