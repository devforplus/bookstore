<script lang="ts">
	import { cart } from '../../../stores/cart';
</script>

<div>
	<ul>
		{#each $cart as { id, name, price, genre, author, publishedDate, coverUrl }, i}
			<li>
				<h1>{i + 1} : {name} {price}</h1>
			</li>
		{/each}
	</ul>
</div>
