<script>
	import ThemeWrapper from './../components/ThemeWrapper.svelte';
</script>

<ThemeWrapper>
  <slot/>
</ThemeWrapper>

<style>

  :global(*) {
    box-sizing: border-box;
  }

  :global(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;

    font-family: 'Poppins', sans-serif;

    font-family: 'Roboto', sans-serif;

    font-family: 'Roboto Mono', monospace;
  }
</style>
