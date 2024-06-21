<script lang="ts">
  import { authenticated, attemptAuth } from '$lib/auth';

  /**
   * Goals:
   * 1. Create a component that will be the first thing that is rendered, on top of everything else
   * 2. This component will check if the user is authenticated
   * 3. If the user is authenticated, it will not render itself
   *
   * Header: Only set interactivity if authenticated
   * Other routes: always reroute to homepage if not authenticated
   * homepage: do not show countdown if not authenticated, and show the custom authwall prompt that covers the main area if not authenticated.
   *
   *
   */

  function checkPassword(event: Event) {
    const element = event.target as HTMLInputElement;
    attemptAuth(element.value);
  }
</script>

<div class="auth-wall">
  {#if !$authenticated}
    <div class="auth-wall-prompt">
      <p>Welcome to our website. We are so excited to celebrate with you!</p>
      <p>Please enter the password provided on the invitation.</p>
      <input type="password" on:change={(event) => checkPassword(event)} />
    </div>
  {/if}
  <div class={$authenticated ? 'authenticated' : 'unauthenticated'}>
    <slot />
  </div>
</div>

<style>
  .auth-wall {
    position: relative;
  }

  .auth-wall :global(.unauthenticated) {
    color: red;
    /* filter: blur(10px); */
    user-select: none;
    pointer-events: none;
  }

  .auth-wall-prompt {
    background-color: rgba(244, 240, 236, 0.4);
    color: white;
    position: absolute;
    z-index: 2;
    text-align: center;
    padding: 30px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-weight: 500;
    font-size: 20px;

    left: 50%;
    top: 50%;
    transform: translate(-50%, 0);
  }
</style>
