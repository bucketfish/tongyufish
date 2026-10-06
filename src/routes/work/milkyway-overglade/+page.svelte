<script>
  import '../../../global.css';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>tongyu ~ milkyway & overglade</title>
  <meta property="og:title" content="tongyu ~ milkyway & overglade" />
  <meta property="og:image" content="/ogimg.png" />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="page">
  <img class="hero" src="/work/milkyway-overglade/hero.webp" alt="Milkyway & Overglade — an online qualification program leading to an in-person alternate reality game x game jam" />

  <div class="content">
    <p class="back"><a href="/work">&larr; Back to portfolio</a></p>

    <p class="org">Solo project at Hack Club</p>
    <h2>Milkyway & Overglade</h2>

    <div class="info-grid">
      <div class="meta">
        <p><strong>Project duration:</strong> Oct 2025–Feb 2026</p>

        <div class="meta-group">
          <p><strong>Platform:</strong> Web</p>
          <p><strong>Tools:</strong> Figma, Svelte, Godot, AI-assisted coding</p>
          <p><strong>Roles:</strong> Concept, branding, UI/UX, engineering, game design, logistics</p>
          <p><strong>Team size:</strong> 1</p>
        </div>

        <div class="meta-group">
          <p><strong>URL:</strong> <a href="https://milkyway.hackclub.com" target="_blank" rel="noopener">milkyway.hackclub.com</a>, <a href="https://overglade.hackclub.com" target="_blank" rel="noopener">overglade.hackclub.com</a></p>
          <p><strong>Source code:</strong> <a href="https://github.com/hackclub/milkyway" target="_blank" rel="noopener">Milkyway on GitHub</a>, <a href="https://github.com/hackclub/overglade" target="_blank" rel="noopener">Overglade on GitHub</a></p>
          <p><strong>User base:</strong> ~4000 teen signups, 50 in-person participants</p>
        </div>
      </div>

      <div class="overview">
        <p><strong>Overview</strong></p>
        <p>Milkyway and Overglade were two connected Hack Club programs.</p>
        <p>In Milkyway, teens participate in <strong>online game development challenges</strong> and publish games from scratch. They earned digital coins for working on their projects, which can be used to customize a digital house and be used to <strong>redeem real-life rewards</strong>.</p>
        <p>The grand prize was a ticket to Overglade, an <strong>in-person game jam in Singapore</strong>. 50 teens from 18 countries qualified and made games in the span of three days. Overglade itself was designed to feel like playing a huge game, with giant dice, balloon weapons, and NPC sidequests.</p>
        <p>It's one of the largest solo Hack Club programs run, and one of the in-person programs with the best feedback from participants.</p>
      </div>
    </div>

    <div class="section">
      <p><strong>My role</strong></p>
      <p>I led both projects from end-to-end, developing the <strong>brand and visual identity, the Milkyway platform, as well as the in-person event logistics</strong>.</p>
      <p>I had help from community volunteers who worked on project review, fulfilment of prizes, and coworkers from Hack Club also helped to staff the event and manage participants in Singapore. For the most part, though, I was juggling every part at once.</p>
    </div>

    <div class="section">
      <p><strong>Key decisions</strong></p>
      <p><strong><em>A playful platform</em></strong> — inspired by social games I played online, I wanted the Milkyway platform to feel customizable and playful, like a game in and of itself. I themed the site around an axolotl mascot named Mimi, and gave each user customizable rooms that they can improve as they worked on their game.</p>
      <p>Users can also add each others as friends, view other profiles like a neighborhood, and leave sticky notes on each others' houses to encourage them. It was really sweet to read the community interactions.</p>
    </div>

    <figure class="trio">
      <div class="trio-images">
        <img src="/work/milkyway-overglade/house-customization.webp" alt="Customizable house" style="flex-grow: 1.39" />
        <img src="/work/milkyway-overglade/visiting-friends.webp" alt="Visiting friends" style="flex-grow: 1.40" />
        <img src="/work/milkyway-overglade/mimi-shop.webp" alt="Mimi's shop" style="flex-grow: 1.38" />
      </div>
      <figcaption>Various playful website features: customizable house, visiting friends, Mimi's shop for users to redeem prizes</figcaption>
    </figure>

    <div class="section">
      <p><strong><em>Challenges that inspire</em></strong> — I didn't want the participants to spend their time grinding and making uninspired projects. I also knew that it was hard to just <em>lock in</em> on a project if you didn't have an idea. To counter this, I added a randomizer Roulette minigame to the Milkyway platform, researching game types to break them down. Roulette had 3 rounds forcing the player to combine three different elements into one game. There was Gameplay, Camera Angle, and Setting.</p>
    </div>

    <figure class="pair">
      <img src="/work/milkyway-overglade/roulette-left.webp" alt="Roulette minigame — challenge project type selection" />
      <img src="/work/milkyway-overglade/roulette-right.webp" alt="Roulette minigame — spin wheels for game constraints" />
      <figcaption>Choose a challenge project type, then spin wheels to determine the constraints of the game</figcaption>
    </figure>

    <div class="section">
      <p><strong><em>A game jam in a game</em></strong> — the premise of the game jam was an alternate reality game experience, as if the event was a giant game that you were participating in. I brainstormed for a long time on how to integrate this concept into an event where participants were still motivated to make something and ship a game, and researched other alternate reality games for inspiration. My favorite was Reality Ends Here by USC, which had challenge elements that dictated the direction of projects created.</p>
      <p>I made quest papers with open-ended creative challenges that teams could integrate into their projects, and we hid them throughout the venue for teams to find — I also wanted to emphasize the special physical aspects of how we can come together in person. A final "boss fight" sequence involved a giant inflatable dice and inflatable weapons with participants whacking staff members for points. The execution wasn't perfect — it still felt more gimmicky than immersive — but the reception was amazing, and the participants enjoyed it nonetheless.</p>
    </div>

    <figure class="trio">
      <div class="trio-images">
        <img src="/work/milkyway-overglade/gameplay-world.webp" alt="Quest papers hidden around the venue" style="flex-grow: 1.33" />
        <img src="/work/milkyway-overglade/gameplay-quest.webp" alt="Quest papers" style="flex-grow: 0.68" />
        <img src="/work/milkyway-overglade/gameplay-bossfight.webp" alt="Boss fight sequence" style="flex-grow: 1.64" />
      </div>
      <figcaption>Gameplay elements in Overglade.</figcaption>
    </figure>

    <div class="section">
      <p><strong>Other features</strong></p>
      <p>The platform Milkyway had a variety of gamification elements that encouraged participation, and Overglade's highlight was a beach barbecue with the sunset. My overall goal was to make it feel as fun as possible, almost like its own community, an alternate universe you could slip into for a while where everyone loved creating.</p>
    </div>

    <figure class="trio">
      <div class="trio-images">
        <video src="/work/milkyway-overglade/landing-animation.webm" autoplay loop muted playsinline style="flex-grow: 1.77"></video>
        <img src="/work/milkyway-overglade/referral-system.webp" alt="Referral system with game-like interface" style="flex-grow: 1.12" />
        <img src="/work/milkyway-overglade/rainbow-bridge.webp" alt="Pre-event rainbow bridge quest" style="flex-grow: 1.43" />
      </div>
      <figcaption>1. A playful introduction animation on the Milkyway landing page that I drew.<br>2. The referral system drove signups with a game-like interface.<br>3. A pre-event quest during Overglade had participants hunting for images that formed a "rainbow bridge" to get to the Overglade world.</figcaption>
    </figure>

    <figure class="trio">
      <div class="trio-images">
        <img src="/work/milkyway-overglade/beach-bbq.webp" alt="Beach barbecue at sunset" style="flex-grow: 1.66" />
        <img src="/work/milkyway-overglade/karaoke.webp" alt="Spontaneous karaoke sessions" style="flex-grow: 1.79" />
        <img src="/work/milkyway-overglade/project-showcase.webp" alt="Project showcase at the end of the game jam" style="flex-grow: 1.77" />
      </div>
      <figcaption>1. A beach barbeque and long conversations with Zach, the founder of Hack Club.<br>2. Spontaneous karaoke sessions that happened almost every night.<br>3. Project showcase at the end of the game jam. There were some really incredible ones!</figcaption>
    </figure>

    <div class="section">
      <p><strong>Reflection</strong></p>
      <p>Milkyway and Overglade gave me a huge sense of accomplishment as it was the largest project I've led a team to complete. The process was arduous and difficult — the weeks before the in-person event, I'd work non-stop for 12-14 hours to finalize all the details, flesh out the in-person game, plan the logistics — because I loved it so much and I wanted it to be the absolute best that it could be, for myself and for the participants. It was one of the most intense and passionate things I'd ever done, and it was nothing short of exhilarating.</p>
    </div>

    <figure class="slack-stack">
      <img src="/work/milkyway-overglade/slack-1.webp" alt="Appreciation posts from participants" />
      <img src="/work/milkyway-overglade/slack-2.webp" alt="More appreciation posts" />
      <img src="/work/milkyway-overglade/slack-3.webp" alt="More appreciation posts" />
      <img src="/work/milkyway-overglade/slack-4.webp" alt="More appreciation posts" />
      <figcaption>There were so many appreciation posts in a public Slack channel that other members of the community started complaining about it</figcaption>
    </figure>

    <figure>
      <img class="group-photo" src="/work/milkyway-overglade/group-photo.webp" alt="Group picture with the thank-you zine" />
      <figcaption>And a final group picture with the thank-you zine that they printed for me :)</figcaption>
    </figure>

    <div class="section credits">
      <p>Thank you to Genr, Markalmax, Chris, Logan, Deltea, Irtaza, Lopa, and countless other Milkyway volunteers who contributed to the site. And my Overglade staff team: RenRan, Olive, Cinders, Ara, Darlene, Clay, Kin, Paolo, Nimit, Owais, Emma, and all those at Hack Club who helped or supported me in any way &lt;3</p>
      <p>Visit <a href="https://milkyway.hackclub.com" target="_blank" rel="noopener">milkyway.hackclub.com</a> and <a href="https://overglade.hackclub.com" target="_blank" rel="noopener">overglade.hackclub.com</a> to view the platforms in action :)</p>
    </div>

    <nav class="article-nav">
      <a href="/work">&larr; Back to portfolio</a>
      <span class="nav-sep">&middot;</span>
      <a href="/work/tambourine-story">Next project: Tambourine Story &rarr;</a>
    </nav>
  </div>

  <Footer />
