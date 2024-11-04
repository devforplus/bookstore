<script lang="ts">
	import { isArray, range } from 'remeda';
	import { Skeleton } from 'flowbite-svelte';

	import BookInfo from '../components/BookInfo.svelte';
	import MainHeader from '../components/MainHeader.svelte';
	import { bookList } from '../stores/bookList';
	import type { Book } from '$lib/types/Book';

	/** 책 리스트를 최신순으로 정렬 */
	let recentBooks: Book[] | undefined = undefined;

	$: {
		recentBooks = $bookList
			// 시간 기준 오름차순 정렬
			?.toSorted(
				(bookA, bookB) =>
					new Date(bookA.publishedDate).getTime() - new Date(bookB.publishedDate).getTime()
			)
			// 내림차순으로 변경
			.toReversed();
	}
</script>

<MainHeader></MainHeader>

<span class="text-2xl font-bold text-blue-900">최신 도서</span>
<div class="flex flex-col gap-1">
	{#if isArray(recentBooks)}
		{#each recentBooks.slice(0, 5) as book}
			<BookInfo {book}></BookInfo>
		{/each}
	{:else}
		{#each range(0, 10) as _}
			<Skeleton size="xxl" class="mb-2.5 mt-8" />
		{/each}
	{/if}
</div>
