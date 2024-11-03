<script lang="ts">
	import { cart } from '../../../stores/cart';
</script>

<!-- TODO: 장바구니 페이지 완성하기 -->

<div>
	<ul>
		{#each $cart as { id, name, price, genre, author, publishedDate, coverUrl }, i}
			<li>
				<h1>{i + 1} : {name} {price}</h1>
			</li>
		{/each}
	</ul>
</div>
