<script lang="ts">
  export let gridNumber: number;
  export let photos: any;
</script>

<div
  class="grid lg:grid-cols-{gridNumber} sm:grid-cols-1 sm:justify-items-center gap-10"
>
  {#each photos as photo}
    <img class="rounded card" src={photo.src} alt="img" />
  {/each}
</div>

<style>
  .card {
    border-radius: 10px;
    object-fit: contain;
    transition: 300ms all;
  }
  .card:hover {
    transform: scale(1.05);
  }
</style>
