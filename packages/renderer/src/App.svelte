<script lang="ts">
import Main from "./components/Main.svelte";
import MenuBar from "./components/menubar/MenuBar.svelte";

</script>

<MenuBar></MenuBar>
<Main />

<style global lang="postcss">
  body, html, #app {
    @apply p-0 m-0 h-full w-full;
  }
  #app {
    @apply grid [grid-template-columns:_min-content_auto];
  }
</style>
