<script lang="ts">
  import { Announcement } from "../ts/client";

  let show = false;
  let timeout: number;
  let message = "";

  Announcement.subscribe((v) => {
    if (!v) return (show = false);

    show = false;

    setTimeout(() => {
      show = true;
      message = v;

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        show = false;
      }, 5000);
    }, 200);
  });
</script>

<div class="announcement-wrapper">
  <div class="announcer" class:show>
    <span>[!]</span>
    <span>{message}</span>
  </div>
</div>
