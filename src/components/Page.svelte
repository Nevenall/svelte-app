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
  <h1>{router.path}</h1>

  {@html book.readme.content}
  <!-- {@html book.allPages[0].content} -->

</div>
