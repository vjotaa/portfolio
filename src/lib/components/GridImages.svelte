<script lang="ts">
  export let gridNumber: number;
  export let photos: any;
</script>

<div class="grid grid-cols-5 max-sm:grid-cols-1 gap-10">
  {#each photos as photo}
    {#if !photos.url}
      <a
        href={photo.url}
        target={!photo.noRedirect ? "_blank" : "_self"}
        rel="noreferrer"
      >
        <img class="rounded card" src={photo.src} alt="img" />
      </a>
    {:else}
      <img class="rounded card" src={photo.src} alt="img" />
    {/if}
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
