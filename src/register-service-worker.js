if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js')

      // navigator.serviceWorker.addEventListener('message', event => {
      //    console.log("[Message]", event.data)




      // })

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