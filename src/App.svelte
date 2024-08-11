<script>
  import Announcer from "./lib/Announcer.svelte";
  import Lobby from "./lib/Lobby.svelte";
  import Main from "./lib/Main.svelte";

  import { Connected, socket } from "./ts/client";

  window.addEventListener("beforeunload", () => {
    if (socket) socket.disconnect();
  });
</script>

{#if $Connected}
  <Main />
{:else}
  <Lobby />
{/if}
<Announcer />
