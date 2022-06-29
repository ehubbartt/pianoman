<script lang="ts">
  import { KEYBOARD_BLACK_KEYS, NOTES, KEYBOARD_WHITE_KEYS, BLACK_NOTES, WHITE_NOTES } from "../constants/notes";

  let keyRefs: any = [];
  let audioRefs: any = [];

  $: pressedKey = "";

  const handleMouseDown = (index: number) => {
    pressedKey = NOTES[index];
    const curKeyRef = keyRefs[index];

    if(curKeyRef instanceof HTMLElement) {
      const curAudioRef = audioRefs[index];
      if(curAudioRef) {
        curAudioRef.currentTime = 0;
        curAudioRef.play();
      }
    }
  };

  const handleMouseUp = () => {
    pressedKey = "";
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key;
    const whiteNoteIndex = KEYBOARD_WHITE_KEYS.indexOf(key);
    const blackNoteIndex = KEYBOARD_BLACK_KEYS.indexOf(key);

    if(whiteNoteIndex > -1) {
      handleMouseDown(NOTES.indexOf(WHITE_NOTES[whiteNoteIndex]));
    } else if(blackNoteIndex > -1) {
      handleMouseDown(NOTES.indexOf(BLACK_NOTES[blackNoteIndex]));
    }
  };

  const handleKeyUp = () => {
    handleMouseUp();
  };

</script>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />
<div class="piano-container">
  {#each NOTES as item, i}
    <div bind:this={keyRefs[i]} 
    data-note={item} 
    class={item.length < 2 ? "key white" : "key black"} 
    class:pressed={pressedKey === item}
    on:mouseup={() => handleMouseUp()}
    on:mousedown={()=>handleMouseDown(i)}/>
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
    transition: all 0.2s ease-in-out;
  }

  .pressed {
    height: calc(var(--white-key-height) + var(--box-shadow-height));
    box-shadow: none;
  }


</style>