<script lang="ts">
  import Header from './Header.svelte';
  import AuthWall from './AuthWall.svelte';
  import { authenticated } from '$lib/auth';
  import { page } from '$app/stores';
  import { redirect } from '@sveltejs/kit';

  if ($authenticated) {
    console.log('authenticated');
  } else if ($page.url.pathname === '/') {
    console.log('already on homepage');
  } else {
    console.log('not authenticated, redirecting to homepage');
    redirect(307, '/');
  }
</script>

<div class="app">
  <AuthWall>
    <Header />
    <main class="main">
      <slot />
    </main>
  </AuthWall>
</div>

<style>
  div {
    background-color: var(--color-bg-0);
  }
  .main {
    background-color: var(--color-bg-1);
  }
</style>
