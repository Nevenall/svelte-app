import UrlPattern from 'url-pattern'

import book from '/pages/book'

// todo - becomes a match for each of the pages in book, based on the slug of the page.
const pattern = new UrlPattern('/page')

// Set up service worker event listener
self.addEventListener('fetch', async event => {
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


self.addEventListener('install', async event => {
   // Perform install steps
   console.log("[ServiceWorker]", event)

   // activate immediately
   self.skipWaiting()
})

self.addEventListener('activate', async event => {
   // Perform activate steps
   console.log("[ServiceWorker]", event)

   // self.clients.matchAll({
   //    includeUncontrolled: true
   //  }).then(function(clientList) {
   //    var urls = clientList.map(function(client) {
   //      return client.url
   //    })
   //    console.log('[ServiceWorker] Matching clients:', urls.join(', '))
   //  })

   // grab all clients
   self.clients.claim()


})