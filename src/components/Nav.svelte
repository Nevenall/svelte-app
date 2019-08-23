<script>
  import { fly } from "svelte/transition";
  import book from "../pages/book";

  import logo from "../assets/logo-192.png";

  let open = false;

  // TODO - hover state
  // TODO - close on nav or <esc>
  // TODO - slide in drawer
  // TODO - raise nav event

  // can i make the button inside the nav and relative to it
  // so its at the right side, like a tab, and when you pull it, it slides out?
  // also the icon lines should be relative. they are currently absolute and translated.

  export let segment;
</script>

<style>
  .button {
    position: relative;

    z-index: 1002;
    cursor: pointer;
    width: 20px;
    height: 14px;
  }

  .icon {
    position: relative;
    width: 20px;
    height: 14px;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 1px;
  }

  .line {
    position: relative;
    background-color: #333;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    left: 0;
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .line-1 {
    top: 0;
  }

  .line-2 {
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .line-3 {
    bottom: 0;
  }

  .button.open .line-1 {
    transform: translateY(7px) translateY(-50%) rotate(-135deg);
  }

  .button.open .line-2 {
    opacity: 0;
  }

  .button.open .line-3 {
    transform: translateY(-7px) translateY(50%) rotate(135deg);
  }

  nav {
    position: fixed;
    z-index: 99;
    width: 50vw;
    height: 100vh;
    top: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    border: solid 2px red;
  }

  nav.open {
    -webkit-transform: none;
    transform: none;
  }

  button {
    z-index: 1002;
    position: relative;
    transform: translateX(50vw);
    width: 50px;
  }
  button.open {
    transform: translateX(50vw);
  }
</style>

<!-- <div class="button" class:open on:click={() => (open = !open)}>
    <span class="icon">
      <span class="line line-1" />
      <span class="line line-2" />
      <span class="line line-3" />
    </span>
  </div> -->
  <nav class:open>
  <button class:open on:click={() => (open = !open)}>Open ></button>
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
