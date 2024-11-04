<script lang="ts">
	import ButtonStore from './ButtonStore.svelte';

	import type { Book } from '$lib/types/Book';

	export let book: Book;
</script>

<div class="flex items-start gap-4 rounded-lg border border-gray-300 bg-white p-5 shadow-md">
	<div class="mr-4 h-auto w-24">
		<img src={book.coverUrl} alt={book.name} />
	</div>

	<div class="flex-grow">
		<h2 class="mb-2 text-lg font-bold">[{book.genre}] {book.name}</h2>
		<p class="my-1 text-gray-600">{book.author}</p>
		<p class="my-1 text-gray-600">{book.publishedDate}</p>
		<p class="my-1 text-gray-600">{book.price.toString()}원</p>
	</div>

	<div class="mt-4">
		<div class="text-gray-800">
			<ButtonStore bookData={book} />
		</div>
	</div>
</div>
