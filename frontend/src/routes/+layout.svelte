<script>
	import { Toast } from 'flowbite-svelte';
	import { toastList } from '../stores/toastList';
	import { FireOutline } from 'flowbite-svelte-icons';
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex w-screen flex-row justify-center">
	<div class="container">
		<slot></slot>
	</div>
</div>

<div class="absolute bottom-0 right-0 flex flex-col gap-1">
	{#each $toastList as props}
		<Toast {...props}>
			<FireOutline
				slot="icon"
				class="bg-primary-100 text-primary-500 dark:bg-primary-800 dark:text-primary-200 h-6 w-6"
			/>
			{props.message}
		</Toast>
	{/each}
</div>

<style>
	:global(body) {
		font-family: 'Noto Sans KR', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
	}
</style>
