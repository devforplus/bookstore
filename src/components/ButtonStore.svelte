<script lang="ts">
	import { goto } from '$app/navigation';

	import { cart } from '../stores/cart';

	import type { Book } from '$lib/types/Book';

	// readable: "읽기 전용 상태"
	// writable: "쓰기도 가능한 상태"
	// dervied: "상속한 상태"; 특정 상태들이 업데이트 되면, 업데이트 된 상태를 사용하여 만드는 상태

	export let bookData: Book;

	function gotoCart() {
		$cart = [...$cart, bookData];
		// NOTE: 상대경로 금지
		return goto('/ops/cart');
	}
</script>

<div>
	<button
		class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		type="button"
		on:click={gotoCart}>장바구니</button
	>
</div>
