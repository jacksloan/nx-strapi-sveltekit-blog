<script context="module" lang="ts">
  export async function load({ fetch }) {
    const res = await fetch('index.json');
    const posts = await res.json();
    return { props: { posts } };
  }
</script>

<script>
  export let posts;
  $: console.log(posts);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
