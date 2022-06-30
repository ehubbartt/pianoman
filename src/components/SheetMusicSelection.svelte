<script lang="ts">
	import { currentNote, currentNoteIndex } from '../stores/NoteStore';
	import { musicStore } from '../stores/MusicStore';
	import type { sheetMusicType } from '../types/sheetMusicType';
  import { sheetMusic } from "../constants/sheetMusic";
  const handleIconClick = (item: sheetMusicType) => {
    musicStore.set(item);
    resetMusic();
  }  

  const resetMusic = () => {
    if ($musicStore.sheet) {
      currentNote.set($musicStore.sheet[0]);
      currentNoteIndex.set(0);
      return;
    }
    currentNote.set(null);
    currentNoteIndex.set(0);
  }
</script>

<div class="sheet-music-container">
  {#each sheetMusic as item}
      <div class="icon" on:click={()=>handleIconClick(item)}>
        <svelte:component this={item.icon} />
      </div>
  {/each}
</div>

<style>

  .sheet-music-container {
    display: flex;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
  }
  .icon {
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
    border-radius: 0.25rem;
    display:grid;
    place-items: center;
    cursor: pointer;
  }

</style>