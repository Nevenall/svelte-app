import App from './App.svelte'
import sw from './register-service-worker'

sw.register()

const app = new App({
   target: document.body,
   props: {
      name: 'BookShelf'
   }
})
