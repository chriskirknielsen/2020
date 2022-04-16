---
slug: une-reinitialition-css-moderne
title: Une réinitialisation CSS moderne
summary: Andy Bell propose un reset CSS adapté aux navigateurs modernes.
date: 2019-10-30
original: https://piccalil.li/blog/a-modern-css-reset/
originalTitle: Andy Bell - A Modern CSS Reset
metaImageBackground: 'https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da'
tags:
    - css
---

J'utilise constamment une feuille de style pour réinitialiser de nombreux éléments dans mes projets ("_CSS reset_" ou "_reset_"). Je suis sûr que de nombreux développeur·euses le font également, sans trop s'attarder sur le contenu : "J'ai importé `normalize.css`, c'est bon !" Il est donc agréable de voir que certaines personnes se penchent sur cette question dans le contexte de nos navigateurs actuels. Une de ces personnes est Andy Bell, qui propose un _reset_ moderne. Il nous explique chaque choix et j'ai pensé qu'une traduction en français pourrait servir la communauté francophone.

<!-- excerpt -->

Andy pense bien trop souvent à des choses liées au CSS qui sont… ennuyeuses. Une de ces choses sur laquelle il estime avoir passé trop de temps au fil des années est la réinitialisation de CSS.

Dans cette ère moderne de développement web, nous n'avons pas réellement besoin d'une réinitialisation complète — ou même du tout — car les problèmes de compatibilité entre navigateurs sont bien moindres comparés aux jours où Internet Explorer 6 dominait. Cette ère avait vu naître des réinitialisations comme `normalize.css` qui nous avait évité de nombreux maux de têtes. Ces jours sont loin derrière nous et nous pouvons désormais faire bien plus confiance à nos navigateurs. Les réinitialisations comme cela sont donc, pour la plupart, redondantes.

## Une réinitialisation avec des valeurs par défaut raisonnables

Andy est un grand adepte de _reset CSS_ donc il a petit à petit assemblé son propre groupe de règles, avec une approche de "code golf" (le moins de code possible). Avant d'analyser chaque règle, voici le _reset_ proposé par Andy dans son intégralité :

```css
/* Règles de dimensionnement des boîtes */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Retirer le rembourrage (zone de remplissage) par défaut */
ul[class],
ol[class] {
	padding: 0;
}

/* Retirer les marges par défaut */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
	margin: 0;
}

/* Définir les défauts élémentaires du corps */
body {
	min-height: 100vh;
	scroll-behavior: smooth;
	text-rendering: optimizeSpeed;
	line-height: 1.5;
}

/* Retirer les styles de liste sur les éléments ul, ol qui ont un attribut class */
ul[class],
ol[class] {
	list-style: none;
}

/* Les éléments a qui n'ont pas de classes reçoivent les styles par défaut */
a:not([class]) {
	text-decoration-skip-ink: auto;
}

/* Rendre l'utilisation d'images plus simple */
img {
	max-width: 100%;
	display: block;
}

/* Cadence et rythme naturels pour les éléments enfants d'éléments article par défaut */
article > * + * {
	margin-top: 1em;
}

/* Hérite les règles typographiques pour les éléments input et button */
input,
button,
textarea,
select {
	font: inherit;
}

/* Retire toutes les animations et transition pour les personnes qui préfèrent ne pas les voir */
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
```

## Étape par étape

Commençons par `box-sizing`. Absolument tous les éléments et pseudo-éléments sont réinitialisés en leur assignant `box-sizing: border-box`.

```css
*,
*::before,
*::after {
	box-sizing: border-box;
}
```

Certaines personnes pensent que les pseudo-éléments devraient hériter `box-sizing`, ce qui est assez ridicule. Si vous souhaitez utiliser une autre valeur, définissez-la explicitement.

```css
ul[class],
ol[class] {
	padding: 0;
}
```

```css
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
	margin: 0;
}
```

Après `box-sizing`, ce sont les rembourrages et marges qui sont définis par les styles du navigateur qui sont réinitialisés.

