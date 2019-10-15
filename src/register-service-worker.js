export default {

   "register": function () {
      if ('serviceWorker' in navigator) {
         window.addEventListener('load', function () {
            navigator.serviceWorker.register('/service-worker.js');

            navigator.serviceWorker.addEventListener('message', event => {
               console.log(event.data.msg, event.data.url);
            });

         });
      }
   }
}