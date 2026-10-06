<script>
  import '../../../global.css';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>tongyu ~ tambourine story</title>
  <meta property="og:title" content="tongyu ~ tambourine story" />
  <meta property="og:image" content="/ogimg.png" />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="page">
  <img class="hero" src="/work/tambourine-story/hero.webp" alt="Tambourine Story — a story-driven rhythm game you play by shaking your iPad" />

  <div class="content">
    <p class="back"><a href="/work">&larr; Back to portfolio</a></p>

    <p class="org">Apple WWDC Swift Student Challenge &middot; Distinguished Winner</p>
    <h2>Tambourine Story</h2>

    <div class="info-grid">
      <div class="meta">
        <p><strong>Project duration:</strong> Dec 2023–Feb 2024</p>

        <div class="meta-group">
          <p><strong>Platform:</strong> iPadOS</p>
          <p><strong>Tools:</strong> Swift, SwiftUI, Clip Studio Paint, Blender</p>
          <p><strong>Roles:</strong> Concept, game design, art, music, engineering</p>
          <p><strong>Team size:</strong> 1</p>
        </div>

        <div class="meta-group">
          <p><strong>Source code:</strong> <a href="https://github.com/bucketfish/tambourine-story" target="_blank" rel="noopener">GitHub</a></p>
        </div>
      </div>

      <div class="overview">
        <p><strong>Overview</strong></p>
        <p>Tambourine Story was created for Swift Student Challenge 2024. It's a rhythm game — but instead of tapping the screen like most rhythm games, it asks the user to shake the iPad like a real-life tambourine.</p>
        <p>This game is my tribute to music and collaboration — how each and every one of us is able to be a part of something greater than ourselves, through collaborative art, through playing together.</p>
        <p>The project won Distinguished Winner in Swift Student Challenge 2024 and was featured on various platforms, such as <a href="https://www.channelnewsasia.com/cna-insider/ground-up/love-video-games-child-led-student-top-award-apple-hq-america-4647466" target="_blank">ChannelNewsAsia</a>, <a href="https://elle.com.sg/life-culture/asian-students-apple-swift-challenge-2024/" target="_blank">ELLE Singapore</a>, and the <a href="https://apps.apple.com/sg/story/id1748957781" target="_blank">App Store</a>.</p>
        <p>The project was also <a href="https://esquiresg.com/apples-tim-cook-meets-with-regional-game-devs/" target="_blank">presented to Tim Cook</a> (then-CEO of Apple) when he visited Singapore in April 2024, as well as to the public at Apple Developer Center Singapore.</p>
      </div>
    </div>

    <figure>
      <img class="overview-img" src="/work/tambourine-story/overview.webp" alt="Tambourine Story gameplay overview" />
      <figcaption>Tim Cook, then-CEO of Apple, trying out Tambourine Story during his Singapore 2024 visit. (He was pretty good at it!)</figcaption>
    </figure>


    <div class="section">
      <p><strong>Key decisions</strong></p>
      <p><strong><em>An emotional story</em></strong> — the project was inspired by a personal experience. The story follows a little girl's journey of trying to join her brother's band, and the player shares her experience of being included in the practice session for the first time.</p>
      <p>A few years ago, I started a band with my friends, and the feeling of our first rehearsal was so wondrous that I wanted to recreate that feeling into an interactive experience. It was the feeling of being a part of something special, hearing the song come together for the first time, and I wanted to capture the human nature of yearning for arts and harmony.</p>
    </div>

    <figure class="trio">
      <div class="trio-images">
        <img src="/work/tambourine-story/storyboard-1.webp" alt="Storyboard panels for Tambourine Story" style="flex-grow: 1.33" />
        <img src="/work/tambourine-story/storyboard-2.webp" alt="More storyboard panels" style="flex-grow: 1.33" />
        <img src="/work/tambourine-story/storyboard-3.webp" alt="Final storyboard panels" style="flex-grow: 1.33" />
      </div>
      <figcaption>The storyline consists of the girl and her brother’s dialogue, as well as various props like her diary</figcaption>
    </figure>

    <div class="section">
      <p><strong><em>A physical game</em></strong> — I always believed that games had superpowers, being the only medium that the user could interact with. This led me to attempt to develop a game that transcended the screen into physical interactions: Tambourine Story needed the user to physically shake the iPad as a way to play the tambourine and interact with the game. This was inspired by Phyphox, an app we used in Physics lessons in school to record device motion. I learnt to use CoreMotion to detect physical motion and connected it to the gameplay.</p>
      <p>I also played with design decisions on how to portray the rhythm game element in a simple way, so that anyone can enjoy the story without needing a lot of skill.</p>
    </div>

    <figure class="trio">
      <div class="trio-images">
        <img src="/work/tambourine-story/gameplay-1.webp" alt="Gameplay — shaking the iPad to play tambourine" style="flex-grow: 1.57" />
        <img src="/work/tambourine-story/gameplay-2.webp" alt="Gameplay — visual feedback during performance" style="flex-grow: 1.82" />
        <img src="/work/tambourine-story/gameplay-3.webp" alt="Gameplay — another view" style="flex-grow: 1.46" />
      </div>
      <figcaption>Process of designing the physical gameplay, with a warning for players to let them know what to do</figcaption>
    </figure>

    <div class="section">
      <p><strong><em>An immersive environment</em></strong> —  I wanted to use art, music, and other assets to convey the heartwarming moment and emotion that was needed. The setting needed to be warm and welcoming, and I designed the music to crescendo to a grand finish that felt full and all-encompassing as the player neared the end of the story.</p>
      <p>I used GarageBand on Mac to compose the soundtrack and learnt Blender to design the tambourine in 3D, and drew an animating jumping girl to make it feel more playful.</p>
    </div>

    <figure class="pair">
      <img src="/work/tambourine-story/art-left.webp" alt="Initial version of the background" />
      <img src="/work/tambourine-story/art-right.webp" alt="Final version of the background, repainted" />
      <figcaption>Initial vs final version of the background, repainted to give a more comforting feeling</figcaption>
    </figure>

    <figure class="audio-figure">
      <div class="audio-stack">
        <audio controls preload="metadata" src="/work/tambourine-story/audio-first.mp3"></audio>
        <audio controls preload="metadata" src="/work/tambourine-story/audio-last.mp3"></audio>
      </div>
      <figcaption>The first vs the last song in the game, building up intensity and instruments to evoke a feeling of coming together</figcaption>
    </figure>

    <figure>
      <img class="jumping-girl" src="/work/tambourine-story/jumping-girl.gif" alt="Jumping girl animation" />
      <figcaption>The jumping girl animation that puts the whole scene together, inspired by a Thomas the Tank Engine lyric video — it keeps time so the player knows when to shake the tambourine</figcaption>
    </figure>

    <div class="section">
      <p><strong>Reflection</strong></p>
      <p>Tambourine Story was born out of multiple inspirations coming together at the right time, and I feel really satisfied with the way it all came together. There were several times where I almost gave up, where something in the model or in the code just would not work the way that I wanted it, but the Swift community in Singapore were super supportive, and we had group mini-hackathon sessions where we all worked on our project together and helped each other. That helped me power through and polish it to create something I was truly proud of.</p>
      <p>Overall, I’m really satisfied with how it came out and the innovative way it uses motion to extend games into real life too.</p>
    </div>

    <figure>
      <video class="cta-img" src="/work/tambourine-story/final.mp4" autoplay loop muted playsinline></video>
      <figcaption>The full gameplay experience</figcaption>
    </figure>

    <div class="section credits">
      <p>Thank you to the Swift in Singapore community for being so supportive, and thank you to Apple for all the opportunities I was given.</p>
    </div>

    <nav class="article-nav">
      <a href="/work">&larr; Back to portfolio</a>
      <span class="nav-sep">&middot;</span>
      <a href="/work/stardance">Next project: Stardance Challenge &rarr;</a>
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

figure img,
figure video {
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

/* -- audio -- */

.audio-figure {
  text-align: center;
}

.audio-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.audio-stack audio {
  max-width: 500px;
  width: 100%;
}

/* -- overview -- */

.overview-img {
  max-width: 600px;
  margin: 0 auto;
}

/* -- jumping girl gif -- */

.jumping-girl {
  max-width: 400px;
  margin: 0 auto;
}

.cta-img {
  max-width: 480px;
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
