---
templateEngineOverride: njk,md
title: Salut, moi c'est Chris
summary: En apprendre plus sur Christopher Kirk-Nielsen
permalink: /fr/a-propos/
translationKey: "aboutPage"
navtitle: À Propos
ownstyles: about
tags:
  - nav
---

<p class="u-fontBold">Je suis un graphiste devenu développeur qui adore coder pour le web.</p>

<div class="md:u-displayFlex u-flex--startBlock">
  <div class="about__profile u-floatLeft u-posRelative u-flex--shrink-0 u-marginBlock--double u-marginInlineEnd--double">
    {% set ckn_profile -%}
    {%- include "assets/img/ckn-profile.svg" -%}
    {%- endset -%}
    {{ ckn_profile | htmlmin | safe }}
  </div>

  <div class="u-flow">
  {% markdown %}
  ## Débuts

  Le développement front-end est actuellement mon activité principale mais ce n'a pas toujours été le cas. J'avais passé beaucoup de temps au collège à me divertir sur des logiciels graphiques (de MS Paint à Photoshop) et à tenter de personnaliser ma page MySpace. Après un temps, j'avais commencé à faire un petit site Internet sur un jeu vidéo que j'aimais.

  Après un début raisonnable, je m'étais plongé dans la création de **sites dynamiques** et j'avais créé une communauté — à cette époque, les forums de discussion étaient encore populaires. Concevoir l'apparence et développer ce site était un passe-temps qui finirai par être un projet nourri par une vraie passion, qui grandirai bien au-delà de mes espérences d'adolescent. J'étais un de ces fameux "webmasters" à l'époque…

  Ceci m'avait poussé faire des études en **graphisme** pendant 4 ans, avec un intéret particulier pour **la typographie, la théorie des couleurs, la composition, ainsi que l'animation**. J'avais cependant continué d'apprendre des choses sur le domaine du web, créant des blogs et d'autres petits projets. J'avais, par la suite, **travaillé en freelance pendant quelques années**, jonglant entre graphisme et développement — un équilibre enrichissant.

  J'ai fini par réaliser ce que je souhaitais vraiment faire : **travailler sur le web pour bénéficier tout le monde** (ou en tout cas, contribuer ma pierre à l'édifice). Essentiellement, ce domaine est en constante évolution, ce qui signifie que je peux toujours approfondir mes connaissances. Avec ça, je ne peux plus lâcher prise !
  {% endmarkdown %}

  <div class="u-displayFlex u-flex--center">
    {% set delorean -%}
    {%- include "assets/img/delorean.svg" -%}
    {%- endset -%}
    {{ delorean | htmlmin | safe }}
  </div>
  </div>
</div>

## Passions

<div class="u-displayFlex u-flex--center u-floatRight u-marginBlock--double u-marginInlineStart--double">
  {% set keyboard -%}
  {%- include "assets/img/keyboard.svg" -%}
  {%- endset -%}
  {{ keyboard | htmlmin | safe }}
</div>

Quand je ne suis pas occupé à faire des choses sur le web, je suis potentiellement en train de faire de la **musique électronique** sous le nom de [Chronoise](https://chronoise.com) ou d'écouter du rock, du metal ou de la synthwave (je suis obsédé par l'esthétique des années 80). Quelque chose résonne au fond de moi avec ces synthétiseurs. Peut-être que les couleurs néon infusent mon âme, un truc de ce genre.

Comme de nombreux autres êtres humains, j'apprécie les films et séries T.V., ainsi que les jeux vidéo, que je **critique parfois sur mon blog** : [Geekometric](https://geekometric.com) (qui était une excellente excuse pour migrer mon site WordPress à un générateur de site statique dénommé Hugo). Bien entendu que tout le monde a sa propre opinion mais toujours est-il que de se poser, remâcher l'expérience et écrire est fort agréable.

J'aime aussi lire un bon bouquin avec de la musique sur les oreilles pendant mon trajet d'une heure à **New York City** mais je suis **originaire de Lyon, en France**, avec des parents immigrés du Danemark. Par conséquent, je parle français, anglais et danois couramment, je me débrouille en italien et je suis actuellement en train de me remettre au japonais. J'adore les langues étrangères, si ce n'était pas déjà évident, et en apprendre d'autres serait bienvenu !

<hr>

## C.V. bien trop formel

<details class="u-flow">
  <summary class="fluid-type">Voici une auto-représentation sous forme de liste, si ça peut apaiser votre curiosité.</summary>

  <div>
  {% markdown %}
  ### Compétences

  - **Développement :** HTML5, CSS, JavaScript, PHP (OOP, WordPress), MySQL
  - **Outils :** Git, Gulp, JAMstack (sites statiques avec Hugo ou Eleventy, sur Netlify)
  - **Design :** Photoshop, Illustrator, InDesign, Sketch
  - **Motion Design :** After Effects, Premiere Pro, Cinema 4D

  ### Expérience

  - **2020 :** développeur front-end senior chez MOJO PSG
  - **2018–2019 :** développeur front-end chez MOJO PSG
  - **2015–2018 :** activité freelance en marketing numérique

  ### Éducation

  - **2015 :** Certificat Digital Transformation de HEC Paris
  - **2014–2015 :** études en motion design à e-artsup Paris
  - **2011–2014 :** études en design graphique à e-artsup Lyon

  ### Langues

  - **Français :** courant
  - **Anglais :** courant
  - **Danish :** courant
  - **Italian :** moyen
  - *Lit également les caractères cyrilliques, hiragana et katakana*

  ### Intérêts

  - **Dose quotidienne :** thé ou café, musique, livres, jeux vidéos, films et séries T.V.
  - **Geekometric :** blog personnel de critique de films/jeux video (depuis 2013)
  - **Chronoise :** création de musique électronique (depuis 2010)

  ### Documents

  - **Travail :** détenteur de "Green Card" américaine

  ### Sur la toile

  - [Twitter: @ckirknielsen](https://twitter.com/ckirknielsen)
  - [GitHub: chriskirknielsen](https://github.com/chriskirknielsen)
  - [CodePen: chriskirknielsen](https://codepen.io/chriskirknielsen)
  - [Geekometric](https://geekometric.com)
  - [Chronoise](https://chronoise.com)
  {% endmarkdown %}
  </div>
</details>