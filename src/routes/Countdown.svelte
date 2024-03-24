<script>
  import { derived, readable } from 'svelte/store';

  export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);

    return function stop() {
      clearInterval(interval);
    };
  });

  const weddingDate = new Date('2026-06-25T16:00:00Z')

  const timeLeftStore = derived(time, ($time) => {
    let timeLeft = weddingDate.getTime() - $time.getTime();
    return {
      days: String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor(timeLeft / (1000 * 60 * 60) % 24)).padStart(2, '0'),
      minutes: String(Math.floor(timeLeft / (1000 * 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor(timeLeft / 1000 % 60)).padStart(2, '0'),
    }
  });

  const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);

</script>


<div class=countdown_area>
  <h2>Countdown to our enchienting advuongture</h2>
  <!-- <h2>{formatter.format($time)}</h2> -->
  <div class=countdown_data>
    <h3 class="countdown_value days">{$timeLeftStore.days}</h3>
    <div class=colon>:</div>
    <h3 class="countdown_value hours">{$timeLeftStore.hours}</h3>
    <div class=colon>:</div>
    <h3 class="countdown_value minutes">{$timeLeftStore.minutes}</h3>
    <div class=colon>:</div>
    <h3 class="countdown_value seconds">{$timeLeftStore.seconds}</h3>
  </div>
</div>

<style>
  .countdown_area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    font-family: "Ibarra Real Nova";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    height: 180px;
    background-color: rgba(244, 240, 236, 0.40);
  }
  .countdown_data {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .countdown_data .countdown_value {
    text-align: center;
    margin: 0 20px;
    font-size: 50px;
    letter-spacing: 4.5px;
    width: 60px;
  }
  .countdown_data .countdown_value.days {
    width: 90px;
  }
  .countdown_data .colon {
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 30px;
  }

</style>