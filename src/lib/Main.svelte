<script lang="ts">
  import { socket, Texts } from "../ts/client";
  import { Store } from "../ts/writable";

  let text = Store<string>();

  text.subscribe((v) => {
    socket?.emit("text", v || " ");
  });
</script>

<main>
  <div class="members-wrapper">
    <div class="members">
      {#if $Texts}
        {#each Object.entries($Texts) as [nickname, text]}
          <div class="member" title={nickname}>{text}</div>
        {/each}
      {/if}
    </div>
  </div>
  <div class="you">
    <input type="text" bind:value={$text} />
  </div>
</main>
