import UrlPattern from 'url-pattern'

const pattern = new UrlPattern('/page')

// Set up service worker event listener
self.addEventListener('fetch', async event => {

   // console.log(event)

   let match = pattern.match(event.request.url.path)
   console.log("url", event.request.url)
   console.log("match", match)
   console.log("clientId", event.clientId)

   if (event.clientId && match) {
      const client = await self.clients.get(event.clientId)
      // console.log(client)

      client.postMessage({
         msg: "message posted from fetch listener",
         url: event.request.url
      })
   }

})


self.addEventListener('install', async event => {
   // Perform install steps
   console.log(event)
})

self.addEventListener('activate', async event => {
   // Perform activate steps
   self.clients.claim()
   console.log(event)
})