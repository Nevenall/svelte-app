<script>
  import Nav from "./components/Nav.svelte";
  export let name;
</script>

<style>
  span {
    color: red;
  }
</style>

<Nav />
<h1>
  Hello
  <span>{name}!</span>
</h1>
