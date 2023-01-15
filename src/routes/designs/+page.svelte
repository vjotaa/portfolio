<script lang="ts">
  import { onMount } from "svelte";
  import "../../app.css";
  import GridImages from "../../lib/components/GridImages.svelte";
  let shots: any = [];

  onMount(async () => {
    const authToken =
      "61c6d2da9b628853b29e1542594ae6b79e9048e634765082bda28c54a8d30c8a";
    const response = await fetch(
      `https://api.dribbble.com/v2/user/shots?access_token=${authToken}`,
      {}
    );
    shots = await response.json();
    shots = parseShots(shots);
  });

  const parseShots = (shots: any) => {
    return shots.map((shot: any) => {
      return {
        src: shot.images.hidpi,
        url: shot.html_url,
      };
    });
  };
</script>

<div class="w-full p-10">
  <p class="bold text-3xl text-blackLight font-Fraunces font-bold">
    Dribbble projects
  </p>
  <p class="text-1xl mt-10 font-Fraunces">
    I am passionate about creating user interface (UI) designs, even though I am
    still a beginner. Despite not having a lot of experience or spending a long
    time without working on any new projects, I find that designing UI is an
    enjoyable and satisfying hobby. I love the process of taking an idea and
    bringing it to life on a screen, experimenting with different layouts,
    colors and typography.
  </p>
  <div class="mt-20">
    <div class="flex items-center justify-center w-full">
      <GridImages photos={shots} gridNumber={5} />
    </div>
  </div>
</div>
