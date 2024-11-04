<script lang="ts">
	import { isArray, range } from 'remeda';
	import { Skeleton } from 'flowbite-svelte';

	import BookInfo from '../components/BookInfo.svelte';
	import MainHeader from '../components/MainHeader.svelte';
	import { bookList } from '../stores/bookList';
</script>

<MainHeader></MainHeader>

<div class="flex flex-col gap-1">
	<span class="text-2xl font-bold text-blue-900">최신 도서</span>
	<div class="flex flex-col gap-1">
		{#if isArray($bookList)}
			{#each $bookList.slice(0, 5) as book}
				<BookInfo {book}></BookInfo>
			{/each}
		{:else}
			{#each range(0, 10) as _}
				<Skeleton size="xxl" class="mb-2.5 mt-8" />
			{/each}
		{/if}
	</div>
</div>
