<script>
  import Nav from "./components/Nav.svelte";
  export let name;
</script>

<style lang="scss">
  @import "./styles/global.scss";

  h1 {
    font-family: "AtomicWedgie";
  }
</style>

<h1>Hello {name}!</h1>
<Nav />
