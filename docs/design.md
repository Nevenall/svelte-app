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

Oh, and we need to exclude the manifest from parcel. 