</div>

<style>

.page {
  position: relative;
}

/* -- hero -- */

.hero {
  display: block;
  width: 100%;
  height: auto;
}

/* -- content -- */

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 32px 32px;
}

.back {
  margin: -26px 0 24px;
  position: relative;
  z-index: 1;
}

.back a {
  color: var(--dark-blue);
  text-decoration: none;
  font-weight: bold;
  border: 2px solid var(--dark-blue);
  border-radius: 43px;
  padding: 10px 24px;
  display: inline-block;
  background: var(--light-blue);
}

.back a:hover {
  background: var(--dark-blue);
  color: var(--light-blue);
}

.org {
  font-weight: bold;
  margin: 0 0 4px;
}

h2 {
  margin: 0 0 24px;
}

/* -- info grid -- */

.info-grid {
  display: grid;
  grid-template-columns: 345px 1fr;
  gap: 32px;
  margin-bottom: 24px;
}

.meta p {
  margin: 0 0 2px;
}

.meta-group {
  margin-top: 16px;
}

.meta-group p {
  margin: 0 0 2px;
}

.overview p {
  margin: 0 0 14px;
  text-align: justify;
}

.overview p:first-child {
  font-weight: bold;
}

/* -- sections -- */

.section {
  margin-bottom: 28px;
  line-height: 1.5;
  text-align: justify;
}

