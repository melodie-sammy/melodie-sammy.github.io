<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />
	<main class="main">
		<slot />
	</main>
</div>

<style>
	div {
		background-color: var(--color-bg-0);
	}
	.main {
		background-color: var(--color-bg-1);
	}
</style>
