# BookShelf

the readme for the svelte powered verison of BookShelf. 


## Notes on Parcel

We use Parcel to bundle the app, but the Svelte Material UI components require a local sass import which Parcel protects against. I've forked parcel v1 and hacked it so it can build the app.
It's included as a local package reg.