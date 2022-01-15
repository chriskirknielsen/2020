---
layout: layouts/about.njk
templateEngineOverride: njk,md
title: Salut, moi c'est Chris
subtitle: Je suis un graphiste devenu développeur qui adore construire pour le web.
summary: En apprendre plus sur Christopher Kirk-Nielsen
permalink: /fr/a-propos/
navtitle: À Propos
---

<div class="about__grid u-flow">

  ## Débuts

  <div class="about__profile u-posRelative u-flex--alignSelfStart u-floatLeft u-marginBlock--double u-marginInlineEnd--double" data-grid-el="trinket-profile">
    {% set ckn_profile -%}
    {%- include "assets/img/ckn-profile.svg" -%}
    {%- endset -%}
    {{ ckn_profile | htmlmin | safe }}
  </div>

  Le développement front-end est actuellement mon activité principale mais ce n'a pas toujours été le cas. J'avais passé beaucoup de temps au collège à me divertir sur des logiciels graphiques (de MS Paint à Photoshop) et à tenter de personnaliser ma page MySpace. Après un temps, j'avais commencé à faire un petit site Internet sur un jeu vidéo que j'aimais (Jak & Daxter, si vous connaissez).

  Après un début raisonnable, je m'étais plongé dans la création de **sites dynamiques** et j'avais créé une communauté — à cette époque, les forums de discussion étaient encore populaires. Concevoir l'apparence et développer ce site était un passe-temps qui finirai par être un projet nourri par une vraie passion, qui grandirait bien au-delà de mes espérances d'adolescent. J'étais un de ces fameux "webmasters" à l'époque…

  Ceci m'avait poussé faire des études en **graphisme et motion design** pendant 4 ans, avec un intérêt particulier pour **la typographie, la théorie des couleurs, la composition, ainsi que l'animation**. J'avais cependant continué d'apprendre des choses sur le domaine du web, créant des blogs et d'autres petits projets. J'avais, par la suite, **travaillé en freelance pendant quelques années**, jonglant entre graphisme et développement — un équilibre enrichissant.

  J'ai fini par réaliser ce que je souhaitais vraiment faire : **travailler sur le web pour bénéficier tout le monde** (ou en tout cas, contribuer ma pierre à l'édifice), désormais au poste de développeur front-end senior chez MOJO PSG. Essentiellement, ce domaine est en constante évolution, ce qui signifie que je peux toujours approfondir mes connaissances. Avec ça, je suis totalement <span data-about-action="hooked-delorean">accro</span> !

  <div class="about__delorean-wrap u-displayFlex u-flex--center u-floatClear" data-grid-el="trinket-delorean">
    {% set delorean -%}
    {%- include "assets/img/delorean.svg" -%}
    {%- endset -%}
    {{ delorean | htmlmin | safe }}
  </div>

  ## Projets

  ### Open Source

  J'ai créé quelques extensions pour les outils que j'utilise souvent. Pour VS Code, je voulais retrouver la possibilité de prévisualiser mes courbes de lissage, j'ai donc créé une extension ! Le résultat est [VisuBezier](https://marketplace.visualstudio.com/items?itemName=chriskirknielsen.visubezier), qui permet d'avoir un aperçu d'une animation CSS lorsque l'on survole une fonction ou  un mot-clé de lissage.
  
  <div class="about__plugin-wrap u-floatRight u-marginBlockStart u-marginBlockEnd u-marginInlineStart" data-grid-el="trinket-plugin">
    {% set plugin -%}
    {%- include "assets/img/plugin.svg" -%}
    {%- endset -%}
    {{ plugin | htmlmin | safe }}
  </div>

  Je n'ai que fait des micro-contributions par-ci par-là mais rien de majeur qui vaille la peine de mentionner. Libre à vous de fouiller mon compte GitHub, peut-être que vous trouverez quelque chose d'intéressant !

  {% set vhsImageRoot = '/' + metadata.assetUrl.imagesFolder + '/design-vhs-' %}
  <a href="/designs" class="u-posRelative u-displayFlex u-flex--startBlock u-flex--justifyInline u-marginBlockEnd u-c--grey-min about__designs-wrap" data-grid-el="trinket-designs" aria-label="Voir ma galerie d'illustrations.">
    <span class="u-posRelative u-displayBlock about__vhs about__vhs--back about__vhs--dark u-flex--grow-0 u-flex--shrink-1" data-vhs-spine="Bosser en Vecto" data-vhs-title="Étirable à volonté">
      <img src="{{ vhsImageRoot + 'svg.jpg' }}" alt="Une face avant de boîte VHS inspiré par le SVG" width="120" height="220" loading="lazy">
    </span>
    <span class="u-posRelative u-displayBlock u-flex--alignSelfEnd about__vhs about__vhs--front about__vhs--light u-flex--grow-0 u-flex--shrink-1" data-vhs-spine="Fondation du Web" data-vhs-title="Sémantique à fond">
      <img src="{{ vhsImageRoot + 'html.jpg' }}" alt="Une face avant de boîte VHS inspiré par le HTML" width="120" height="220" loading="lazy">
    </span>
    {% set shirt -%}
    {%- include "assets/img/shirt.svg" -%}
    {%- endset -%}
    {{ shirt | htmlmin | safe }}
    <span class="u-posRelative u-displayBlock u-flex--alignSelfEnd about__vhs about__vhs--front about__vhs--dark u-flex--grow-0 u-flex--shrink-1" data-vhs-spine="Styler ses pages" data-vhs-title="Vive la Cascade">
      <img src="{{ vhsImageRoot + 'css.jpg' }}" alt="Une face avant de boîte VHS inspiré par le CSS" width="120" height="220" loading="lazy">
    </span>
    <span class="u-posRelative u-displayBlock about__vhs about__vhs--back about__vhs--light u-flex--grow-0 u-flex--shrink-1" data-vhs-spine="Contenu dynamique" data-vhs-title="Juste une pincée">
      <img src="{{ vhsImageRoot + 'js.jpg' }}" alt="Une face avant de boîte VHS inspiré par le JavaScript" width="120" height="220" loading="lazy">
    </span>
  </a>

  ### T-Shirts, Affiches, etc.

  Parfois, je retourne à mes origines de graphiste et crée de petits projets. Vous pouvez trouver quelques illustrations inspirées du monde du développement web que j'ai réalisées que vous pouvez acheter sur des t-shirts et divers autres formats — si vous aimez les boîtiers VHS ou le style rétro des années 80, ça pourrait bien vous plaire : j'ai une [galerie de t-shirts et posters](/designs) sur plusieurs sites. Votre soutien signifierait beaucoup à mes yeux !

  <p class="about__quotebox" data-grid-el="quote-design">J'essaie de m'amuser quand je fais mes travaux, car ce n'est plus ma profession.</p>

  ### Chronoise

  Quand je ne suis pas occupé à faire des choses sur le web, je suis potentiellement en train de faire de la **musique électronique** sous le nom de [Chronoise](https://chronoise.com), qui est un petit projet débuté en 2010. Sans aucune éducation musicale, ce n'a pas été facile mais c'est très amusant d'expérimenter avec divers sons et il y a tellement de ressources disponible en ligne pour apprendre à créer de la musique.

  <div class="u-marginBlockEnd u-marginInline--auto u-displayFlex u-gap u-flex--column u-flex--center" data-grid-el="trinket-keyboard">
    {% set keyboard -%}
    {%- include "components/synth.njk" -%}
    {%- endset -%}
    {{ keyboard | htmlmin | safe }}
    <p class="u-fontItalic u-textSmall" data-about-keyboard-melodies="AZERTY" hidden>
      Quelques mélodies (pour clavier AZERTY) :
    </p>
  </div>

  ### Polices d'Écriture

  J'ai toujours eu un penchant pour les polices d'écritures. Et un penchant pour les jeux vidéo… Alors quand mes jeux vidéo préférés ont un logo sympa, c'est l'heure d'en faire une typo ! Vous pouvez voir [mes polices d'écriture et les tester par ici](/fonts).

  ### Geekometric

  Depuis 2013, je maintiens **un blog où je critique des films, de la musique ou des jeux vidéo** : [Geekometric](https://geekometric.com) (qui était une excellente excuse pour migrer mon site WordPress à un générateur de site statique dénommé Hugo). Bien entendu, tout le monde a sa propre opinion mais toujours est-il que de se poser, remâcher l'expérience et écrire est très agréable.

  ## Hobbies

  Comme de nombreux humains, écouter de la musique fait partie de mon quotidien, surtout de la musique rock, metal, électronique et tout ce qu'il y a entre ça — je suis obsédé par l'esthétique des années 80. Quelque chose avec les synthés m'attire beaucoup — peut-être que les couleurs néon baignent en harmonie au plus profond de moi !

  Si vous avez des recommandations de livres de fantaisie ou de science-fiction, je suis à votre écoute car c'est quelque chose que j'adore ! Je suis aussi très intéressé par le cinéma et les séries, tant que ce n'est pas de l'horreur (très peu pour moi) et en version originale s'il-vous-plaît !

  <p class="about__quotebox" data-grid-el="quote-accent">Mon accent anglais est un mélange de tout, c'est un peu bizarre.</p>

  Je suis **originaire de Lyon, en France**, avec des parents immigrés du Danemark et j'ai passé quelques temps en Australie durant mon enfance. Par conséquent, je parle français, anglais et danois couramment, je me débrouille en italien et j'aimerais reprendre le japonais. J'adore les langues étrangères, si ce n'était pas déjà évident, et en apprendre d'autres serait bienvenu !

  ## Oui oui, je suis un pro

  Si vous voulez en apprendre plus sur mes compétences, je n'ai pas de C.V. formel ici, mais vous pouvez consulter [mon profil LinkedIn](https://www.linkedin.com/in/chriskirknielsen/?locale=fr_FR) (je ne suis pas à la recherche de nouvelles opportunités). Je sais programmer en HTML, CSS, JavaScript, PHP et MySQL, j'aime la JAMstack pour les sites statiques, comme Eleventy ou Hugo, mais je suis aussi très à l'aise avec un site WordPress. La suite Adobe (typiquement Photoshop, Illustrator, InDesign, After Effects et Premiere Pro) me tient à cœur, ainsi que Sketch et Cinema 4D. Je détiens la double-nationalité franco-danoise et une "Green Card" américaine (quel processus ce fut !) et c'est tout, pour le moment !

  ## Sur la toile

  - [Twitter: @ckirknielsen](https://twitter.com/ckirknielsen)
  - [GitHub: chriskirknielsen](https://github.com/chriskirknielsen)
  - [CodePen: chriskirknielsen](https://codepen.io/chriskirknielsen)
  - [Geekometric](https://geekometric.com)
  - [Chronoise](https://chronoise.com)

  <p class="about__quotebox" data-grid-el="quote-phone">Les appels de numéros inconnus sont mon pire cauchemar.</p>

  ## Me joindre

  Je préfère communiquer par écrit, donc veuillez m'envoyer un message à <a href="mailto:{{ metadata.author.email | charToHtml | safe }}">{{ metadata.author.email | charToHtml | safe }}</a>. Si vous souhaitez discuter par téléphone, merci de m'envoyer un e-mail afin d'organiser un appel. Merci !

</div>