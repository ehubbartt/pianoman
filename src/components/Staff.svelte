<script lang="ts">
import { parseMarginsFromNotes } from "../util/parseMarginsFromNotes";

import { musicStore } from "../stores/MusicStore";
let margins: any;
$: {
 margins = parseMarginsFromNotes($musicStore.sheet);
}
</script>

<h1 class="title">{$musicStore.name}</h1>
<div class="staff">
  <div class="overlay">
    <img src="src/assets/svg/trebble.svg" alt="trebble clef" class="clef">
    {#each margins as item}
      <img src="src/assets/svg/quarter-note.svg" alt="quarter note" class="quarter-note" style={`margin-top: ${item}rem`}>
    {/each}
  </div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>

<style>

  .title {
    border-bottom: 1px solid black;
    text-align: center;
  }

  .overlay{
    position:absolute;
    width:100%;
    height:100%;
    overflow:visible;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  .staff {
    width: 100%;
    height: 50%;
    position: relative;
  }

  .clef {
    width: 10rem;
    height: 10rem;
    z-index: 100;
    margin-top: -2.5rem;
  }

  .quarter-note {
    width: 3rem;
    z-index: 100;
    margin-bottom: 1rem;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: #000;
    margin-bottom: 1rem;
  }

</style>