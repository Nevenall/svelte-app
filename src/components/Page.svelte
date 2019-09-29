<script>
  //   import page1 from "/pages/01 Ghosting the Edge.html";
  //   import readme from "/pages/README.html";


  
  import book from "/pages/book.js";

  let page1 = book.allPages[0].data.content;

  console.log(page1);

  export let id;
</script>

<div {id}>
  {@html page1}
</div>
