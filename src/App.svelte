<script>
  import AppBar from "/components/AppBar.svelte";
  import Drawer from "/components/Drawer.svelte";

  let collapsed = false;
  let open = false;
  // todo - add locally stored user pref for theme if they toggle it
  // https://codepen.io/jpamental/pen/pozrNyK

  export let name;
</script>

<style type="text/scss">
  $color: purple;
  .fixed {
    position: fixed;
  }
  h1 {
    color: $color;
  }
</style>

<svelte:window on:scroll={() => (collapsed = window.scrollY > 5)} />
<AppBar />
<Drawer/>

<div>

  <h1>Just a simple page</h1>
  <!-- <Router>
    <Route exact path="/">
      <h2>index route</h2>
    </Route>
    <Route path="/01">
      <h2>page 1 route</h2>
    </Route>
    <Route fallback path="*">
      <h2>404 path</h2>
    </Route>
  </Router> -->
</div>
