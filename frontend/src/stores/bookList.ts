import { loadBookList } from "$lib/loadBookList";
import { writable, type Readable } from "svelte/store";

import { Parser } from "@gregoranders/csv";

import type { Book } from "$lib/types/Book";
import type { RawBook } from "$lib/types/RawBook";

// TODO: 추후 데이터베이스 만들어지면 데이터베이스에서 책을 로드하도록 변경

/**
 * ## 책 리스트 상태
 *
 * - 데이터가 로드되지 않았을 때는 `undefined`, 로드된 이후에는 `Book[]` 타입을 따릅니다.
 * - 데이터는 {@link loadBookList} 함수를 통해 로드할 수 있습니다.
 */
export const bookList: Readable<Book[] | undefined> = (() => {
	// 상태 생성
	const $bookList = writable<Book[] | undefined>(undefined);

	// === 책 데이터 로드 (csv, 임시) ===
	// 1. 데이터 로드(fetch)
	fetch("/booklist.csv")
		.then((res) => res.text())
		// 2. csv 데이터 해석
		.then((text) => new Parser().parse(text))
		// 3. 데이터 변환 (추상화)
		.then((parsed) => {
			return parsed.slice(1).map((row) => {
				const [
					_,
					title,
					genre,
					author,
					translator,
					publisher,
					publishedDate,
					isbn,
					pageCount,
					price,
				] = row;

				return {
					title,
					genre,
					author,
					translator,
					publisher,
					publishedDate,
					isbn,
					pageCount: Number.parseInt(pageCount),
					price: Number.parseInt(price),
				} as RawBook;
			});
		})
		.then((books) => {
			$bookList.set(
				books.map((book) => {
					const { title, isbn, publishedDate, genre, price, author } = book;

					return {
						id: isbn,
						name: title,
						author,
						genre: genre,
						price,
						publishedDate,
						// TODO: 작업 시점 기준, 책 데이터가 없어서 이렇게 처리함
						//       책 데이터가 생기면 로직 변경하기
						coverUrl: "/book_image_unavailable.jpeg",
					};
				}),
			);
		});

	return {
		subscribe: $bookList.subscribe,
	};
})();
