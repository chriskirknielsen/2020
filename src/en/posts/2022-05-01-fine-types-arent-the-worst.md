---
slug: fine-types-arent-the-worst
title: "Fine, types in JS aren't the worst"
summary: I'm not on the TypeScript train, but I like a couple of things…
date: 2022-05-01
metaImageBackground: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3NoZWxmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
tags:
    - javascript
---

Okay, so I don't like TypeScript all that much. It feels restrictive, so much has to be typed, and I feel my JavaScript code is clean enough as it is. While this is true enough for me, I've recently worked on a project with a pretty extensive JavaScript codebase with quite a few functions and generally speaking, a lot is going on. It's not callback hell (well…) but there's a sort of cascading call of functions, so you want to know what's going on at a glance, especially when dealing with a bunch of APIs.

Here's a short, simplified example of a potential API returning data about a concert event:

```js
/**
 * @typedef {object} ConcertEvent
 * @property {Date} date When the event location opens doors.
 * @property {string} location The name of the event location.
 * @property {string} artistName The name of the headlining act at the concert.
 * @property {string|string[]} [openerName] Optional. Name of the opening act or acts.
 * @property {number} priceGeneral Ticket price for general admitance.
 */

/**
 * Retrieve information for a given concert's unique ID.
 * @param {number} concertId ID for the concert event.
 * @return {ConcertEvent} Concert data.
 */
function getConcertInfo(concertId) {
	return fetch(`/gig-api/concert?id=${concertId}`);
}
```

This saves a lot of time as you avoid having to jump around between definitions and implementation. Define your custom type so you know exactly what your API returns (or conversely, write a type for your API’s expected payload), and can trust autocomplete to provide you with all the properties your object holds. It’s obvious for a lot of folks, but I’ve only fully embraced this in the past year or two, and it has made my code a lot easier to work with. I recommend it!

The trick for me is to not go down a rabbit hole and define a type with JSDoc for every kind of object, or else I might end up with way too many custom types which, while potentially helpful, might just be a bit excessive. My rule of thumb is: if I keep needing to look at the API output to know what it returns, then I should define a custom type. It also makes my code feel more organised. Organisation is neat!

This isn't _exactly_ what TypeScript offers, I know, but it's a similar idea and, well, I guess I'm saying I kind of like it. Having control about when to add details to a piece of code, and being able to execute it without transforming it from TS to JS — all pros, no cons. And hey, if you like TypeScript, cool, I ain't a hater! All the more power to you!

On this topic, [this TC39 proposal for type annotations](https://github.com/tc39/proposal-type-annotations) has got me a little excited (which is rare, I'm usually more excited by CSS stuff)!
