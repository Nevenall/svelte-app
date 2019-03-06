# Design

This template is the start of a hand-coded replacement for BookShelf. 

Let's learn more about html and css and see what we can accomplish without a big framework like vue and material design? 

Without worrying too much about compatibility. 

## Svelte components vs. Web components

It's possible to compile to web components, which doens't work with svelte-transactions, but I presume we could do our own css based animations? 

The web compoments are more isolated, and is an upcoming browser tech. However, I wonder how the page content will be handled? beause, as I understand it each component gets hidden in the markup. So, we'd have to fetch an initial page that contained all of the book markup bytes. Not a huge deal, but also, maybe not?

Also, every page component would have to have an element-name and I'm not sure we can dynamically switch to them all that easily. Like we would for a page. 

best to stick with vanilla svelte for now. I think. 

## App Layout

I like the basic app layout I have already. 
AppBar with a breadcrumb, sliding nav drawer, and text that waterfall scrolls behind the appbar. I'd like too if we could gracefully hide the appbar with scrolling for a full screen effect, but that never seems to work that well. 

## Features

Also, touch and keyboard nav would be cool

But first new feature should probably be a really good search experience. 

hard to find a consistant keyboard shortcut, but we can at least have a nice sliding panel that keeps the last search results and provides context for each appearance. 
and is fast and supports at least some kind of * patterning. 

## Styling

we have a pretty good typography style sheet already, we can use that, and we have the ability to bundle more of the book stuff, fonts and stylesheets, into the pages dir. Start working towards a single instance app some day. 

**use css variables over sass variables. They are dynamic.**

Establish our screen breakpoints solidly upfront.

The existing asides are ok, but it might be good to make the basic ones simpler and let the book control them more? I'm thinking of the aside lists in the blades book. I like them. 

### Effects

One thing that the existing vue components have is effects, like the ripple effect when you click something. At least I think they do... It would be cool to figure out how to do that. 
AND this is where we start reading hydejack to learn how he does animations and such. 


so, how do components and css variabls interact? each component can import them

## Store

What if we used gundb instead of store? It does the same stuff? Each instance of our app is like one app? Especially good if we occasionally publish page updates. would be like a 