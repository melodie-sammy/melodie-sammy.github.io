<script>
  export let header;
  export let subHeader;
</script>

<div class="fancy-font">
  <h1 class="header">{header}</h1>
  <p class="subheader">{subHeader}</p>
</div>

<style>
  div {
    height: 100vh;
  }
  .fancy-font {
    height: 11rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg-0);
    text-align: center;
  }
  .fancy-font .header {
    text-transform: uppercase;
    color: #000;
    font-family: 'Ibarra Real Nova';
    font-size: 3rem;
    min-width: 2rem; /* Make unresponsive to avoid wrapping */
    font-weight: 400;
    line-height: normal;
    padding-top: 1rem;
  }
  .fancy-font .subheader {
    color: #000;
    font-family: Zapfino;
    font-size: 0.6rem;
    min-width: 1.3rem; /* Make unresponsive to avoid wrapping */
    position: relative;
    top: -3.5rem;
  }
</style>
