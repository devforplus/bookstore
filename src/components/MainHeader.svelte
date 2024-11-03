<script lang="ts">
	import Login from './login.svelte';
	import Register from './register.svelte';
	import SearchBar from './SearchBar.svelte';
	import Brand from './Brand.svelte';

	import Icon from '@iconify/svelte';
	import { CartOutline } from 'flowbite-svelte-icons';
</script>

<!-- <header class="relative flex items-center justify-between border-b border-gray-200 bg-white p-8"> -->
<header class="flex flex-row place-items-center justify-between gap-4 p-8">
	<Brand></Brand>

	<div class="w-3/5">
		<SearchBar></SearchBar>
	</div>

	<div class="flex place-items-center gap-4">
		<Register></Register>
		<Login></Login>
		<CartOutline size="xl"></CartOutline>
		<Icon icon="iconamoon:profile" font-size="xx-large" />
	</div>
</header>
