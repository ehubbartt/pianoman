<script lang="ts">
  import { NOTES } from "../constants/notes";

  const handleKeyPress = (e: Event) => {
    if(e.target instanceof HTMLElement) {
      const audio = (<HTMLAudioElement>document.getElementById(e.target.dataset.note || ""));
      if(audio) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  };

</script>

<div class="piano-container">
  {#each NOTES as item}
    <div data-note={item} class={item.length < 2 ? "key white" : "key black"} on:click={handleKeyPress}/>
  {/each}
</div>

{#each NOTES as item}
  <audio id={item} src={`src/assets/notes/${item}.mp3`}></audio>
{/each}

<style>
  :root {
    --white-key-width: 4rem;
    --white-key-height: calc(var(--white-key-width) * 4);
    --black-key-width: 2rem;
    --black-key-height: calc(var(--black-key-width) * 4);
  }

  .piano-container {
    display: flex;
    background-color: rgb(209, 209, 209);
    position: relative;
  }

  .white {
    border: 1px solid #000;
    width: var(--white-key-width);
    height: var(--white-key-height);
    background-color: white;
    box-shadow: 0px 5px 0px black;
  }

  .white:hover {
    background-color: #cfcfcf;
  }

  .black {
    border: 1px solid #000;
    width: var(--black-key-width);
    height: var(--black-key-height);
    background-color: black;
    z-index: 100;
    margin-left: calc(var(--black-key-width) / -2);
    margin-right: calc(var(--black-key-width) / -2);
  }

  .black:hover {
    background-color: rgb(47, 47, 47);
  }

  .key {
    cursor: pointer;
    overflow: show;
  }


</style>