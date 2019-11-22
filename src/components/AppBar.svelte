<script>

  import logo from "../assets/logo-192.png";

  let open = false;

  // TODO - hover state
  // TODO - close on nav or <esc>
  // DONE - slide in drawer
  // TODO - raise nav event
  // TODO - nav drawer overlay
  // TODO - nav drawer transistion animation. I like the bouncy bit from that blue example.

  // can i make the button inside the nav and relative to it
  // so its at the right side, like a tab, and when you pull it, it slides out?
  // also the icon lines should be relative. they are currently absolute and translated.

  // want the width of the nav to be 100vw at 320px screen size,
  // down to 33vw at wide wide screen like 1800px

  export let segment;
</script>

<style>

</style>

<nav class:open>
<h1>TopAppBar</h1>
</nav>
<!--
   We have some nav
   need to be able to actually get a display the page content, it's a file, soo maybe take a look at how the sapper router works. We can import the pages to get them into the build. 
   we also need to do the nested nav
   the service-worker needs to be, and to deal with 
   the nav can raise an event and a page compoent can get that a load the page. 
   Though, we kinda want to have all the pages present. 
   
 -->
