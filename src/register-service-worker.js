if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () {
      // trick parcel into ignoring sw for now
      let sw = "service-worker.js"
      navigator.serviceWorker.register(sw)
      navigator.serviceWorker.addEventListener('message', event => {
         console.log("[Message]", event.data)
      })
   })
}

// export default {

//    register: function () {

//       if ('serviceWorker' in navigator) {
//          window.addEventListener('load', function () {
//             navigator.serviceWorker.register('service-worker.js')
//             navigator.serviceWorker.addEventListener('message', event => {
//                console.log("[Message]", event.data)
//             })
//          })
//       }
//    }
// }