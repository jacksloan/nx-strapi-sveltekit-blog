<script context="module" lang="ts">
  import * as api from 'asdf';
  export async function load({ fetch }) {
    const response = await fetch('index.json');
    const posts = await response.json();
    return { posts };
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
