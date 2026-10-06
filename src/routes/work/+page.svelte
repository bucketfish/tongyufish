<script>
  import '../../global.css';
  import Footer from '$lib/components/Footer.svelte';

  const cards = [
    {
      id: 'stardance',
      bg: '/work/stardance-bg.webp',
      logo: '/work/stardance-logo.webp',
      label: 'Web & design, Hack Club x NASA',
      alt: 'Stardance Challenge',
      href: '/work/stardance',
      desc: 'Hack Club\'s teen summer engineering challenge <strong>in collaboration with GitHub, NASA, AMD</strong>. 50k signups globally.',
      role: 'Part of small core team behind design and engineering.',
      date: 'May–Sep 2026',
    },
    {
      id: 'overglade',
      bg: '/work/overglade-bg.webp',
      logo: '/work/overglade-logo.webp',
      label: 'Solo, Singapore game jam',
      alt: 'Overglade',
      href: '/work/milkyway-overglade',
      desc: 'A gamified online challenge, 50 teens flying solo to Singapore, an <strong>augmented reality game x game jam</strong>.',
      role: 'Worked solo on design, engineering, event logistics.',
      date: 'Oct 2025–Mar 2026',
    },
    {
      id: 'tambourine',
      bg: '/work/tambourinestory-bg.webp',
      logo: '/work/tambourinestory-char.webp',
      hoverLogo: '/work/tambourine-story-logo.webp',
      label: 'iPad game, Apple award',
      alt: 'Tambourine Story',
      href: '/work/tambourine-story',
      tint: true,
      desc: 'A story-driven rhythm game you play by shaking your iPad.',
      role: 'Solo project, Apple WWDC Swift Student Challenge <strong>Distinguished Winner</strong>.',
      date: 'Dec 2023–Feb 2024',
    },
  ];

  let activeCard = $state(null);

  function handleCardClick(e, card) {
    if (!('ontouchstart' in window)) return;
    if (activeCard === card.id) return;
    e.preventDefault();
    activeCard = card.id;
  }
</script>

<svelte:head>
  <title>tongyu ~ portfolio</title>
  <meta property="og:title" content="tongyu ~ portfolio" />
  <meta property="og:image" content="/ogimg.png" />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="page">
  <header>
    <div class="title-block">
      <h2 class="line1">tongyu's</h2>
      <h2 class="line2">portfolio</h2>
    </div>
    <div class="subtitle">
      <p>Tongyu Jiang, she/they</p>
      <p>20, Singapore & LA</p>
    </div>
  </header>

  <main>
    <div class="cards">
      {#each cards as card}
        <a class="card card-{card.id}" class:active={activeCard === card.id} href={card.href} onclick={(e) => handleCardClick(e, card)}>
          <div class="card-inner" class:tint={card.tint} class:has-hover-logo={card.hoverLogo}>
            <img class="card-bg" src={card.bg} alt="" />
            <svg class="card-label" viewBox="0 0 251 517" aria-hidden="true">
              <path id="arc-{card.id}" d="M 24,134 A 65,65 0 0,1 227,134" fill="none" />
              <text>
                <textPath href="#arc-{card.id}" startOffset="50%" text-anchor="middle">{card.label}</textPath>
              </text>
            </svg>
            <img class="card-logo" src={card.logo} alt={card.alt} />
            {#if card.hoverLogo}
              <img class="card-logo card-hover-logo" src={card.hoverLogo} alt={card.alt} />
            {/if}
            <div class="card-overlay">
              <div class="overlay-content">
                <p>{@html card.desc}</p>
                <p>{@html card.role}</p>
                <p class="overlay-cta">Click to learn more →</p>
              </div>
              <p class="overlay-date">{card.date}</p>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <div class="bio">
      <div class="bio-text">
        <p>Hey, I'm Tongyu!</p>

        <p>I design and develop <strong>games</strong>, <strong>websites</strong>, and <strong>visual identities</strong>, then bring them to life through <strong>in-person events</strong> :)</p>

        <p>Previously, I worked at <a href="https://hackclub.com" target="_blank" rel="noopener">Hack Club</a>, designing programs in partnership with GitHub, NASA, and AMD. My work has also been recognized by Apple.</p>

        <p>I'm currently studying <strong>Cognitive Science at UCLA</strong>. Say hi at <a href="mailto:tongyu@ucla.edu">tongyu@ucla.edu</a>!</p>
      </div>

      <div class="bottom-links">
        <p><a href="/resume.pdf" target="_blank" rel="noopener">Here's my resume →</a></p>
        <p class="catalog">I also released a Steam game, designed jackets, and rebranded Hack Club's public-facing website!<br><a href="/work/all">See full work catalog here →</a></p>
      </div>
    </div>
  </main>

  <Footer />
</div>

<style>

.page {
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  padding: 48px min(3vw, 48px);
  overflow: hidden;
}

/* ── header ── */

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.title-block {
  line-height: 0.72;
}

.title-block h2 {
  font-size: min(100px, 7vw);
  margin: 0;
}

.line2 {
  padding-left: min(240px, 16vw);
}

.subtitle {
  text-align: right;
  padding-top: 12px;
  flex-shrink: 0;
}

/* ── main content ── */

main {
  display: flex;
  gap: 48px;
  align-items: flex-end;
}

/* ── cards ── */

.cards {
  display: flex;
  gap: 16px;
  flex-shrink: 1;
  align-items: flex-end;
}

.card {
  display: block;
  text-decoration: none;
  position: relative;
}

.card-inner {
  position: relative;
  height: min(64vh, 540px);
  aspect-ratio: 251 / 517;
  border-radius: 50% 50% 0 0 / 24.3% 24.3% 0 0;
  overflow: hidden;
  border: 2px solid var(--dark-blue);
  box-sizing: border-box;
}

.card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 75%;
}

