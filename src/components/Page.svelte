<script>
  import book from "/pages/book.js";
  //   import { onMount, onDestroy } from "svelte";

  //   function message(event) {
  //     console.log("[page.svelte]", event.data);
  //   }

  //   onMount(async () => {
  //     navigator.serviceWorker.addEventListener("message", message);
  //   });
  //   onDestroy(async () =>
  //     navigator.serviceWorker.removeEventListener("message", message)
  //   );

  export let id = "page";
  export let router = {};
</script>

<div {id}>

  {@html book.readme.content}

</div>