Pour ce qui est des listes, le sélecteur se limite aux celles qui ont un attribut `class`, parce que si un bon vieux `<ul>` ou `<ol>` est utilisé, il devrait ressembler à une liste. De nombreuses réinitialisations retirent ceci agressivement.

```css
body {
	min-height: 100vh;
	scroll-behavior: smooth;
	text-rendering: optimizeSpeed;
	line-height: 1.5;
}
```

Ensuite : styles du corps. Il est pratique que `<body>` prenne toute la hauteur de l'écran, même vide donc il a une hauteur minimale de `100vh`. Question de goûts, le défilement doux vers les ancres est agréable donc `scroll-behavior: smooth` est également défini.

Seuls deux styles texte sont définis. La hauteur d'une ligne est ajustée à `1.5` car le défaut de `1.2` n'est juste pas suffisant pour avoir un texte accessible et lisible. Aussi, le rendu du texte est `optimizeSpeed`. Utiliser `optimizeLegibility` rend le texte plus agréable à voir mais peut avoir un sérieux impact de performance avec des délais de chargement jusqu'à 30 secondes de long. Cependant, nous pouvons nous permettre de l'utiliser pour certaines micro-sections de texte.

```css
ul[class],
ol[class] {
	list-style: none;
}
```

Tout comme les marges et rembourrage, `list-style` est uniquement réinitialisé sur les éléments de liste ayant un attribut `class`.

```css
a:not([class]) {
	text-decoration-skip-ink: auto;
}
```

Pour les liens sans classe, `text-decoration-skip-ink: auto` est défini pour que le soulignent n'impacte pas la lisibilité. Ceci pourrait être assigné à tous les liens mais cela a provoqué quelques conflits par le passé donc Andy ne préfère pas généraliser.

```css
img {
	max-width: 100%;
	display: block;
}
```

C'est au tour de la bonne vieille méthode d'images fluides. Les images sont définies comme un élément de type bloc car honnêtement, la vie est trop courte pour se soucier du petit espace en-dessous. Qui plus est, si on regarde ceci d'un point de vue réaliste, les images ont tendance à se comporter comme des éléments blocs. Créer une classe comme `.inline` sera plus souvent l'exception que la règle.

```css
article > * + * {
	margin-top: 1em;
}
```

Andy a hésité avec ce bout de code mais pense qu'il est temps de l'implémenter, étant ce qu'il utilise le plus souvent ces jours-ci. [Le sélecteur de hibou lobotomisé](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) cible les descendants directs d'un `<article>` et leur ajoute une marge supérieure de `1em`. Ceci donne un rythme consistant au flux d'un article. De manière moins générale, Andy utilise plutôt une classe `.flow` dans ses projets pour le même résultat. Vous pouvez [en lire plus sur 24 Ways](https://24ways.org/2018/managing-flow-and-rhythm-with-css-custom-properties/).

```css
input,
button,
textarea,
select {
	font: inherit;
}
```

Une autre chose que Andy a finalement choisi de définir comme valeur par défaut est `font: inherit` sur les éléments de saisie, un raccourci, qui fait exactement ce que nous attendons de lui. Finis sont les minuscules textes (parfois en mono) !

```css
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
```

Dernièrement mais loin d'être triviale, est une règle `@media` qui réinitialise les transitions, animations et comportement du défilement si l'utilisateur préfère les mouvements réduits. Ceci est une addition utile — notamment avec les sélecteurs `!important` qui donnent la priorité en termes de spécificité — puisque maintenant, si une utilisatrice ne veut pas de mouvement, elle n'en verra pas, quel que soit le CSS qui suit cette réinitialisation.

_Note :_ Merci à [@atomiks](https://github.com/atomiks), désormais ceci ne cassera pas les écouteurs d'événements JavaScript sur `animationend` et `transitionend`.

## En conclusion

C'est tout, une toute petite réinitialisation qui simplifie grandement la vie. Si vous l'aimez, vous pouvez l'utiliser aussi ! Vous trouverez ce _reset_ sur [GitHub](https://github.com/hankchizljaw/modern-css-reset) ou [npm](https://www.npmjs.com/package/modern-css-reset).
