<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import BookInfo from '../../../components/BookInfo.svelte';

	import { cart, totalPrice, totalAmount } from '../../../stores/cart';
</script>

<div class="flex flex-col gap-2">
	<span class="text-2xl font-bold text-blue-900">결제하기</span>

	<div class="grid grid-cols-[8fr,2fr] gap-4">
		<div class="flex flex-col gap-1">
			{#each $cart as book}
				<BookInfo {book} hideEnCart={true}></BookInfo>
			{/each}
		</div>

		<div>
			<Card class="flex flex-col gap-2">
				<ul>
					<li>총 도서 수: {$totalAmount}</li>
					{#each $cart as book}
						<li>
							{book.name} : {Intl.NumberFormat('ko-KR').format(
								book.price * Number.parseInt(book.quantity ?? 1)
							)}원
						</li>
					{/each}
				</ul>

				<hr />

				<ul>
					<li>상품 금액: {Intl.NumberFormat('ko-KR').format($totalPrice)}원</li>
				</ul>

				<!-- TODO: 결제 수단 컴포넌트 추가하기 (결제수단 안 고르면 결제 안 되게 검사 로직 추가해야 함!) -->
				<Button on:click={() => window.alert('결제가 완료되었습니다!')}>결제하기</Button>
			</Card>
		</div>
	</div>
</div>
