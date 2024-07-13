<div class="timelineTree">
  <div class="columnLeft">
    <div class="cell cl1"></div>
    <div class="cell cl2"></div>
    <div class="cell cl3"></div>
    <div class="cell cl4"></div>
  </div>
  <div class="columnRight">
    <div class="cell cr1"></div>
    <div class="cell cr2"></div>
    <div class="cell cr3"></div>
  </div>
</div>

<style>
  .timelineTree {
    height: 100%;
    display: flex;
    flex-direction: row;
    --border-style: 1px solid var(--color-bg-0);
  }
  .columnLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: var(--border-style);
    flex-grow: 1;
  }
  .cell {
    flex-grow: 1;
  }
  .cl1 {
    height: 1rem;
    border-bottom: var(--border-style);
  }
  .cl2 {
    height: 4rem;
    border-bottom: var(--border-style);
  }
  .cl3 {
    height: 4rem;
    border-bottom: var(--border-style);
  }
  .cl4 {
    height: 1rem;
  }
  .columnRight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }
  .cr1 {
    height: 2rem;
    border-bottom: var(--border-style);
  }
  .cr2 {
    height: 3rem;
    border-bottom: var(--border-style);
  }
  .cr3 {
    height: 2rem;
  }
</style>
