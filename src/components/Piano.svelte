<script lang="ts">
  import { NOTES } from "../constants/notes";

  let keyRefs: any = [];
  let audioRefs: any = [];

  const handleKeyPress = (index: number) => {
    if(keyRefs[index] instanceof HTMLElement) {
      const audio = audioRefs[index];
      if(audio) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  };

</script>

<div class="piano-container">
  {#each NOTES as item, i}
    <div bind:this={keyRefs[i]} 
    data-note={item} 
    class={item.length < 2 ? "key white" : "key black"} 
    on:click={()=>handleKeyPress(i)}/>
  {/each}
</div>

{#each NOTES as item, i}
  <audio bind:this={audioRefs[i]} id={item} src={`src/assets/notes/${item}.mp3`}></audio>
{/each}

<style>
  :root {
    --white-key-width: 4rem;
    --white-key-height: calc(var(--white-key-width) * 4);
    --black-key-width: 2rem;
    --black-key-height: calc(var(--black-key-width) * 4);
    --box-shadow-height: 5px;
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
    box-shadow: 0px var(--box-shadow-height) 0px black;
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

  .pressed {
    transform:translateY(--box-shadow-height)
  }


</style>