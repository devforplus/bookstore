import { client } from "../../../connectors";

import type { z } from "zod";
import type { booksCreateManyInputSchema } from "prisma-types";

type Books = z.infer<typeof booksCreateManyInputSchema>;

/**
 * 책 테이블에 책 정보들을 추가합니다.
 *
 * @description 하나의 책만 입력하려면, 하나의 값만 가진 리스트를 선언하면 됩니다.
 *
 * @param books 추가할 책 리스트
 * @returns
 */
export const addBooks = async (books: Books) => {
	return client.books.createMany({
		data: books,
	});
};