.section p {
  margin: 0 0 14px;
}

.credits {
  margin-top: 12px;
}

/* -- figures -- */

figure {
  margin: 0 0 32px;
}

figure img {
  display: block;
  width: 100%;
  height: auto;
}

figcaption {
  font-style: italic;
  font-size: 0.9em;
  text-align: center;
  margin-top: 10px;
  padding: 0 32px;
}

figure.pair {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

figure.pair img {
  flex: 1 1 0;
  min-width: 0;
  width: 0;
  object-fit: cover;
}

figure.pair figcaption {
  flex-basis: 100%;
}

figure.trio .trio-images {
  display: flex;
  gap: 8px;
}

figure.trio img,
figure.trio video {
  flex-basis: 0;
  min-width: 0;
  height: auto;
}

/* -- slack stack -- */

.slack-stack {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.slack-stack img {
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
}

.group-photo {
  max-width: 730px;
  margin: 0 auto;
}

/* -- links -- */

.content a {
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

.content a:hover {
  text-decoration-style: wavy;
}

.back a {
  text-decoration: none;
}

/* -- article nav -- */

.article-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  font-size: 0.85em;
}

.article-nav a {
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

.article-nav a:hover {
  text-decoration-style: wavy;
}

.nav-sep {
  opacity: 0.5;
}

/* -- footer -- */

.page :global(footer) {
  position: relative;
}

/* -- responsive -- */

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  figure.pair img {
    flex: 1 1 100%;
  }

  figure.trio .trio-images {
    flex-direction: column;
  }

  .back a {
    font-size: 0.9em;
    padding: 8px 16px;
  }

  .article-nav {
    flex-direction: column;
    gap: 4px;
  }

  .nav-sep { display: none; }

  .page :global(footer p::before),
  .page :global(footer p::after) {
    display: none;
  }
}

</style>
