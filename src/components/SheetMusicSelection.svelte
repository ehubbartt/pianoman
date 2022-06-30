<script lang="ts">
	import { musicStore } from '../stores/MusicStore';
	import type { sheetMusicType } from '../types/sheetMusicType';
  import { sheetMusic } from "../constants/sheetMusic";

  const handleIconClick = (item: sheetMusicType) => {
    musicStore.set(item);
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