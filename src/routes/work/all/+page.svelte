<script>
  import '../../../global.css';

  let { data } = $props();

  let activeTag = $state(null);
  let activeColl = $state(null);
  let open = $state(null);
  let limit = $state(12);

  const filtered = $derived(
    data.items.filter(i =>
      (!activeTag || i.tags.includes(activeTag)) &&
      (!activeColl || i.collection === activeColl)
    )
  );

  const shown = $derived(filtered.slice(0, limit));
  const hasMore = $derived(limit < filtered.length);

  $effect(() => {
    activeTag; activeColl;
    limit = 12;
  });

  function loadMore(node) {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) limit += 12;
    }, { rootMargin: '400px' });
    obs.observe(node);
    return { destroy: () => obs.disconnect() };
  }

  const siblings = $derived(
    open?.collection
      ? data.items.filter(i => i.collection === open.collection && i.id !== open.id)
      : []
  );

  function fmtDate(d) {
    if (!d) return null;
    const [y, m] = d.split('-');
    const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    return `${months[parseInt(m, 10) - 1]} ${y}`;
  }

  function close() {
    open = null;
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
  }
</script>

<svelte:head>
  <title>tongyu ~ portfolio</title>
  <meta property="og:title" content="tongyu ~ portfolio" />
  <meta property="og:image" content="/ogimg.png" />
  <meta property="og:type" content="website" />
</svelte:head>

<svelte:window onkeydown={onKey} />

<div id="intro">
<p class="nav-back" style="text-align: left"><a href="/work">&larr; back to work</a></p>
<h2>tongyu's portfolio</h2>
<div class="personal-info">
<p>design, illustration, games, websites</p>
<p class="flex-div">·</p>
<p>los angeles & singapore</p>
<p class="flex-div">·</p>
<p><a href="mailto:hi@tongyu.fish" target="_blank">hi@tongyu.fish</a></p>
</div>
<p class="solo-disclaimer">projects are solo unless otherwise specified :)</p>
</div>

