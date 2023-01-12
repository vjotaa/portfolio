<script lang="ts">
	import '../app.css';
	import GridImages from '../lib/components/GridImages.svelte';

	const imgUrl = new URL('../../static/hi.png', import.meta.url).href;
</script>

<svelte:head>
	<title>Victor Manrique</title>
</svelte:head>

<div class="w-full p-10">
	<p class="bold text-4xl font-bold flex text-blackLight">
		Hi there <span> <img src={imgUrl} class="h-28 ml-1 img-animati" alt="" /></span>, my name is
		Victor.
	</p>
	<p class="bold text-3xl font-bold text-blackLight">A frontend developer who loves building things.</p>
	<div class="mt-20">
		<p class="text-2xl mb-10">My favorites</p>
		<div class="flex items-center justify-center w-full">
			<GridImages />
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
