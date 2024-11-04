<script lang="ts">
	import ButtonStore from './ButtonStore.svelte';

	import type { Book } from '$lib/types/Book';

	export let book: Book;
	/**
	 * ### 장바구니 버튼 숨김 여부
	 *
	 * NOTE: 장바구니 페이지 내에서 장바구니에 상품을 추가하는 기능을 보일 필요가 없음
	 */
	export let hideEnCart: boolean = false;
</script>

<div class="flex items-start gap-4 rounded-lg border border-gray-300 bg-white p-5 shadow-md">
	<div class="mr-4 h-auto w-24">
		<img src={book.coverUrl} alt={book.name} />
	</div>

	<div class="flex-grow">
		<h2 class="mb-2 text-lg font-bold">[{book.genre}] {book.name}</h2>
		<p class="my-1 text-gray-600">{book.author}</p>
		<p class="my-1 text-gray-600">{book.publishedDate}</p>
		<p class="my-1 text-gray-600">{Intl.NumberFormat('ko-KR').format(book.price)}원</p>
	</div>

	{#if !hideEnCart}
		<div class="mt-4">
			<div class="text-gray-800">
				<ButtonStore bookData={book} />
			</div>
		</div>
	{/if}
</div>
