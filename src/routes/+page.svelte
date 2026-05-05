<script>
  import { Canvas } from '@threlte/core'
  import { AsciiRenderer } from '@threlte/extras'


  import { browser } from '$app/environment';
  import Scene from '$lib/components/Scene.svelte';
  import '../global.css';

  import { onMount, onDestroy } from 'svelte';

  import Footer from '$lib/components/Footer.svelte';

  let innerWidth = 0;
  let innerHeight = 0;

  let m = { x: 0.5, y: 0.5 };
  let target = { x: 0.5, y: 0.5 };

  function handleMousemove(event) {
    target.x = event.clientX / innerWidth;
    target.y = event.clientY / innerHeight;
  }

  let raf;
  function tick() {
    const ease = 0.005;

    m.x += (target.x - m.x) * ease;
    m.y += (target.y - m.y) * ease;

    raf = window.requestAnimationFrame(tick);
  }

  onMount(() => {
    if (!browser) return;
    raf = window.requestAnimationFrame(tick);
  });

  onDestroy(() => {
    if (!browser) return;
    cancelAnimationFrame(raf);
  });

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<main on:mousemove={handleMousemove}>
  <div class="background">
    <Canvas>
      <AsciiRenderer
        bgColor={'#00000000'}
        fgColor={'#69B7FF'}
        characters={' ¨ˆ`¨·¦‚›ª”;!7l«ƒZ%Ÿ' }
        options={{resolution: 0.09}}
        />

      <Scene mouse={m}/>
    </Canvas>
  </div>

  <div class="content">
    <p class="subtitle rest">hello, i’m</p>
    <h1>tongyu!</h1>
    <ul class="rest">
    <li><p><a href="/games">i make games</a></p></li>
    <li><p><a href="/design">i draw & design</a></p></li>
    <li><p><a href="https://journal.tongyu.dev">i also have a journal</a></p></li>
    </ul>

    <ul class="rest">
    <li><p>i'm taking a gap year @ <a href="https://hackclub.com" target="_blank">hack club</a></p></li>
    <li><p>say hi at <a href="mailto:hello@tongyu.fish">hello@tongyu.fish!</a></p></li>
    </ul>
  </div>

  <Footer />
</main>


<style>
  main {
    background-color: var(--light-blue);
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  .background {
    width: 100vw;
    height: 100vh;
    animation: scan-in 0.5s steps(24, end) 0.4s both;
  }

  .content {
    position: absolute;
    top: 35vh;
    left: 53vw;

    font-family: 'Optima';
  }

  .content h1 {
    animation: pop 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both;
  }

  .content :global(.rest) {
    opacity: 0;
    animation: fade-up 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .content > :global(.rest:nth-of-type(1)) { animation-delay: 0.45s; }
  .content > :global(.rest:nth-of-type(2)) { animation-delay: 0.57s; }
  .content > :global(.rest:nth-of-type(3)) { animation-delay: 0.69s; }

  main :global(footer) {
    animation: fade 0.3s ease-out 1.05s both;
  }

  @keyframes scan-in {
    from { clip-path: inset(0 0 100% 0); }
    to { clip-path: inset(0 0 0 0); }
  }

  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pop {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .background,
    .content h1,
    .content :global(.rest),
    main :global(footer) {
      animation: none;
      opacity: 1;
    }
  }

</style>
