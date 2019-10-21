import UrlPattern from 'url-pattern'

// Currently this import really confuses parcel, not mention runtime action jeez
// import book from '/pages/book'

// todo - becomes a match for each of the pages in book, based on the slug of the page.

// Set up service worker event listener
self.addEventListener('fetch', event => {
   event.waitUntil(async () => {
      const pattern = new UrlPattern('/page')
      let path = new URL(event.request.url).pathname
      let match = pattern.match(path)
      // console.log("[ServiceWorker] url", event.request.url)
      // console.log("[ServiceWorker] match", match)
      // console.log("[ServiceWorker] clientId", event.clientId)

      if (event.clientId && match) {
         const client = await self.clients.get(event.clientId)

         client.postMessage({
            msg: "message posted from fetch listener",
            url: event.request.url
         })
      }

   })

})


self.addEventListener('install', event => {
   // Perform install steps
   event.waitUntil(async () => {
      // activate immediately
      self.skipWaiting()

      console.log(event)
      // caching etc



   })
})

self.addEventListener('activate', event => {

   // Perform activate steps
   event.waitUntil(async () => {
      // grab all clients
      self.clients.claim()

      console.log(event)
      // caching etc
   })

   // self.clients.matchAll({
   //    includeUncontrolled: true
   //  }).then(function(clientList) {
   //    var urls = clientList.map(function(client) {
   //      return client.url
   //    })
   //    console.log('[ServiceWorker] Matching clients:', urls.join(', '))
   //  })



})