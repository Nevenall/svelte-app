<script>
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  

  export let name;
</script>

<style>
  /* Import App Shell fonts+icons */
  /* TODO: may want to add italics typefaces */
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
</style>

<TopAppBar variant="static">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>{name}</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download">
        file_download
      </IconButton>
      <IconButton class="material-icons" aria-label="Print this page">
      </IconButton>
        print
      <IconButton class="material-icons" aria-label="Bookmark this page">
        bookmark
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
<h1>Hello World!</h1>