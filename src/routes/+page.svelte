<script>
  import { Canvas } from '@threlte/core'
  import { AsciiRenderer } from '@threlte/extras'


  import { browser } from '$app/environment';
  import Scene from '$lib/components/Scene.svelte'
  import '../global.css';

  import { onMount, onDestroy } from 'svelte';

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
    <p class="subtitle">hello, i’m</p>
    <h1>tongyu!</h1>
    <ul>
    <li><p><a href="/games">i make games</a></p></li>
    <li><p><a href="/design">i draw & design</a></p></li>
    <li><p><a href="https://journal.tongyu.dev">i also have a journal</a></p></li>
    </ul>

    <ul>
    <li><p>i'm taking a gap year @ <a href="https://hackclub.com" target="_blank">hack club</a></p></li>
    <li><p>say hi at <a href="mailto:hello@tongyu.fish">hello@tongyu.fish!</a></p></li>
    </ul>
  </div>
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
  }

  .content {
    position: absolute;
    top: 35vh;
    left: 53vw;

    font-family: 'Optima';
  }

  h1 {
    font-size: 120px;
    padding-left: 42px;
  }

  p {
    margin: 0;
  }

  ul {
    padding-left: 22px;
    margin-top: 4px;
  }

  li {
    list-style-type: '> ';
  }

  p a {
    color: inherit;
    text-decoration: none;
  }

  p:hover a {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-thickness: 2px;
  }
</style>
