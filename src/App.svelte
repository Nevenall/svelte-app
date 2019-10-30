<script>
  import TopAppBar, {
    Row,
    Section,
    Title,
    ShortFixedAdjust
  } from "@smui/top-app-bar";
  import Drawer, { Content, Scrim, AppContent } from "@smui/drawer";
  import Button from "@smui/button";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text } from "@smui/list";
  import { Label, Icon } from "@smui/common";
  import A from "@smui/common/A.svelte";

  import { Router, Route } from "./components/svero/main.js";

  let collapsed = false;
  let open = false;
  // todo - add locally stored user pref for theme if they toggle it
  // https://codepen.io/jpamental/pen/pozrNyK

  export let name;
</script>

<style>
  .fixed {
    position: fixed;
  }
</style>

<svelte:window on:scroll={() => (collapsed = window.scrollY > 5)} />

<TopAppBar variant="short" bind:collapsed class="mdc-elevation--z4">
  <Row>
    <Section>
      <IconButton class="material-icons" on:click={() => (open = !open)}>
        menu
      </IconButton>
      <Title>{name}</Title>
    </Section>
    <Section align="end" toolbar>
      {#if !collapsed}
        <IconButton class="material-icons" aria-label="Toggle dark mode">
          nights_stay
        </IconButton>
        <IconButton href="https://github.com/Nevenall/bookshelf">
          <Icon>
            <svg viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205
                11.385.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422
                18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
                1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
                3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
                0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0
                1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3
                .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12
                3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
                5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0
                .315.21.69.825.57C20.565 22.092 24 17.592 24
                12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Icon>
        </IconButton>
      {/if}
      {#if collapsed}
        <IconButton
          class="material-icons"
          aria-label="Open app bar"
          on:click={() => (collapsed = !collapsed)}>
          keyboard_arrow_right
        </IconButton>
      {/if}
      {#if !collapsed}
        <IconButton
          class="material-icons"
          aria-label="Collapse app bar"
          on:click={() => (collapsed = !collapsed)}>
          keyboard_arrow_left
        </IconButton>
      {/if}

    </Section>
  </Row>
</TopAppBar>

<div use:ShortFixedAdjust>
  <Router>
    <Route exact path="/">
      <h2>index route</h2>
    </Route>
    <Route>
    <h2>page 1 route</h2>
    </Route>
    <Route fallback path="*">
    <h2>404 path</h2>
    </Route>
  </Router>
</div>
