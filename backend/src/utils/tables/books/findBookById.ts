import { client } from "../../../connectors";

/**
 * 도서 ID에 유효한 책을 탐색하여 반환합니다
 *
 * @param bookId 도서 ID
 * @returns
 */
export const findBookById = (bookId: string) => {
	return client.books.findFirst({
		where: {
			id: bookId,
		},
	});
};
