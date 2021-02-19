---
templateEngineOverride: njk,md
title: Salut, moi c'est Chris
summary: En apprendre plus sur Christopher Kirk-Nielsen
permalink: /fr/a-propos/
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

  ## Débuts

  Le développement front-end est actuellement mon activité principale mais ce n'a pas toujours été le cas. J'avais passé beaucoup de temps au collège à me divertir sur des logiciels graphiques (de MS Paint à Photoshop) et à tenter de personnaliser ma page MySpace. Après un temps, j'avais commencé à faire un petit site Internet sur un jeu vidéo que j'aimais.

  Après un début raisonnable, je m'étais plongé dans la création de **sites dynamiques** et j'avais créé une communauté — à cette époque, les forums de discussion étaient encore populaires. Concevoir l'apparence et développer ce site était un passe-temps qui finirai par être un projet nourri par une vraie passion, qui grandirait bien au-delà de mes espérances d'adolescent. J'étais un de ces fameux "webmasters" à l'époque…

  Ceci m'avait poussé faire des études en **graphisme** pendant 4 ans, avec un intérêt particulier pour **la typographie, la théorie des couleurs, la composition, ainsi que l'animation**. J'avais cependant continué d'apprendre des choses sur le domaine du web, créant des blogs et d'autres petits projets. J'avais, par la suite, **travaillé en freelance pendant quelques années**, jonglant entre graphisme et développement — un équilibre enrichissant.

  J'ai fini par réaliser ce que je souhaitais vraiment faire : **travailler sur le web pour bénéficier tout le monde** (ou en tout cas, contribuer ma pierre à l'édifice). Essentiellement, ce domaine est en constante évolution, ce qui signifie que je peux toujours approfondir mes connaissances. Avec ça, je suis totalement <span data-about-action="hooked-delorean">accro</span> !

  <div class="u-displayFlex u-flex--center u-floatClear">
    {% set delorean -%}
    {%- include "assets/img/delorean.svg" -%}
    {%- endset -%}
    {{ delorean | htmlmin | safe }}
  </div>
  </div>
</div>

## Projets

### VisuBezier

Quand je code, j'utilise VS Code mais parfois, j'aimerais retrouver des fonctionnalités d'autres logiciels, comme un aperçu des courbes d'accélération CSS, j'ai donc créé une extension ! Le résultat est [VisuBezier](https://marketplace.visualstudio.com/items?itemName=chriskirknielsen.visubezier), qui permet d'avoir un aperçu d'une animation CSS lorsque l'on survole une fonction ou un mot-clé de lissage. Je ne suis pas vraiment investi dans TypeScript (mais je comprends son utilité) et ceci étant ma première tentative d'extension pour VS Code, ce fut un défi mais au bout du compte, c'est plaisant de voir mon extension fonctionner.

### Chronoise

<div>
  <div class="u-floatRight u-marginBlockEnd--double u-marginInlineStart--double">
    {% set keyboard -%}
    {%- include "assets/img/keyboard.svg" -%}
    {%- endset -%}
    {{ keyboard | htmlmin | safe }}
  </div>

Quand je ne suis pas occupé à faire des choses sur le web, je suis potentiellement en train de faire de la **musique électronique** sous le nom de [Chronoise](https://chronoise.com) , qui est un petit projet débuté en 2010. Sans aucune éducation musicale, ce n'a pas été facile mais c'est très amusant d'expérimenter avec divers sons et il y a tellement de ressources disponible en ligne pour apprendre à créer de la musique !

</div>

### Geekometric

Je maintiens **un blog où je critique des films, de la musique ou des jeux vidéo** : [Geekometric](https://geekometric.com) (qui était une excellente excuse pour migrer mon site WordPress à un générateur de site statique dénommé Hugo). Bien entendu, tout le monde a sa propre opinion mais toujours est-il que de se poser, remâcher l'expérience et écrire est très agréable.

### T-Shirts, Affiches & Compagnie

Parfois, je retourne à mes origines de graphiste et crée de petits projets. Vous pouvez trouver quelques illustrations que j'ai réalisées que vous pouvez acheter sur des t-shirts et divers autres formats — si vous aimez le CSS et le style rétro des années 80, ça pourrait bien vous plaire : retrouvez-les sur {% for store, link in metadata.merch -%}
  {{- ", " if (not loop.first and not loop.last) -}}
  {{- " " + andWord + " " if loop.last -}}
  <a href="{{ link }}">{{ store }}</a>
{%- endfor %}. Votre soutien signifierait beaucoup à mes yeux !

## Hobbies

Comme de nombreux humains, écouter de la musique fait partie de mon quotidien, surtout de la musique rock, metal et synthwave — je suis obsédé par l'esthétique des années 80. Quelque chose avec les synthés m'attire beaucoup — peut-être que les couleurs néon baignent en harmonie au plus profond de moi !

J'aime aussi lire un bon bouquin avec de la musique sur les oreilles pendant mon trajet d'une heure à **New York City** mais je suis **originaire de Lyon, en France**, avec des parents immigrés du Danemark. Par conséquent, je parle français, anglais et danois couramment, je me débrouille en italien et j'aimerais reprendre le japonais. J'adore les langues étrangères, si ce n'était pas déjà évident, et en apprendre d'autres serait bienvenu !

<hr>

## C.V. bien trop formel

Voici une auto-représentation sous forme de liste, si ça peut apaiser votre curiosité.

### Compétences

- **Développement :** HTML5, CSS, JavaScript, PHP (OOP, WordPress), MySQL
- **Outils :** Git, Gulp, JAMstack (sites statiques avec Eleventy ou Hugo, sur Netlify)
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
- *Lit également les caractères cyrilliques russes, hiragana et katakana*

### Intérêts

- **Dose quotidienne :** thé ou café, musique, livres, jeux vidéos, films et séries T.V.
- **Geekometric :** blog personnel de critique de films/jeux vidéo (depuis 2013)
- **Chronoise :** création de musique électronique (depuis 2010)

### Documents

- **Travail :** détenteur de "Green Card" américaine
- **Nationalité :** double-nationalité franco-danoise

### Sur la toile

- [Twitter: @ckirknielsen](https://twitter.com/ckirknielsen)
- [GitHub: chriskirknielsen](https://github.com/chriskirknielsen)
- [CodePen: chriskirknielsen](https://codepen.io/chriskirknielsen)
- [Geekometric](https://geekometric.com)
- [Chronoise](https://chronoise.com)

## Me joindre

Je préfère communiquer par écrit, donc veuillez m'envoyer un message à <a href="mailto:{{ metadata.author.email | charToHtml | safe }}">{{ metadata.author.email | charToHtml | safe }}</a>. Si vous souhaitez discuter par téléphone, merci de m'envoyer un e-mail afin d'organiser un appel. Merci !