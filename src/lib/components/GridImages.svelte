<script lang="ts">
  export let gridNumber: number;
  export let photos: any;
</script>

<div
  class="grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 lg:grid-cols-3 max-sm:grid-cols-1 gap-10"
>
  {#each photos as photo}
    {#if !photos.url}
      <a
        href={photo.url}
        target={!photo.noRedirect ? "_blank" : "_self"}
        rel="noreferrer"
      >
        <img class="rounded card object-cover	" src={photo.src} alt="img" />
      </a>
    {:else}
      <img class="rounded card object-cover	" src={photo.src} alt="img" />
    {/if}
  {/each}
</div>

<style>
  .card {
    border-radius: 10px;
    object-fit: cover;
    height: 100%;
    transition: 300ms all;
  }
  .card:hover {
    transform: scale(1.05);
  }
</style>
