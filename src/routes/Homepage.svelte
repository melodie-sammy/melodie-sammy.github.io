<script>
  import Countdown from './Countdown.svelte';
  import name from '$lib/svg/Name.svg';
  import { authenticated } from '$lib/auth';
</script>

<div class="background">
  <div class="homepageMain">
    <img src={name} alt="tbd alt" class={$authenticated ? 'authenticated' : 'unauthenticated'} />
  </div>
  {#if $authenticated}
    <Countdown />
  {/if}
</div>

<style>
  .homepageMain {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30rem;
  }

  .unauthenticated {
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, 0);
  }
</style>
