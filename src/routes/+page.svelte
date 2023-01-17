<script lang="ts">
  import "../app.css";
  import GridImages from "../lib/components/GridImages.svelte";
  import ProjectList from "../lib/components/ProjectList.svelte";
  const imgUrl = new URL("../../static/hi.png", import.meta.url).href;
  const pixel1 = new URL("../../static/bear.gif", import.meta.url).href;
  const pixel2 = new URL("../../static/room.gif", import.meta.url).href;
  const draw3 = new URL("../../static/3.jpg", import.meta.url).href;
  let photos: any = [
    {
      src: pixel1,
      noRedirect: true,
      url: "/illustrations",
    },
    {
      src: draw3,
      noRedirect: true,
      url: "/illustrations",
    },
    {
      src: pixel2,
      noRedirect: true,
      url: "/illustrations",
    },
  ];
</script>

<svelte:head>
  <title>Victor Manrique</title>
</svelte:head>
<div class="w-full p-10">
  <p
    class="max-sm:text-2-1xl bold md:text-3xl lg:text-4xl font-bold flex text-blackLight"
  >
    <span>
      <img
        src={imgUrl}
        class="sm:hidden max-sm:text-2xl max-sm:hidden md:hidden lg:h-28 lg:block ml-1 img-animati"
        alt=""
      /></span
    >Hi there, my name is Victor.
  </p>
  <p
    class="bold   max-sm:text-2-1xl  md:text-3xl lg:text-4xl font-bold text-blackLight"
  >
    A frontend developer who loves building things.
  </p>
  <div class="mt-20">
    <div class="flex items-center justify-center flex-col sm:w-full lg:w-full ">
      <ProjectList />

      <p
        class="bold text-3xl  max-sm:text-2-1xl max-sm:text-center  text-blackLight mt-10 font-Fraunces font-bold"
      >
        I also make some cool illustrations, check it out
      </p>
      <div class="mt-20">
        <div class="flex items-center justify-center w-full">
          <GridImages {photos} gridNumber={4} />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .img-animati {
    transform: rotate(-50deg);
    animation: shakeAnimation 1s infinite;
  }

  @keyframes shakeAnimation {
    0% {
      transform: rotate(-50deg);
    }
    50% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(-50deg);
    }
  }
</style>
