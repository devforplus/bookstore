<!-- 도서 검색 페이지 -->

<script lang="ts">
	import BookInfo from '../../../components/BookInfo.svelte';
	import { searchResult } from '../../../stores/searchResult';

	import { isEmpty } from 'remeda';

	let currentPage: number = 0;
</script>

{#if $searchResult === undefined}
	<p>책 데이터가 아직 로드되지 않았습니다</p>
{:else if isEmpty($searchResult)}
	<p>검색 결과가 <strong>0</strong>건 입니다.</p>
{:else}
	<div>
		<div>
			{#each $searchResult as bookData}
				<BookInfo book={bookData} />
			{/each}
		</div>
	</div>
{/if}

<!-- TODO: 페이지네이션 추가 (시간 있으면) -->
