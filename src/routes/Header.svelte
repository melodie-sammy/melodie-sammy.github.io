<script>
	import { page } from '$app/stores';
	import fingerprint from '$lib/images/fingerprint_logo.png';
</script>

<header>
	<div>
		<span class="fingerprint-heart">
			<picture>
				<img src={fingerprint} alt="" />
			</picture>
		</span>
	</div>
	<nav>
		<ul class="navbar">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/story' ? 'page' : undefined}>
				<a href="/story">Our Story</a>
			</li>
			<li aria-current={$page.url.pathname === '/venue' ? 'page' : undefined}>
				<a href="/venue">Venue</a>
			</li>
			<li aria-current={$page.url.pathname === '/timeline' ? 'page' : undefined}>
				<a href="/timeline">Timeline</a>
			</li>
			<li aria-current={$page.url.pathname === '/details' ? 'page' : undefined}>
				<a href="/details">Details</a>
			</li>
			<li aria-current={$page.url.pathname === '/registry' ? 'page' : undefined}>
				<a href="/registry">Registry</a>
			</li>
			<li aria-current={$page.url.pathname === '/rsvp' ? 'page' : undefined}>
				<a href="/rsvp">rsvp</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	@import './styles.css';
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.navbar {
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	.navbar a {
		height: 100%;
		align-items: center;
		padding: 0 1.5rem;
		color: var(--color-text);
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.navbar a:hover {
		color: var(--color-theme-1);
	}
</style>
