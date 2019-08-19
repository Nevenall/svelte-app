<script>
  import book from "../pages/book";
  console.log(book);
  export let segment;
</script>

<style>

</style>

<nav>
  <ul>
    {#each book.sections as section}
      <li>
        {section.name}
        {#each section.pages as spage}
          <li>
            <a href={spage.path}>{spage.name}</a>
          </li>
        {/each}
      </li>
    {/each}
    {#each book.pages as page}
      <li>
        <a href={page.path}>{page.data.name}</a>
      </li>
    {/each}
  </ul>
</nav>
<!--
   We have some nav
   need to be able to actually get a display the page content, it's a file, soo maybe take a look at how the sapper router works. We can import the pages to get them into the build. 
   we also need to do the nested nav
   the service-worker needs to be, and to deal with 
   the nav can raise an event and a page compoent can get that a load the page. 
   Though, we kinda want to have all the pages present. 
   
 -->
