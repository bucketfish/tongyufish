<script>
  import '../../../global.css';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>tongyu ~ stardance challenge</title>
  <meta property="og:title" content="tongyu ~ stardance challenge" />
  <meta property="og:image" content="/ogimg.png" />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="page">
  <img class="hero" src="/work/stardance/hero.webp" alt="Stardance Challenge — Hack Club's summer engineering challenge in partnership with NASA, AMD, GitHub" />

  <div class="content">
    <p class="back"><a href="/work">&larr; Back to portfolio</a></p>

    <p class="org">Hack Club in partnership with NASA, AMD, GitHub</p>
    <h2>Stardance Challenge</h2>

    <div class="info-grid">
      <div class="meta">
        <p><strong>Project duration:</strong> May–Sep 2026</p>

        <div class="meta-group">
          <p><strong>Platform:</strong> Web</p>
          <p><strong>Tools:</strong> Figma, Ruby on Rails, Postgres, AI-assisted coding</p>
          <p><strong>Roles:</strong> Branding, UI/UX, engineering</p>
          <p><strong>Team size:</strong> ~10</p>
        </div>

        <div class="meta-group">
          <p><strong>URL:</strong> <a href="https://stardance.hackclub.com" target="_blank" rel="noopener">stardance.hackclub.com</a></p>
          <p><strong>Source code:</strong> <a href="https://github.com/hackclub/stardance" target="_blank" rel="noopener">GitHub</a></p>
          <p><strong>User base:</strong> ~50,000 teen signups as of September 2026</p>
        </div>
      </div>

      <div class="overview">
        <p><strong>Overview</strong></p>
        <p>Stardance Challenge is Hack Club's summer engineering challenge for teens, run in partnership with NASA, AMD, and GitHub. Participants can build software or hardware projects and submit them in exchange for prizes, and are also encouraged to upload and document their process to share with other participants.</p>
        <p>Stardance Challenge launched on June 1, 2026, and runs through October, with ~50,000 teen signups as of September 2026 (when I concluded my gap year and left the team.)</p>
      </div>
    </div>

    <div class="section">
      <p><strong>My role</strong></p>
      <p>During my gap year at Hack Club, I was one of the two core <strong>designers</strong> on the team, working on <strong>branding and UI/UX for the platform</strong>. I co-led the brand identity and the landing page, and also designed most of the core onboarding and social-media-inspired user flow.</p>
      <p>I was also a part of the small core <strong>engineering</strong> team and implemented most of the onboarding flow, as well as additional platform features and fixes post-launch, focusing on increasing peer-referred signups and program retention.</p>
      <p>Our team built in public, with our internal communication on a public Slack channel for the Hack Club community, so that community members could follow along and learn from how we worked.</p>
    </div>

    <div class="section">
      <p><strong>Key decisions</strong></p>
      <p><strong><em>A collaborative logo</em></strong> — one of the first key decisions we had to make was creating the logo. The other designer and I independently came up with several designs, asked the community for feedback, then combined our best ideas, trading the file back and forth to create a logo that we were proud of.</p>
      <p>Right before finalizing it, I added a face and limbs on a whim, and the Starling — the mascot for Stardance — was born! My co-designer then proceeded to spin-off the Starling for various key pieces of art that added to the playfulness and approachability of the site.</p>
    </div>

    <figure>
      <img src="/work/stardance/logo-concepts.webp" alt="Logo concept iterations — individual concepts from both designers, and the final combined logo design" />
      <figcaption>Our individual concepts, and the final combined logo design</figcaption>
    </figure>

    <div class="section">
      <p><strong><em>A trustworthy landing page</em></strong> — as we began work on the landing page, I realised that the main reason why most teens don't join Hack Club (the same reason that stopped me from joining when I first found it) was the feeling that Hack Club programs were too good to be true. How could we make a "get free things!!" program sound legitimate?</p>
      <p>The page needed to establish credibility quickly. We decided to place our partner logos front and center, create a dedicated section for our sponsors and donors, as well as include numbers and statistics from previous iterations of the program.</p>
    </div>

    <figure class="pair">
      <img src="/work/stardance/landing-left.webp" alt="Stardance landing page — hero section" />
      <img src="/work/stardance/landing-right.webp" alt="Stardance landing page — credibility section with partner logos and statistics" />
      <figcaption>Credibility-establishing features on the landing page</figcaption>
    </figure>

    <div class="section">
      <p><strong><em>A platform that bustles with life</em></strong> — when brainstorming the platform UI, I realised that what makes me the most motivated and creative is when I feel inspired by what others make. There was also the appeal of doomscrolling that could keep people on the platform and inspired, as well as the dopamine hit from receiving likes/comments that would encourage participants to keep working on their projects.</p>
      <p>As I started designing, I modeled the UI after Twitter(X)/Bluesky. I created a home feed with like/comment/repost features on posts, a large and easy textbox for writing and posting, as well as notification tabs and profile customization. After launch, we kept modifying and reducing friction to increase user retention, adding keyboard shortcuts and juicy animations and badge notifications.</p>
    </div>

    <figure class="pair">
      <img src="/work/stardance/platform-left.webp" alt="Stardance platform — dark UI with feed and notifications" />
      <img src="/work/stardance/platform-right.webp" alt="Stardance platform — project page with customization" />
      <figcaption>The Notifications tab kept you updated when other participants viewed your work, and the ability to customize your project pages made you feel more attached to them</figcaption>
    </figure>

    <div class="section">
      <p><strong>Other features</strong></p>
      <p>We also spent countless hours improving the onboarding flow, adding campaigns and streaks and minigames and referral raffles to increase signups. I hadn't realized just how many features we added in the span of 3-4 months as a tiny team, but the small team size and independence meant that we were very agile and could prototype, iterate, and ship in the matter of days. Here are a few snapshots of other features I worked on:</p>
    </div>

    <figure class="trio">
      <div class="trio-images">
        <img src="/work/stardance/feature-raffle.webp" alt="GPU raffle feature" style="flex-grow: 1.38" />
        <img src="/work/stardance/feature-onboarding.webp" alt="Onboarding flow" style="flex-grow: 1.40" />
        <img src="/work/stardance/feature-poster.webp" alt="Printed posters" style="flex-grow: 0.77" />
      </div>
      <figcaption>1. A GPU raffle which encouraged users to refer their friends, as well as a corresponding referral fraud checking system.<br>2. An onboarding flow that matched users to their skill levels and preferences to show them relevant tutorials and projects.<br>3. Posters that were mailed to thousands of schools.</figcaption>
    </figure>

    <div class="section">
      <p><strong>Reflection</strong></p>
      <p>Working on Stardance Challenge was incredibly fun and fulfilling, and there are so many areas of it that I have not been able to cover in-depth. I learnt to work in a larger team, to organize my code and build upon other people's code. I learnt to navigate constraints set by our partners, but also to create a new design language from scratch and get over the intimidating blank page.</p>
    </div>

    <figure>
      <img class="cta-img" src="/work/stardance/cta.webp" alt="Make this summer count — final call-to-action on the landing page" />
      <figcaption>A cheeky message I added in the final call-to-action on the landing page. What else are you gonna do? — I can't imagine having spent my summer doing anything else.</figcaption>
    </figure>

    <div class="section credits">
      <p>Built with Olive, Kai Ling, Kartikey, Max, and the rest of the Stardance team at Hack Club. Thank you for an unforgettable summer.</p>
      <p>Visit <a href="https://stardance.hackclub.com" target="_blank" rel="noopener">stardance.hackclub.com</a> to see it in action :)</p>
    </div>

    <nav class="article-nav">
      <a href="/work">&larr; Back to portfolio</a>
      <span class="nav-sep">&middot;</span>
      <a href="/work/milkyway-overglade">Next project: Milkyway & Overglade &rarr;</a>
    </nav>
  </div>

  <Footer />
</div>

<style>

.page {
  position: relative;
}

/* ── hero ── */

.hero {
  display: block;
  width: 100%;
  height: auto;
}

/* ── content ── */

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

/* ── info grid ── */

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

/* ── sections ── */

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

/* ── figures ── */

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

figure.trio img {
  flex-basis: 0;
  min-width: 0;
  height: auto;
}

.cta-img {
  max-width: 480px;
  margin: 0 auto;
}

/* ── links ── */

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

/* ── article nav ── */

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

/* ── footer ── */

.page :global(footer) {
  position: relative;
}

/* ── responsive ── */

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
