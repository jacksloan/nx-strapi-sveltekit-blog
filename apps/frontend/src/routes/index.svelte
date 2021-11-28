<script context="module" lang="ts">
  import type { Posts } from '@nx-strapi-sveltekit-blog/api-client';

  export async function load({ fetch }) {
    const res = await fetch('index.json');
    const posts = await res.json();
    return { props: { posts } };
  }
</script>

<script lang="ts">
  export let posts: Posts[];
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
