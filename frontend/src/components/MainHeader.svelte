<script lang="ts">
	import Login from './LoginButton.svelte';
	import Register from './RegisterButton.svelte';
	import SearchBar from './SearchBar.svelte';
	import Brand from './Brand.svelte';

	import Icon from '@iconify/svelte';
	import { CartOutline } from 'flowbite-svelte-icons';
	import { showToast } from '$lib/showToast';
</script>

<header class="flex flex-row place-items-center justify-between gap-4 p-8">
	<Brand></Brand>

	<div class="w-3/5">
		<SearchBar></SearchBar>
	</div>

	<div class="flex place-items-center gap-4">
		<Register></Register>
		<Login></Login>
		<a href="/store/cart">
			<CartOutline size="xl"></CartOutline>
		</a>
		<!-- TODO: 마이 페이지 구현하기 -->
		<a href="#" on:click={() => showToast({}, '아직 구현되지 않은 기능입니다!')}>
			<Icon icon="iconamoon:profile" font-size="xx-large" />
		</a>
	</div>
</header>
