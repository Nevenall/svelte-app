# Svelte app


I have separated this from sapper-app so that I can start from just Svelte for bookshelf

sapper is cool, but more than I need. 

Using Parcel for speed and it now has good tree shaking support. 
Also, I prefer the parcel approach to configuration where I can configure each front-end piece individually. Makes it easy to learn each and to swap them. 



## Front End pipeline

Parcel comes with a dev server with hmr so, thats fine. My goal is that this will be compiled to a static PWA. 
Need to learn about how to write a service-worker.js

Babel is a given I think, we want to have the ability to use modern js. 

Sass also is one of my favorites if only for nested rules.

PostCSS maybe? autoprefixer would be good. 

Svelte can remove dead css rules. 

Man what is with my typing today? 

Can't tell if it's the keyboard or if it's me, or if it's the fact that I have my screen size set low.
Anyway....

I guess sapper does do well in critical path styles and such. But, bookshelf is not a very big site. If it's big, it will be because of fonts and images. 


### Todo

got the parcel setup working, there is a little bug around the svelte plugin which maybe will be fixed soonish. https://github.com/DeMoorJasper/parcel-plugin-svelte/issues/44

web manifest fixed


fonts are working,

because of sass importing

I'd like to see the svelte compiler output

### 8.15.2019

So, parcel will package scss. I could just include it in index.html and it will get taken care of, 
But then we miss out on tree pruning. 
not that I plan to have that much of that, but...
I wonder if parcel can do that itself? 
prob not

So, global sass bundling works, 
but, still need to configure svelte to allow scss style sections.
then again, do we need svelte compoents to use sass? we can proably get away with plain css. 

### 8.19.2019

start with a nav component that does one level of section. we can improve later. 

so lets read about pwa and service worker. 
we can background cache the pages because off line is my goal. 

offline reading
fast
how large is an html book? depends on if they are pictures. 

## Service Worker

1. loads app shell, initial readme/intro page html content, all fonts, and styles.
2. fetch the rest of the page content into the cache in the background
3. if a specific page is requested, try checking the server for a more upto date version and fetch it if...otherwise serve from cache. 

occassionally check for an app shell update, becuase that would include new pages or removed pages and that sort of thing. 

pretty straight forward.

## Nav

can the functionality of the nav drawer be entirely contained in the component? 
a button that causes a fly in

the smaller the screen the larger the percentage the menu can take up.
min-width? 


## App bar 

want it to stick to the top and relect theme color. be nice if we can hide it as we scroll down. Show it if we scroll up. but has to be smooth and consistent. 

it contains the nav drawer button. maybe a breadcrumb too. especially if we get to parsing individual markdown sections.

### 9.10.2019

update for bundling

parcel v1 can, I think, work if we configure sass with 2 load paths: src/styles and node_modules, tth should get the components to load. 


Someday we'll even get parcel v2 to work, but they haven't even finished the sass trafor that yet. 



So, the include paths are not being propegated to the smui modules because of parcel utils config.js line 14. It's deliberate. 
So, the fact that I need to reference a local file from these modules is a bit unusual. 
So, how do we address that? Hack up my parcel module?

It makes sense to me to use my global settings but allow modules to merge in local settings and overwrite globals if they have them. 

Still... Could add a .sassrc file to every @smui module as well. That sounds like a pain.  


### 9.11.2019

Development log/changes, should make a dev journal in a separate document. 

I forked parcel and hacked it so it would build this proj

## Bookshelf design

I was thinking about a couple of things around bookshelf's design. 
Its intended for game books, so we can have well defined game book constructs, like a stat block. 

Then we can do more specific css for those constructs. 

The thing about that is how much we need to embed in the md side. 
Which is fine, we can extend things with custom containers as much as we need too. 

Then each write instance has it's own stat block html container. 

May want to think about that remark plugin for css classes the `.{class}` one.  


### 9.16.2019

so, material design has some strong opinions about text colors. 
but we can use css custom properties to style our site. Then we can also switch light and dark themes pretty easily. 

