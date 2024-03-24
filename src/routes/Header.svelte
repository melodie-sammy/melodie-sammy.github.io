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
	<nav class="navbar">
		<ul>
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
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1.5rem;
		color: var(--color-text);
		font-weight: 400;
		/* font-size: 0.8rem; */
		text-transform: uppercase;
		letter-spacing: 0.02em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		/* color: #ff3e00; */
		color: var(--color-theme-1);
	}

	/* li {
		position: relative;
		height: 100%;
	} */

	/* li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	} */
</style>
