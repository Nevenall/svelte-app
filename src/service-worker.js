import { Router } from 'service-worker-router'

// Instantiate a new router
const router = new Router()

// Define minimal ping handler
const ping = async () => new Response('pong')


const pageHandler = async (e) => {


   console.log(e.event.clientId)
   return new Response("page response")

   // const client = await self.clients.get(e.event.clientId)

   // client.postMessage({
   //    msg: "Hey I just got a fetch from you!",
   //    url: e.event.request.url
   // })


   // const client = await self.clients.get(e.event.clientId)

   // console.log(client)

   // client.postMessage({msg: "msg from sw", url: e.request.url})
   // // event.waitUntil(async function() {
   //    // Exit early if we don't have access to the client.
   //    // Eg, if it's cross-origin.
   //    if (!event.clientId) return;

   //    // Get the client.
   //    const client = await clients.get(event.clientId);
   //    // Exit early if we don't get the client.
   //    // Eg, if it closed.
   //    if (!client) return;

   //    // Send a message to the client.
   //    client.postMessage({
   //      msg: "Hey I just got a fetch from you!",
   //      url: event.request.url
   //    });

   //  }());
   //return index.html?
}

// Define routes and their handlers
router.all('/_ping', ping)
router.get('/page1', pageHandler)

// Set up service worker event listener
self.addEventListener('fetch', function(event) {
   // Will test event.request against the defined routes
   // and use event.respondWith(handler) when a route matches
   router.handleEvent(event)

})


self.addEventListener('install', function (event) {
   // Perform install steps
   console.log("service worker install event")
})

self.addEventListener('activate', function (event) {
   // Perform activate steps
   console.log("service worker activated event")
})