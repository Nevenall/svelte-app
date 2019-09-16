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

  let collapsed = false;
  let open = false;

  export let name;
</script>

<style>
  /* Import App Shell fonts+icons */
  /* TODO: may want to add italics typefaces */
  /* TODO: may also remove some of the roboto we don't need */
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
</style>

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
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
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
  <p>
    Jet engines scream throught the smog overhead and tonight's greasy rain on
    your mirrorshades smears the scavenged neon of High Street Market. Every
    face in the twisting makeshift stalls gets sniffed from your visual cortex
    by the program your client provided and pumped back into your field of
    vision with a color-coded match percentage. 58%...12%...70%...68%...95% —
    "Hey there, Friend."
  </p>
  <p>
    Cold metal drops, soft as a spider, on the back of your neck and a warning
    floats across the bottom of your vision because this smartass hacked their
    safety-off to broadcast a weapons-free alert.
  </p>
  <p>Welcome to the Edge</p>
  <aside class="left ">
    <p>Ghosting​ ~ slang for making a living.</p>
    <p>
      <em>Feeding the meat</em>
      is a more colorful synonym.
    </p>
    <p>
      The edge ~ a place where the stasis of corporate control meets the
      anarchic currents of the street.
    </p>
  </aside>
  <h1 id="ghosting-the-edge">Ghosting the Edge</h1>
  <p>
    This chapter is for everyone. It's ground level concepts and questions to
    help you make this dystopian future your own.
  </p>
  <h2 id="fate--cyberpunk">Fate &#x26; Cyberpunk</h2>
  <p>
    A Fate game is about competent, proactive, and dramatic characters. A
    cyberpunk game is about fighting to survive and thrive in a future where the
    worst of what our world has to offer is exaggerated to extremes. It's a
    dangerous world where even characters with powerful backing find themselves
    dancing daily on the razor's edge of ruin or success. You'll play people who
    fight the system trying to build a life of their own choosing, however
    short, in the cracks and shadows of oppressive corporate domination.
  </p>
  <h3 id="essential-cyberpunk">Essential Cyberpunk</h3>
  <h3 id="cranking-the-engine">Cranking the Engine</h3>
  <p>
    When you are building your cyberpunk game talk about what kinds of
    activities crank your gaming engine. Matrix style high action? Terminating
    rogue cyborgs and AI devices? Dancing in the shadows cast by the mega corps
    doing dirty jobs while playing the corps against either other. Fighting from
    inside the corrupt system to do the right thing while not getting ID'ed as a
    liability.
  </p>
  <p>
    Whatever kind of interests brings you to cyberpunk, use that to create a
    story engine, some situation rich enough to continually suggest stories that
    will drive your game forward in a commonly agreed upon direction.
  </p>
  <p>
    As you read through the rest of this chapter, talk about how the concepts
    might inform the story engine of your game. You'll know you have good game
    issues and character aspects when they become a story engine for your game.
  </p>
  <h3 id="orientation">Orientation</h3>
  <p>
    If there's a dark center to a cyberpunk game its corporations and the
    oppressive domination they represent. Corporations are not simply powerful,
    they are the very structure of power in the same way hereditary nobility was
    the structure of power in the past. Everyone has a relationship to
    corporations and orientation is simply asking a character "what is your
    relationship to corporations?"
  </p>
  <p>
    I'll describe three possible orientations: Sponsored, Revolutionary, or On
    the Edge. There's no need to pick just one; some people have very
    complicated relationships to power.
  </p>
  <h4 id="using-orientation">Using Orientation</h4>
  <p>
    Orientation significantly shapes a game. You can use it to establish
    conflicts and tension. For example, individual characters have an
    orientation, but the player characters as a group might have a different
    one, however temporarily, that not all the PCs are comfortable with. Groups,
    factions, or even neighborhoods a character is associated with might also
    have a clashing orientation, or change their orientation during the game.
  </p>
  <h4 id="sponsored">Sponsored</h4>
  <p>
    Sponsored means you are supported by someone of great power and influence.
    The classic example is being employed by a major corporation, but you might
    also be the personal retainer of a powerful individual or under the
    protection of a free AI.
  </p>
  <p>
    Being sponsored gives you access to gear, intel, and support both financial
    and political, but at a price. Never forget you are just another tool and
    everything depends on being of value to your sponsor. All kinds of things
    will threaten your position. Office rivalries can turn every day into a
    competition. You will have to carry the weight of all the dirty tasks you
    do.
  </p>
  <p>
    Sponsorship is not a guarantee and it's especially not guaranteed to last
    forever. Maybe you're rival will final sabotage your position, maybe you'll
    learn something that makes you a threat to your sponsor, or maybe they'll
    just get tired of seeing your face.
  </p>
  <p>
    If your character has a sponsor, ask yourself: "How far will your character
    go to secure their position?" "How high will they rise, and how long can
    they hold on?" "What will they do if they lose their sweet deal?"
  </p>
  <h4 id="revolutionary">Revolutionary</h4>
  <p>
    Instead of being a corporate tool you actively fights the system. You might
    be a nomad, outcast, criminal, anarchist, or even full-fledged revolutionary
    who's declared war on your corporate overlords.
  </p>
  <p>
    You face more than just the confines of the modern surveillance culture, but
    also the masses of corporate employees more concerned with their own
    position then the truth. You'll likely be a labeled a terrorist, perhaps
    with good reason, and you'll be a constant target; hounded from safehouse to
    safehouse. At least you have their attention.
  </p>
  <p>
    "How far will you go to bring the system down? What will you give up, and
    who will you abandon?" "What will you do when they catch up to you?"
  </p>
  <h4 id="on-the-edge">On the Edge</h4>
  <p>
    Maybe you're not so much into responsibility or ideology, maybe you just
    want to do your own thing. On the Edge describes an ambivalent orientation
    towards the corporate power structure. Not a part of system and not actively
    against it. This is a common stance for freelancers selling their skills to
    the highest bidder. You might revel in the relative freedom but you'll find
    themselves being used as a pawn in the power struggles of others; Always
    chasing the next deal, hopefully one step ahead of disaster. If you find
    this orientation attractive you should ask yourself, "How long can you
    survive on the edge?"
  </p>
  <h3 id="theme">Theme</h3>
  <p>
    To make a theme ask yourself a grand question like "is there a soul?" Your
    game is the answer to that question. The point of a theme is to give your
    game something to be about that's not just oddly violent odd jobs. It gives
    you a goal to align play and a touchstone to return to if your game wanders
    off into wilds.
  </p>
  <p>
    You can open-endedly explore a thematic question, but also consider
    definitely answering the question and using your game to explore how that
    answer affects everything. For example: Yes, there is a measurable, but
    unidentifiable factor in the brain that some people choose to label a soul.
    Do you care? What if you found out you're missing that particular factor?
    Does that factor survive if your memories are copied to cybernetic brain?
  </p>
  <p>
    Characters don't have to interact directly with a theme, but it is more
    interesting if they have a stake in it.
  </p>
  <p>
    Cyberpunk is rich in potential themes, especially ones that intersect with
    technology; here's three places to start.
  </p>
  <h4 id="technology-and-humanity">Technology and Humanity</h4>
  <p>
    We are steeped in technology and a deep understanding of the mind. We this
    technology lets us share our thoughts and construct artificial
    intelligences. Given that, what does it mean to be a human? Is there
    anything special about us? When every device we smart enough to make
    decisions for us; what's the point of us?
  </p>
  <p>
    Is there a soul? A ghost? If you copy all your memories into a device is
    that device you? Will it have a consciousness? Will it be your
    consciousness?
  </p>
  <h4 id="technology-and-alienation">Technology and Alienation</h4>
  <p>
    We can create virtual reality indistinguishable from true reality, and make
    far more attractive to our brains. We pipe these virtual worlds directly
    into our brains so, does true reality matter anymore? Do we need
    relationships with real humans or are AIs enough? The entire concept of
    public and citizenship have disappeared, do we miss it?
  </p>
  <p>
    Can an AI be programmed with empathy? And if it can, can it fall in love
    with a human? And if it does can a human truly return that love? How can it
    be a true relationship when you can turn off your partner whenever you want?
    What do you do when the AI that you have fallen in love with leaves you for
    someone more interesting?
  </p>
  <h4 id="technology-and-society">Technology and Society</h4>
  <p>
    When just about everyone who matters has what amounts to a tracking device
    and marketing research system implanted in there head, does privacy exist
    anymore? If not, do you miss it? Has technology overwhelmed personal
    freedom? What devious things do corporations do with this window directly
    into the brains of millions of people and is there anyone or anything to
    stop them?
  </p>
  <p>
    Advancements in AI mean we are freed from manual labor and even most service
    jobs, but what about all the people who used to do those things? What
    happened to them?
  </p>
  <p>
    Wealth inequality doesn't even begin to describe the state of the world
    anymore. The very wealthy live as isolated and protected as a hidden Shaolin
    Monastery. Then there's the lucky few clinging to the life line of their
    corp job. And finally, there's the whole masses of people who are
    unemployable and obsolete, or who don't want to participate in the system.
    Where do they fit in and how do they survive?
  </p>
  <p>
    Is government still relevant? Does it still even exist or do people swear
    their allegiance to a corporation? If given the technology, will people
    self-organize into tribes? If they do will corporations feel threatened and
    take counter measures? If you trade your freedom to the corporations for
    security is what you get worth it?
  </p>
  <p>
    If there is no government or public education, or public science, then how
    can we know what's going on? Media is a corporate business and the Net is
    full of data, but lacking in real information.
  </p>
</div>
