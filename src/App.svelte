<script>
  import Lobby from "./lib/Lobby.svelte";
  import Main from "./lib/Main.svelte";

  import { Connected } from "./ts/client";
</script>

{#if $Connected}
  <Main />
{:else}
  <Lobby />
{/if}
