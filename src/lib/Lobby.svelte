<script lang="ts">
  import { ConnectAs } from "../ts/client";

  let nickname: string;
  let working = false;

  async function connect() {
    // if (!nickname) return;

    working = true;

    await ConnectAs(nickname);

    working = false;
  }
</script>

<div class="lobby">
  <h1>InsType</h1>
  <p class="sub">Enter a nickname to continue</p>
  <div>
    <input
      type="text"
      placeholder="Nickname?"
      bind:value={nickname}
      disabled={working}
    />
    <button on:click={connect} disabled={working || !nickname}>
      {working ? "WAIT..." : "CONNECT"}
    </button>
  </div>
</div>
