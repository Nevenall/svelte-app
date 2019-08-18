<script>
  import book from "../pages/book";
  console.log(book);
  export let segment;
</script>

<style>

</style>

<nav>
  <ul>
    {#each book.pages as page}
      <li>
        <a rel="prefetch" href="{page.path}">{page.data.name}</a>
      </li>
    {/each}

   
  </ul>
</nav>
