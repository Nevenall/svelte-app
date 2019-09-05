<script>
  import Nav from "./components/Nav.svelte";

  

  export let name;
</script>

<style>
  /* Import App Shell fonts+icons */
  /* TODO: may want to add italics typefaces */
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");

  span {
    color: red;
  }
</style>

<Nav />
<h1>
  Hello
  <span>{name}!</span>
</h1>
