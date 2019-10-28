
// Currently this import really confuses parcel, not to mention runtime action jeez
//import book from '/pages/book'

// todo - becomes a match for each of the pages in book, based on the slug of the page.

// Set up service worker event listener
self.addEventListener('fetch', event => {
   // let match = path === '/page'

   // console.log(`[ServiceWorker] '${path}' '${match}' | client '${event.clientId}'`)
   // // console.log("[ServiceWorker] url", event.request.url)
   // console.log("[ServiceWorker] match", match)
   // console.log("[ServiceWorker] clientId", event.clientId)

   if (event.clientId) {
      self.clients.get(event.clientId).then(client => {
         // console.log("[ServiceWorker] Sending message to client ", client)
         client.postMessage({
            msg: "message posted from fetch listener",
            url: event.request.url
         })
      })
   }


})


self.addEventListener('install', event => {
   console.log(event)

   // activate immediately
   event.waitUntil(self.skipWaiting())

})

self.addEventListener('activate', event => {
   console.log(event)

   // grab all clients
   event.waitUntil(self.clients.claim())
})

self.addEventListener('message', event => {
   event.waitUntil(async () => {
      return
   })
})