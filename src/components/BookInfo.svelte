<!-- 책 상세 페이지 -->

<script lang="ts">
	import BookCover from './BookCover.svelte';
	import ButtonPurse from './ButtonPurse.svelte';
	import ButtonStore from './ButtonStore.svelte';

	import type { Book } from '$lib/types/Book';

	export let book: Book;
</script>

<div class="book-container gap-4">
	<div class="book-cover">
		<BookCover imgsrc={book.coverUrl}></BookCover>
	</div>

	<div class="book-details">
		<h2 class="book-title">[{book.genre}] {book.name}</h2>
		<p class="book-author">{book.author}</p>
		<p class="book-date">{book.publishedDate}</p>
		<!-- 쉼표 넣어주는 JS 문법 있음 (Intl) -->
		<p class="book-price">{book.price.toString()}원</p>
	</div>

	<div class="button-group">
		<div class="add-to-cart">
			<ButtonPurse bookData={book} />
		</div>
		<div class="buy-now">
			<ButtonStore bookData={book} />
		</div>
	</div>
</div>

<style>
	.book-container {
		display: flex;
		align-items: flex-start;
		background-color: #fff;
		border: 1px solid #eaeaea;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.book-cover {
		width: 100px;
		height: auto;
		margin-right: 16px;
	}

	.book-details {
		flex-grow: 1;
	}

	.book-title {
		font-size: 18px;
		font-weight: bold;
		margin: 0 0 8px 0;
	}

	.book-author,
	.book-date,
	.book-price {
		margin: 4px 0;
		color: #666;
	}
	.button-group {
		margin-top: 16px;
	}
	.add-to-cart {
		color: #333;
	}

	.buy-now {
		color: #fff;
	}
</style>
