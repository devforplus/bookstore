import { client } from "../../../connectors";
import type { AddBooksArgs } from "../../../schemas";
import { findOrCreateGenre } from "../genres";

// TODO: 장르 데이터를 가져와서, genre_id를 도출하여 사용하도록 수정하기
/**
 * 책 테이블에 책 정보들을 추가합니다.
 *
 * @description 하나의 책만 입력하려면, 하나의 값만 가진 리스트를 선언하면 됩니다.
 *
 * @param books 추가할 책 리스트
 * @returns
 */
export const addBooks = async (books: AddBooksArgs[]) => {
	const genreIds = await Promise.all(
		books.map(({ genre }) => findOrCreateGenre(genre)),
	);

	client.books.createMany({
		data: books.map((book, index) => {
			return {
				...book,
				genre_id: genreIds[index].id,
			};
		}),
	});
};
