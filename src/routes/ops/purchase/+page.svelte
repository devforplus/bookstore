<script lang="ts">
	import { purchase } from '../../../stores/purchase';

	import { isBook } from '$lib/types/Book';
</script>

<div>
	{#if isBook($purchase)}
		<p>책 이름 : {$purchase.name}</p>
		<p>가격 : {$purchase.price}</p>
	{:else}
		<!-- TODO: 404 페이지로 변경 또는 404 페이지로 이동하도록 로직 재작성 -->
		<p>잘못된 요청입니다</p>
	{/if}
</div>