So, we could also allow for some customization of the line height and width as well. and or base font size. 

## 9.18.2019

dark/light theme. Easy enough to switch on the body tag...should we also change the app shell colors? I feel like probably we should adjust theme based on the them, but the thing is they are controlled through sass, but sass resolves into css props. But we'd have to dig into those variables and adjust them. 

TODOs

- [ ] Need to setup base typography include min content width, and minimum margins, and font size and styles
- [ ] need a nav drawer with list of nav.
- [ ] need a router and page navigation. We can take this experience and feedback to book.js creation. For example, why not embed the html contents IN the book.js? make it simple enough and we have a data file that can be compressed and contains everything we need to render it.



## 9.19.2019

restructed a bit so that book specific stuff is contained in the same place. should we move color vars there?
fonts should proably be moved to assets. 
working on the page specific style. are imported as scss, but I think we want to use svelte to isolate the styles for the book, though I'd still like to use scss. So, setup sass in svelte and import book styles specifically 

so, can we separate general typography from book specific styles? 
book can always override. 

## 9.26.2019

Got the collapsable app bar working. 
Also deployed to https://svelte-bookshelf.netlify.com

Next up, nav drawer and navigation as an entire thing. 

it's time to ask, how do we want to operate the pages and nav and such?
Like, we want the entire thing to be offline first.
So, im inclined to drive the app from book.js. then, we can easily load html from that. 
though, that means we'll have to adapt to deep links, which is fine. 

So, arbitararly, we have html content broken into pages and sections. Sections with pages. 

the problem with storing the html in json is we can't bundle any of the assets.
So, we should keep it as html pages and assets so we can have our bundler bundle those for offline. 


That would be the reason.


so, we cna import the pages as html. 
but svelte is good about protecting the content from our styles. 
So, i think we'll have to move them to top level 

## 9.27.2019

cleaned up the styles so everything is in the same folder. 

styles specific to the page are keyed to #page id.
So, everything is imported globally and it works way better. 

might still rearrange things as:

global
  app (appshell fonts and styles)
  typography (base typography keyed to #page)
  book (book specific fonts, and styles keyed to #page)

can we instruct parcel to fetch and http resources and to bundle them?


## 9.29.2019

got the book working pretty well. we can import the files as html and have the page comp render them. 

So, now the question is routing...
there are lots of SPA options. abtract-state-routing for example, is a framework agnostic possiblity. But, we need to render a nav from the book then we need the page comp to react to nav events and load the correct page. 
So, I feel like we might need to do some hand rolled routing if its going to be a particular comp that is doing the thing. 

So, html5 history API is good for our out client side routing. Helps to keep the backbutton working well. 

Next, the service-worker.js that acts as a proxy, and might interact with client side routing or might no. 

Goals: 
1. we want client side routing for pages
1. we want to use the history api so we don't need a #
2. we want deep linking to specific headers to work. Ie, page#header. 

the service-worker only really needs to load the app in the background, though it might not even need to do that because we'll have a solid app package pre-compiled. 

So, initial request. 

## 10.1.2019

need universal redirects to index.html for deep linking. 
that's a per host thing and pretty easy.
we'll need to work on the actual routing. 
either internal, or from the outside where we get a url. 
doesn't have to be very tricky. 

but does have to work client side. 

there is a service worker based router. https://github.com/berstend/service-worker-router

doesn't even have to be in sw context. we can use it to handle various requests. 
And then raise an event which the page component can react to. 

`var p = new UrlPattern('*(#:header)')`

we can match anchors like thus. 

## 10.9.2019

So, we have book.js which basically forms our routes. 
we want to click a url that represents that book/sections/pages
and then take that route, and switch up the correct page from book for that. 
So, router can raise an event? 
Stand alone router will work for now, but is temporary because we'll eventually have a service worker to cache our off-line content. 

So, create a highlevel router component which the app can use and will propegate route info through our svelte components. 

The 
