<script lang="ts">
	import { goto } from '$app/navigation';

	import { purchase } from '../stores/purchase';

	import type { Book } from '$lib/types/Book';

	export let bookData: Book;

	function gotoPurchase() {
		$purchase = bookData;
		return goto('/ops/purchase');
	}
</script>

<div>
	<button
		class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		type="button"
		on:click={gotoPurchase}>바로구매</button
	>
</div>
