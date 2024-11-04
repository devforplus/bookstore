<script lang="ts">
	import ButtonStore from './ButtonStore.svelte';

	import type { Book } from '$lib/types/Book';
	import { Input, Label } from 'flowbite-svelte';

	// TODO: 여기도 수정
	export let book: Book & { quantity: number };
	/**
	 * ### 장바구니 버튼 숨김 여부
	 *
	 * NOTE: 장바구니 페이지 내에서 장바구니에 상품을 추가하는 기능을 보일 필요가 없음
	 */
	export let hideEnCart = false;
</script>

<!-- 
	TODO: 장바구니에서 상품 제거하는 기능 추가하기
	제품 수량을 0 이하로 내리면 제거되도록 만드는 것도 가능함
 -->

<div
	class="flex flex-row place-items-center justify-center gap-4 rounded-lg border border-gray-300 bg-white p-5 shadow-md"
>
	<div class="mr-4 h-auto w-24">
		<img src={book.coverUrl} alt={book.name} />
	</div>

	<div class="flex-grow">
		<h2 class="mb-2 text-lg font-bold">[{book.genre}] {book.name}</h2>
		<p class="my-1 text-gray-600">{book.author}</p>
		<p class="my-1 text-gray-600">{book.publishedDate}</p>
		<p class="my-1 text-gray-600">{Intl.NumberFormat('ko-KR').format(book.price)}원</p>
	</div>

	<div class="flex flex-col items-center gap-4">
		{#if !hideEnCart}
			<!-- 장바구니 숨기지 않음 -->
			<div class="mt-4">
				<div class="text-gray-800">
					<ButtonStore bookData={book} />
				</div>
			</div>
		{:else}
			<!-- 장바구니 숨김 -->
			<Label for="quantity">수량</Label>
			<Input bind:value={book.quantity} type="number" name="quantity" />
		{/if}
	</div>
</div>
