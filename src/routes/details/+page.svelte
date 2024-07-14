<script lang="ts">
  import PageHeader from '../PageHeader.svelte';

  const detailsInfo = [
    {
      header: 'RVSP Deadline',
      info: 'We kindly ask that you RSVP online by [TBD]. Please use this link [TBD] to confirm your attendance.'
    },
    {
      header: 'Location',
      info: 'Our ceremony and reception will be at [TBD]. We have included a map of the venue with parking <a href="/venue">here</a>'
    },
    {
      header: 'Schedule',
      info: 'Our wedding day timeline is available <a href="/timeline">here</a>'
    },
    {
      header: 'Attire',
      info: 'This will be a semi-casual celebration with just our nearest and dearest. '
    },
    {
      header: "Plus One's",
      info: 'We would love to share our special day with as many as possible, but due to venue restrictions, we are unable to accommodate plus ones.'
    },
    {
      header: 'Weather',
      info: 'While we cannot predict the <a href="https://www.weather.com">forecast</a> for our special day, the weather is typically [TBD] at this time of the year.'
    },
    {
      header: 'Unplugged',
      info: 'We hope that you can enjoy this special moment with us camera-free, so please, no photos until the conclusion of our ceremony.'
    },
    {
      header: 'When to arrive',
      info: 'Our ceremony is scheduled to begin at [TBD]. We recommend you try to arrive thirty minutes early.'
    },
    {
      header: 'Dietary Restrictions',
      info: 'Please indicate any dietary restrictions on your RSVP.'
    },
    {
      header: 'Registry',
      info: 'Please know that your love and company is all we could ask for! However, if you do wish to celebrate with a gift, we\'ve created an online <a href="registry/">registry</a>.'
    },
    {
      header: 'Capture it, Remember it',
      info: 'Feel free to snap away during the reception and use our QR code to upload to our shared drive.'
    },
    {
      header: 'Additional Questions',
      info: 'Please contact Melodie or Sammy if you have questions about anything else.'
    }
  ];
  let details = detailsInfo.map((detail) => ({ show: false, ...detail }));

  function toggleDetailHeader(detailHeader: string) {
    details = details.map((detail) => {
      if (detail.header === detailHeader) {
        return { ...detail, show: !detail.show };
      }
      return { ...detail, show: false };
    });
  }

  function toggleAccordion(detail: { header: string; info: string; show: boolean }) {
    console.log(`clicked button ${detail.header}`);
    toggleDetailHeader(detail.header);
  }
</script>

<div class="page">
  <PageHeader
    header="Details"
    subHeader="&emsp;find that what you're looking for has been here the whole time&emsp;"
  />
  <div class="faq">
    {#each details as detail}
      <div>
        <button class="accordion" on:click={() => toggleAccordion(detail)}>
          <span class="buttonHeader">
            {detail.header}
          </span>
          <span class="buttonIcon">
            {detail.show ? '-' : '+'}
          </span>
        </button>
        <div class="panel" style="display: {detail.show ? 'block' : 'none'}">
          <p>{@html detail.info}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .page {
    background-color: var(--color-bg-0);
    display: flex;
    flex-direction: column;
  }
  .faq {
    width: 50%;
    justify-content: center;
    margin: 0 auto 5rem;
  }

  .accordion {
    cursor: pointer;
    transition: 0.4s;
    width: 100%;
    border: none;
    padding: 1rem 1rem 1rem 2rem;
    color: var(--color-bg-0);
    background-color: var(--color-bg-1);
    font: var(--font-body);
    text-transform: uppercase;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .panel {
    background-color: var(--color-bg-0);
    padding: 0 1rem 0 2.5rem;
    font-size: 1.4rem;
  }
</style>