.card-inner.tint .card-bg {
  /* opacity: 0.55; */
}

.card-inner.tint {
  background: #8ebdff;
}

.card-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-height: 45%;
  object-fit: contain;
  pointer-events: none;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.4));
  transition: top 0.35s ease, opacity 0.35s ease;
  z-index: 2;
}

.card-inner.tint .card-logo {
  width: 60%;
  max-height: 70%;
  top: 52%;
  object-fit: contain;
  filter: drop-shadow(0 4px 16px rgba(0,0,0,0.2));
}

/* ── hover logo swap ── */

.card-hover-logo {
  opacity: 0;
  transition: opacity 0.35s ease, top 0.35s ease;
}

.card:hover .card-hover-logo,
.card.active .card-hover-logo {
  opacity: 1;
}

.card:hover .has-hover-logo > .card-logo:not(.card-hover-logo),
.card.active .has-hover-logo > .card-logo:not(.card-hover-logo) {
  opacity: 0;
}

/* ── hover overlay ── */

.card-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30% 12% 12%;
  opacity: 0;
  transition: opacity 0.35s ease;
  color: #e9f5ff;
  text-align: center;
  font-size: 0.7em;
  line-height: 1.5;
}

.card:hover .card-overlay,
.card.active .card-overlay {
  opacity: 1;
}

.card:hover .card-logo,
.card.active .card-logo {
  top: 22%;
}

.card:hover .card-inner.tint .card-logo,
.card.active .card-inner.tint .card-logo {
  top: 18%;
}

.card:hover .card-label,
.card.active .card-label {
  opacity: 0;
}

.overlay-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overlay-content p {
  margin: 0 0 8px;
}

.overlay-cta {
  margin-top: 8px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.overlay-date {
  margin: 0;
  font-size: 0.85em;
  opacity: 0.8;
}

/* ── curved text label ── */

.card-label {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  transition: opacity 0.35s ease;
}

.card-label text {
  font-family: 'Optima', serif;
  font-size: 20px;
  font-weight: bold;
  fill: white;
}

/* ── bio ── */

.bio {
  display: flex;
  flex-direction: column;
  min-width: 280px;
  flex: 1;
  gap: 24px;
  padding-bottom: 0;
}

.bio-text {
  line-height: 1.5;
}

.bio-text p {
  margin: 0 0 12px;
}

.bio-text p:last-child {
  margin-bottom: 0;
}

.bio a {
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

.bio a:hover {
  text-decoration-style: wavy;
}

.bottom-links {
  text-align: right;
  font-size: 0.8em;
  line-height: 1.5;
  margin-top: auto;
}

.bottom-links p {
  margin: 0 0 4px;
}

/* ── footer ── */

.page :global(footer) {
  flex-shrink: 0;
}

/* ── responsive ── */

@media (max-width: 1200px) {
  .cards { gap: 12px; }
  .card-inner { height: min(56vh, 460px); }
  main { gap: 24px; }
}

@media (max-width: 960px) {
  .page {
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;
    overflow: visible;
    padding: 56px 24px 32px;
    justify-content: flex-start;
  }

  header {
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
  }

  .title-block {
    width: fit-content;
  }

  .title-block h2 { font-size: min(64px, 15vw); }
  .line2 { padding-left: min(80px, 18vw); }
  .subtitle { padding-top: 8px; }

  main {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }

  .cards {
    width: 100%;
    max-width: 640px;
    justify-content: center;
    gap: 10px;
    align-self: center;
  }

  .card {
    flex: 1;
    min-width: 0;
  }

  .card-inner {
    height: auto;
    width: 100%;
  }

  .bio {
    min-width: auto;
    max-width: 100%;
    padding-bottom: 0;
  }

  .bottom-links { text-align: left; }

  .page :global(footer) {
    position: relative;
  }

  .page :global(footer p::before),
  .page :global(footer p::after) {
    display: none;
  }
}

@media (max-width: 600px) {
  .page { padding: 48px 16px 24px; }

  .title-block h2 { font-size: min(52px, 14vw); }
  .line2 { padding-left: min(72px, 20vw); }

  .cards { gap: 8px; }
  .card-label text { font-size: 18px; }
  .card-overlay { font-size: 0.55em; padding: 35% 8% 8%; }

  .card.active .card-logo {
    opacity: 0;
  }
}

</style>
