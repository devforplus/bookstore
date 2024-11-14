import { writable, type Readable } from "svelte/store";

import { Parser } from "@gregoranders/csv";
import { isEmpty } from "remeda";

import type { Book } from "$lib/types/Book";
import type { RawBook } from "$lib/types/RawBook";

// TODO: 추후 데이터베이스 만들어지면 데이터베이스에서 책을 로드하도록 변경

/**
 * ## 책 리스트 상태
 *
 * - 데이터가 로드되지 않았을 때는 `undefined`, 로드된 이후에는 `Book[]` 타입을 따릅니다.
 */
export const bookList: Readable<Book[] | undefined> = (() => {
	// 상태 생성
	const $bookList = writable<Book[] | undefined>(undefined);

	// === 책 데이터 로드 (csv, 임시) ===
	console.time("책 리스트 로드");
	// 1. 데이터 로드(fetch)
	fetch("/booklist.csv")
		.then((res) => res.text())
		// 2. csv 데이터 해석
		.then((text) => new Parser().parse(text))
		// 3. 데이터 변환 (추상화)
		.then((parsed) => {
			return parsed
				.slice(1)
				.map((row) => {
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
				})
				.filter((book) => !isEmpty(book.isbn));
		})
		.then((books) => {
			return books.map((book) => {
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
			});
		})
		// 최신순 정렬
		.then((books) => {
			return (
				books
					// 시간 기준 오름차순 정렬
					?.toSorted(
						(bookA, bookB) =>
							new Date(bookA.publishedDate).getTime() -
							new Date(bookB.publishedDate).getTime(),
					)
					// 내림차순으로 변경
					.toReversed()
			);
		})
		// 정렬된 책 데이터를 상태에 저장
		.then((sortedBooks) => {
			$bookList.set(sortedBooks);
			console.log(sortedBooks);
		})
		.then(() => {
			console.timeEnd("책 리스트 로드");
		});

	return {
		subscribe: $bookList.subscribe,
	};
})();
