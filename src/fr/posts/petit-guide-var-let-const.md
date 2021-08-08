---
title: Le petit guide sur var, let et const
summary: Comment distinguer ces mots-clés JavaScript
date: 2021-08-07
tags:
  - javascript
---

On m'a posé la question mais puisque je n'ai pas trouvé de ressource en français à ce sujet après trois secondes de recherche, voici mon tout petit guide sur `var`, `let`, et `const` en JavaScript.

## Le bon vieux var

`var` est la façon la plus simple de définir une variable en JavaScript. Ça marche sur tous les navigateurs, y compris Internet Explorer. C'est aussi, en revanche, non-cadré (ou non-_scoped_ en anglais) dans la plupart des cas. Un _scope_ est typiquement un segment de code compris entre `{` et `}` : `if`, `for`, `while`… — nous pouvons appeler ça un contexte.

Avec `var`, une variable définie dans une boucle comme `for` sera accessible en-dehors de cette boucle après son exécution. Par exemple :

```js
for (var i = 1; i <= 10; i++) {
	var txt = 'Je suis numéro '+i;
}
console.log(txt); // Renvoie "Je suis numéro 10"
```

Le seul cas qui me vient à l'esprit où une déclaration avec `var` restera cadrée (ou _scoped_) est dans une fonction :

```js
for (var i = 1; i <= 10; i++) {
	function salutations(nom) {
		var txt = 'Salut, '+nom+' !';
	}
	console.log(txt); // Renvoie une erreur, "`txt` is not defined" car `txt` appartient à la fonction
}
```

Envelopper toutes nos opérations dans une fonction pour protéger nos déclarations et éviter une fuite de notre _scope_ est un peu fastidieux, mais avec les versions plus moderne de JavaScript (ES6 est le nom le plus répandu), les mots-clés `let` et `const` ont été introduits pour régler ces soucis de _scope_.

## Les nouveaux venus

Avec `let` et `const`, plus de problème : les variables déclarées dans un _scope_ ne sont accessibles que depuis ce même _scope_. Donc pour revenir à notre premier exemple avec `let` à la place de `var` :

```js
for (var i = 1; i <= 10; i++) {
	let txt = `Je suis numéro ${ i }`;
}
console.log(txt); // Renvoie une erreur, "`txt` is undefined" car `txt` n'existe pas en-dehors du scope de notre boucle
```

{% callout %}
J'ai également utilisé la syntaxe moderne appelée _template literals_ (ou en français [littéraux de gabarits](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals)) car si nous pouvons nous permettre `let`, nous pouvons aussi nous permettre cette syntaxe !
{% endcallout %}

Avec `let` ici, nous évitons le besoin de recourir à une fonction pour protéger notre variable de fuiter en-dehors de son cadre.

Vous pouvez employer l'exact même méthodologie que `let` avec `const`, mais avec une différence clé.

`let` fonctionne exactement comme `var` dans le sens où vous pouvez déclarer `let ville = 'Lyon';` puis plus tard modifier sa valeur avec `ville = 'New York'` sans souci (tant que c'est accessible dans le même _scope_). `const` en revanche définit une **constante** et si le nom ne vous met pas déjà la puce à l'oreille : nous ne pouvons pas modifier une constante — sa valeur reste fixe.

Alors que ceci fonctionne sans souci :

```js
let visiteur = 'Godefroy de Papincourt';
visiteur = 'Jacquouille la Fripouille';
```

… ceci provoque une erreur :

```js
const visiteur = 'Godefroy de Papincourt';
visiteur = 'Jacquouille la Fripouille';
```

Il n'est pas permis de modifier la valeur d'une constante. Très pratique lorsque nous voulons nous assurer qu'une variable ait toujours la même valeur. Mais…

## Modifier la valeur d'une constante

Il y a un petit astérisque sur ce point. En effet, nous pouvons modifier le contenu d'un objet déclaré avec `const`. Si nous avons un objet défini comme ceci :

```js
const film = {
	title: 'Les Visiteurs',
	sortie: 1993,
	note: 9
}
```

Et bien, nous pouvons tout à fait modifier la valeur d'une de ces propriétés avec `film.note = 10;`, la supprimer avec `delete film.note;` ou en rajouter avec `film.langue = 'fr';`.

Un _array_ est aussi un objet en JavaScript donc il est également autorisé de modifier, ajouter ou supprimer une valeur de la même façon (mais attention `delete` ne supprime que la valeur, pas son emplacement dans l'_array_) :

```js
const filmsFavoris = ['Retour Vers le Futur', 'Matrix', 'Le Seigneur Des Anneaux'];
filmsFavoris[3] = 'Le Cinquième Élément'; // `filmsFavoris` contient désormais 4 valeurs
```

C'est un peu bizarre mais voyez plutôt ça comme ceci : une constante est comme un appartement dans le sens où il ne peut pas bouger mais nous pouvons mettre ce que nous voulons dans les différentes pièces. Nous pouvons aussi casser des murs ou en rajouter !

Notez que [les primitives](https://developer.mozilla.org/fr/docs/Glossary/Primitive) ne peuvent **pas** être redéclarées, donc ce type de valeurs : `String`, `Number`, `Boolean`, `null`, `undefined` et `Symbol`.

En espérant que ceci soit utile et pas trop confus !