<nav>
  <button class:on={!activeTag} onclick={() => (activeTag = null)}>all types</button>
  {#each data.tags as tag}
    <button class:on={activeTag === tag} onclick={() => (activeTag = activeTag === tag ? null : tag)}>{tag}</button>
  {/each}
</nav>

<main>
  {#each shown as item (item.id)}
    <button class="item" class:star={item.modifiers.includes('star')} onclick={() => (open = item)}>

      {#if item.video}
        <video src={item.src} class={[...item.modifiers, ...item.tags].join(' ')} muted loop autoplay playsinline />
      {:else}
        <img src={item.thumb ?? item.src} alt={item.title} loading="lazy" decoding="async" class={[...item.modifiers, ...item.tags].join(' ')} />
      {/if}

      <p class="title">{item.title}</p>
      {#if item.credit}<p class="credit">{item.credit}</p>{/if}
      {#if item.link}<p class="link">{item.link}</p>{/if}
      {#if item.collectionName}<p class="collection">{item.collectionName}</p>{/if}

    </button>
  {/each}
</main>

{#if hasMore}
  <div class="sentinel" use:loadMore></div>
{/if}

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <dialog open onclick={close}>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="inner" onclick={(e) => e.stopPropagation()}>

      <div class="hero">
        {#if open.video}
          <video src={open.src} muted loop autoplay playsinline />
        {:else}
          <img src={open.src} alt={open.title} />
        {/if}
      </div>

      <div class="details">
        <h3 class="dialog-title">{open.title}</h3>

        <div class="meta">
          {#if open.collectionName}<span class="meta-collection">{open.collectionName}</span>{/if}
          {#if fmtDate(open.date)}<span class="meta-date">{fmtDate(open.date)}</span>{/if}
        </div>

        {#if open.tags.length}
          <div class="tags">
            {#each open.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        {/if}

        {#if open.credit}
          <p class="detail-credit">{open.credit}</p>
        {/if}

        {#if open.link}
          <p class="detail-link">
            <a href="https://{open.link}" target="_blank" rel="noopener">{open.link}</a>
          </p>
        {/if}

        {#if open.note}
          <div class="note">{open.note}</div>
        {/if}
      </div>

      {#if open.images.length > 1}
        <div class="series">
          {#each open.images as img, i (img.src)}
            {#if i > 0}
              <div class="series-item">
                {#if img.video}
                  <video src={img.src} muted loop autoplay playsinline />
                {:else}
                  <img src={img.src} alt={img.caption ?? open.title} />
                {/if}
                {#if img.caption}<p class="caption">{img.caption}</p>{/if}
              </div>
            {/if}
          {/each}
        </div>
      {/if}

      {#if siblings.length}
        <div class="siblings">
          <p class="siblings-label">more from {open.collectionName}</p>
          <div class="siblings-grid">
            {#each siblings as s (s.id)}
              <button class="sibling" onclick={() => (open = s)}>
                {#if s.video}
                  <video src={s.src} muted loop autoplay playsinline />
                {:else}
                  <img src={s.src} alt={s.title} loading="lazy" />
                {/if}
                <span>{s.title}</span>
              </button>
            {/each}
          </div>
        </div>
      {/if}

    </div>
  </dialog>
{/if}


<style>

#intro {
  padding: 64px 32px;
  padding-bottom: 24px;
  text-align: center;
}

.personal-info {
  padding: 0 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
}


.solo-disclaimer {
  font-size: 0.8em;
  margin: 8px 0;
}

nav {
  display: flex;
  flex-flow: row wrap;
  column-gap: 24px;
  padding: 4px 8px;
  box-sizing: border-box;
  justify-content: center;
}

nav button {
  all: unset;
  margin: 0;
  cursor: pointer;
  transition: opacity 0.15s;
}

nav button:hover {
  opacity: 0.7;
}

nav button.on {
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-thickness: 2px;
}

main {
  margin-top: 32px;
  padding: 8px 32px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  grid-row-gap: 64px;
}

main .item {
  all: unset;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  transition: transform 0.2s ease;
}



main img, main video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  box-sizing: border-box;
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid transparent;
  box-sizing: border-box;
}

main .item:hover img, main .item:hover video {
  border: 1px solid var(--dark-blue);
}

main img.contain, main video.contain {
  object-fit: contain;
  object-position: center;
  padding: 8px;
}

main img.websites, main video.websites {
  object-position: top;
}

main p {
  margin: 0;
}

main p.title {
  font-weight: bold;
}

main p.collection {
  font-size: 0.7em;
}

main p.link {
  font-size: 0.7em;
}

main p.link::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: currentColor;
  -webkit-mask: url('/link.svg') no-repeat center / contain;
  mask: url('/link.svg') no-repeat center / contain;
  vertical-align: middle;
  margin-right: 3px;
}

main p.credit::before {
  content: "(";
}
main p.credit::after {
  content: ")";
}
main p.credit {
  font-size: 0.7em;
}

/* ── dialog ── */

dialog {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  color: inherit;
}

dialog .inner {
  position: relative;
  background: var(--light-blue);
  border-radius: 12px;
  padding: 0;
  width: 90vw;
  max-width: 720px;
  max-height: 88vh;
  overflow-y: auto;
  box-sizing: border-box;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
}

.hero img, .hero video {
  display: block;
  width: 100%;
  max-height: 55vh;
  object-fit: contain;
  border-radius: 12px 12px 0 0;
}

.details {
  padding: 20px 24px 24px;
}

.dialog-title {
  font-size: 28px;
  margin: 0 0 8px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
}

.meta-collection {
  font-size: 0.8em;
}

.meta-date {
  font-size: 0.8em;
}

.meta-collection + .meta-date::before {
  content: '·';
  margin-right: 8px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.tag {
  font-size: 0.65em;
  padding: 2px 10px;
  border-radius: 999px;
  border: 1.5px solid var(--dark-blue);
}

.detail-credit {
  font-size: 0.8em;
  margin: 0 0 4px;
}

.detail-link {
  margin: 0 0 4px;
}

.detail-link a {
  font-size: 0.8em;
  color: inherit;
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

.detail-link a:hover {
  opacity: 0.7;
}

.detail-link::before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: currentColor;
  -webkit-mask: url('/link.svg') no-repeat center / contain;
  mask: url('/link.svg') no-repeat center / contain;
  vertical-align: middle;
  margin-right: 4px;
}

.note {
  font-size: 0.85em;
  line-height: 1.5;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(105, 183, 255, 0.3);
}

/* ── series images ── */

.series {
  padding: 0 24px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.series-item img, .series-item video {
  display: block;
  width: 100%;
  border-radius: 6px;
}

.caption {
  font-size: 0.75em;
  margin: 4px 0 0;
}

/* ── siblings (more from collection) ── */

.siblings {
  padding: 0 24px 24px;
  border-top: 1px solid rgba(105, 183, 255, 0.3);
  margin-top: 8px;
}

.siblings-label {
  font-size: 0.75em;
  margin: 16px 0 10px;
  text-transform: lowercase;
}

.siblings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

.sibling {
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: opacity 0.15s;
}

.sibling:hover {
  opacity: 0.7;
}

.sibling img, .sibling video {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
}

.sibling span {
  font-size: 0.65em;
}

/* ── responsive ── */

@media (max-width: 1200px) {
  main { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  main {
    grid-template-columns: repeat(2, 1fr);
    padding: 8px 16px;
    grid-gap: 16px;
    grid-row-gap: 32px;
  }

  .nav-back {
    margin-bottom: 32px;
  }

  .personal-info {
    flex-direction: column;
    gap: 4px;
  }

  .flex-div {
    display: none;
  }

  #intro { padding: 32px 16px; }
  dialog .inner { width: 95vw; max-height: 92vh; }
  .dialog-title { font-size: 24px; }
  .details { padding: 16px 20px 20px; }
  .series { padding: 0 20px 20px; }
  .siblings { padding: 0 20px 20px; }
}

@media (max-width: 480px) {
  main { grid-template-columns: 1fr; }
}

</style>
