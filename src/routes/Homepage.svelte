<script>
	import Countdown from './Countdown.svelte';
  import name from '$lib/svg/Name.svg';
</script>

<div class="background">
	<div class="homepageMain">
		<img src={name} alt="tbd alt" />
	</div>
	<Countdown />
</div>

<style>
	.homepageMain {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 581px;
	}
</style>
