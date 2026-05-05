<script>
  // import { env } from '$lib/env'

  const commit = import.meta.env.VITE_COMMIT_HASH ?? 'dev';
  const commit_short = commit.slice(0, 7)

  const commitDate = (import.meta.env.VITE_COMMIT_DATE
  ? new Date(import.meta.env.VITE_COMMIT_DATE).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    })
  : '').toLowerCase();

</script>

<footer>
<p>commit <a href="https://github.com/bucketfish/tongyufish/commit/{commit}" target="_blank">{commit_short}</a> on {commitDate}</p>
</footer>

<style>

footer {
  position: absolute;
  padding: 12px;
  margin: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  font-size: 0.75em;
  opacity: 50%;
  transition: 0.2s opacity;
}

footer:hover {
  opacity: 100%;
}

footer p {
  margin: 0;
}

footer p::before {
  content: "~~~~~~~~~~";
  margin-right: 32px;
}

footer p::after {
  content: "~~~~~~~~~~";
  margin-left: 32px;
}

</style>
