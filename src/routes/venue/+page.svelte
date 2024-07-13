<script>
  import PageHeader from '../PageHeader.svelte';
</script>

<div>
  <PageHeader header="Venue" subHeader="&emsp;can I go where you go&emsp;" />

  <div class="details">
    <div class="venueDetails">
      <p>[Name of Venue]</p>
      <p>[Address]</p>
      <p>[Phone Number]</p>
      <p>[Directions]</p>
    </div>
    <div class="venuePicture"></div>
  </div>
</div>

<style>
  .details {
    display: flex;
    flex-direction: row;
  }

  .venueDetails {
    background-color: var(--color-bg-0);
    flex-grow: 1;
    padding-left: 2rem;
    text-transform: uppercase;
  }

  .venuePicture {
    flex-grow: 3;
    background-color: var(--color-bg-1);
  }
</style>
