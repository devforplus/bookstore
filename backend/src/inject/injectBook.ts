import fs from "fs-extra";
import { Parser } from "@gregoranders/csv";
import { filter, isEmpty, isNullish, map, pipe, unique } from "remeda";
import { join } from "node:path";

import { client } from "../client/index";

const dirname = import.meta.dirname;
const booklist = fs.readFileSync(join(dirname, "booklist.csv")).toString();

// 도서 및 장르 정보를 저장합니다.

const books = new Parser()
	.parse(booklist)
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
		};
	})
	// ISBN 없는 책 거르기
	.filter((book) => !(book.isbn.trim().length === 0));

// 책에서 장르 정보만 뽑아오기
const genres = pipe(
	books.map((book) => book.genre),
	unique(),
);

console.log(`장르 데이터 업로드 시작 (${genres.length})`);

(async () => {
	for (const genre of genres) {
		try {
			await client.genre.addGenre
				.mutate({
					genre,
				})
				.then((res) => console.log(res));
		} catch (err) {
			// @ts-ignore
			console.log(`[장르] ${genre} 무시됨 (${err?.data?.code})`);
		}
	}
})();

(async () => {
	const genres = await client.genre.getAllGenres.query();

	for (const book of books) {
		const _genre = genres.find((genre) => genre.genre === book.genre);

		if (isNullish(_genre)) {
			console.log(`[도서 정보] ${book.title} 무시됨 (장르 정보 없음)`);
			continue;
		}

		try {
			await client.book.addBooks.mutate({
				id: book.isbn,
				name: book.title,
				author: book.author,
				cost: book.price,
				genre_id: _genre.id,
				price: book.price,
				quantity: 10,
				description: "",
			});
		} catch (err) {
			// @ts-ignore
			console.log(`[도서 정보] ${book.title} 무시됨 (${err?.data?.code})`);
		}
	}
})();
