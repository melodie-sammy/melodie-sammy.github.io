<script>
  import PageHeader from '../PageHeader.svelte';
  import TeaCeremony from '$lib/svg/TeaCeremony.svg';
  import Camera from '$lib/svg/Camera.svg';
  import Cake from '$lib/svg/Cake.svg';
  import WeddingRings from '$lib/svg/WeddingRings.svg';
  import Ramen from '$lib/svg/Ramen.svg';
  import TimelineTree from './TimelineTree.svelte';
</script>

<div class="page">
  <PageHeader header="Timeline" subHeader="always at the right place at the right time" />
  <div class="timeline">
    <div class="leftColumn">
      <div class="event">
        <img src={TeaCeremony} alt="tbd alt" />
        <span>2:00</span>
        <span>Tea Ceremony</span>
      </div>
      <div class="event">
        <img src={Camera} alt="tbd alt" />
        <span>5:00</span>
        <span>Wedding Photos</span>
      </div>
      <div class="event">
        <img src={Cake} alt="tbd alt" />
        <span>8:00</span>
        <span>Cake Cutting</span>
      </div>
    </div>
    <div class="middleColumn">
      <TimelineTree />
    </div>
    <div class="rightColumn">
      <div class="event">
        <img src={WeddingRings} alt="tbd alt" />
        <span>3:30</span>
        <span>Wedding Ceremony</span>
      </div>
      <div class="event">
        <img src={Ramen} alt="tbd alt" />
        <span>6:30</span>
        <span>Dinner</span>
      </div>
    </div>
  </div>
</div>

<style>
  .page {
    background-color: var(--color-bg-0);
    display: flex;
    flex-direction: column;
  }

  .timeline {
    width: 40%;
    justify-content: center;
    margin: 0 auto 4rem;
    background-color: var(--color-bg-1);
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }

  .event {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0 1rem 0;
    color: var(--color-bg-0);
    text-transform: uppercase;
  }

  .leftColumn,
  .rightColumn {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .middleColumn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 10rem;
  }
</style>
