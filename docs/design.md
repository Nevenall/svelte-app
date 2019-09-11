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

### 8/15

So, parcel will package scss. I could just include it in index.html and it will get taken care of, 
But then we miss out on tree pruning. 
not that I plan to have that much of that, but...
I wonder if parcel can do that itself? 
prob not

So, global sass bundling works, 
but, still need to configure svelte to allow scss style sections.
then again, do we need svelte compoents to use sass? we can proably get away with plain css. 

### 8/19

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

### 9/10

update for bundling

parcel v1 can, I think, work if we configure sass with 2 load paths: src/styles and node_modules, tth should get the components to load. 


Someday we'll even get parcel v2 to work, but they haven't even finished the sass trafor that yet. 



So, the include paths are not being propegated to the smui modules because of parcel utils config.js line 14. It's deliberate. 
So, the fact that I need to reference a local file from these modules is a bit unusual. 
So, how do we address that? Hack up my parcel module?

It makes sense to me to use my global settings but allow modules to merge in local settings and overwrite globals if they have them. 

Still... Could add a .sassrc file to every @smui module as well. That sounds like a pain.  