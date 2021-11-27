<script context="module" lang="ts">
  export async function load({ fetch }) {
    const res = await fetch('index.json');
    const posts = await res.json();
    return { props: { posts } };
  }
</script>

<script lang="ts">
  import type { Posts } from '@nx-sveltekit-strapi-blog/api-client';
  export let posts: Posts[];
  $: console.log(posts);
</script>

<h1>Blog</h1>

{#each posts as p}
  <article>
    <h3>{p.title}</h3>
    <p>
      {p.content}
    </p>
  </article>
{/each}
