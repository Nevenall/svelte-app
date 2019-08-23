<script>
  import Nav from "./components/Nav.svelte";
  export let name;
</script>

<style>
  span {
    color: red;
  }
</style>

<h1>
  Hello
  <span class="red">{name}!</span>
</h1>
<Nav />
