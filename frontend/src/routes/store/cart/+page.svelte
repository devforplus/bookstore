<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';

	import BookInfo from '../../../components/BookInfo.svelte';
	import { cart, totalPrice } from '../../../stores/cart';
</script>

<div class="flex flex-col gap-1">
	<span class="text-2xl font-bold text-blue-900">장바구니</span>

	<div class="grid grid-cols-[8fr,2fr] gap-4">
		<div class="flex flex-col gap-1">
			{#each $cart as book}
				<BookInfo bind:book hideEnCart={true}></BookInfo>
			{/each}
		</div>

		<div>
			<Card class="flex flex-col gap-2">
				<ul>
					<li>총 도서 수: {$cart.length}</li>
					{#each $cart as book}
						<li>{book.name} : {Intl.NumberFormat('ko-KR').format(book.price)}원</li>
					{/each}
				</ul>

				<hr />

				<ul>
					<li>상품 금액: {Intl.NumberFormat('ko-KR').format($totalPrice)}원</li>
				</ul>

				<a href="/store/purchase">
					<Button>주문하기</Button>
				</a>
			</Card>
		</div>
	</div>
</div>
