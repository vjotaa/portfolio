<script lang="ts">
	import { onMount } from 'svelte';
	import '../../app.css';
	let shots: any = [];

	onMount(async () => {
		const authToken = '61c6d2da9b628853b29e1542594ae6b79e9048e634765082bda28c54a8d30c8a';
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
				hidpi: shot.images.hidpi,
				url: shot.html_url
			};
		});
	};
</script>

<div class="w-full p-10">
	<p class="bold text-3xl font-bold">Dribbble projects</p>
	<div class="mt-20">
		<div class="flex items-center justify-center w-full">
			<div class="grid">
				{#each shots as shot}
					<a href={shot.url} target="_blank" rel="noreferrer">
						<img class="grid-item" src={shot.hidpi} alt="dribbble" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(250px, 1fr));
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
