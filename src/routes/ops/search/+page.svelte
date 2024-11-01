<!-- 도서 검색 페이지 -->

<script lang="ts">
	import BookInfo from '../../../components/BookInfo.svelte';
	import { bookList } from '../../../stores/bookList';
</script>

{#if $bookList === undefined}
	<p>책 데이터가 아직 로드되지 않았습니다</p>
{:else}
	<div class="flex flex-col items-center">
		<div class="flex flex-col">
			{#each $bookList as bookData}
				<BookInfo book={bookData} />
			{/each}
		</div>
	</div>
{/if}
