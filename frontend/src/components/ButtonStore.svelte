<script lang="ts">
	import { goto } from '$app/navigation';

	import { cart } from '../stores/cart';

	import type { Book } from '$lib/types/Book';

	import { Button, Modal } from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	import { writable } from 'svelte/store';

	export let bookData: Book;

	const popupModal = writable(false);

	/** 장바구니 페이지로 이동하는 함수 */
	const gotoCart = () => goto('/store/cart');
	/** 장바구니에 도서 데이터를 삽입하는 함수 */
	const inCart = () => {
		// TODO: 이미 리스트에 도서가 추가되어 있으면 책 수량만 바꾸도록 수정해야 함

		$cart = [
			...$cart,
			{
				...bookData,
				quantity: 1
			}
		];
	};
</script>

<div>
	<button
		class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		type="button"
		on:click={() => {
			$popupModal = true;
			inCart();
		}}>장바구니</button
	>
</div>

<Modal bind:open={$popupModal} size="xs" autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
		<h3>상품이 장바구니에 담겼습니다.</h3>
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			장바구니로 이동하시겠습니까?
		</h3>
		<Button color="blue" class="me-2" on:click={gotoCart}>확인</Button>
		<Button color="alternative">취소</Button>
	</div>
</Modal>
