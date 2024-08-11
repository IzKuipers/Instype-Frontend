<script lang="ts">
  import { LastSaid, Nickname, socket, Texts } from "../ts/client";
  import { Store } from "../ts/writable";

  let text = Store<string>();

  text.subscribe((v) => {
    socket?.emit("text", v || " ");
  });

  function leave() {
    socket?.disconnect();
    location.reload();
  }
</script>

<main>
  <div class="clients">
    {#if $Texts}
      {#each Object.entries($Texts) as [nickname]}
        <span class="client" class:you={nickname == $Nickname}
          >{nickname}{$Nickname == nickname ? " (you)" : ""}</span
        >
      {/each}
    {/if}
  </div>
  <div class="members-wrapper">
    <div class="members">
      {#if $Texts}
        {#each Object.entries($Texts) as [nickname, text]}
          <div
            class="member"
            title={nickname}
            class:background={!text.trim()}
            style="--nick: '{nickname == $Nickname ? 'You' : nickname}';"
            class:me={nickname == $Nickname}
            class:last-said={$LastSaid == nickname}
            class:singular={Object.entries($Texts).length == 1}
          >
            <span>{text.trim() || "(quiet)"}</span>
          </div>
        {/each}
      {/if}
    </div>
  </div>
  <div class="you">
    <input type="text" bind:value={$text} />
    <button class="leave" on:click={leave}>LEAVE</button>
  </div>
</main>
