<script lang="ts">
  import { musicStore } from "../stores/MusicStore";
  import Staff from "./Staff.svelte"
  console.log($musicStore);
  
</script>

{#if $musicStore.name !== null}
   <div class="sheet-music paper">
      <Staff />
   </div>
{/if}

<style>

  .paper {
    height: 32rem;
    width: 64rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    background-image: url("src/assets/img/paper.jpg");
    margin: 1rem;
    display: grid;
    place-items: center;
    padding: 5rem;
  }

</style>