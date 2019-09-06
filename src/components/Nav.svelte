<script>
  import book from "../pages/book";

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

  :root {
    --nav-width: calc(33vw + 67 * ((1800 - 100vw) / (1800 - 320)));
  }

  nav {
    position: fixed;
    z-index: 99;
    width: max-content;
    height: 100vh;
    top: 0;

    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);

    transition: 0.5s transform;
    transition-timing-function: cubic-bezier(0.38, 0.52, 0.37, 1.27);
  }

  nav.open {
    -webkit-transform: none;
    transform: none;
  }

  /*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
  .hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    opacity: 0.5;
  }
  .hamburger:hover {
     opacity: 1;
  }
  .hamburger.open:hover {
    opacity: 1;
  }
  .hamburger.open .hamburger-inner,
  .hamburger.open .hamburger-inner::before,
  .hamburger.open .hamburger-inner::after {
    background-color: #000;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  /*
   * Arrow Turn
   */
  .hamburger--arrowturn.open .hamburger-inner {
    transform: rotate(-180deg);
  }
  .hamburger--arrowturn.open .hamburger-inner::before {
    transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
  }
  .hamburger--arrowturn.open .hamburger-inner::after {
    transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
  }

  button {
    z-index: 100;
    transform: translateX(20vw);
    /* transform: translateX(calc(33vw + 67 * ((1800 - 100vw) / (1800 - 320)))); */
    /* transform: translateX(calc(33vw + 67 * ((1800 - 100vw) / (1800 - 320)))); */
    /* transform: translateX(50%); */
  }

  button.open {
    /* transform: translateX(var(--nav-width)); */
    /* transform: translateX(calc(33vw + 67 * ((1800 - 100vw) / (1800 - 320)))); */
  }
</style>

<nav class:open>
<button
  class="hamburger hamburger--arrowturn"
  type="button"
  class:open
  on:click={() => (open = !open)}>
  <span class="hamburger-box">
    <span class="hamburger-inner" />
  </span>
</button>

  <img src={logo} alt="logo" />
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
