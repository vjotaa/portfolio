<script lang="ts">
	let photos: any = [];
	const generateImg = () => {
		for (let i = 0; i < 10; i++) {
			const width = 550;
			const heightRandom = Math.floor(Math.random() * 100) + 550;
			const height = heightRandom > 440 ? heightRandom : 550;
			photos.push({
				src: {
					medium: `https://picsum.photos/${width}/${height}`
				},
				photographer: 'Victor Manrique'
			});
		}
		return photos;
	};
</script>

<div class="grid">
	{#each generateImg() as photo}
		<img class="grid-item" src={photo.src.medium} alt={photo.photographer} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(250px, 1fr));
		grid-row-gap: 0px;
		grid-auto-flow: dense;
		grid-gap: 20px;
	}

	.grid-item {
		border-radius: 10px;
		object-fit: contain;
		transition: 300ms all;
	}
	.grid-item:hover {
		transform: scale(1.05);
	}
</style>
