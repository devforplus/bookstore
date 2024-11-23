import type { PrismaMethodParameters } from "src/utils/prisma-types";
import { client } from "../../../connectors";

/**
 * 책 테이블에 책 정보들을 추가합니다.
 *
 * @description 하나의 책만 입력하려면, 하나의 값만 가진 리스트를 선언하면 됩니다.
 *
 * @param books 추가할 책 리스트
 * @returns
 */
export const addBooks = async (
	books: PrismaMethodParameters<"books", "createMany">["data"],
) => {
	return client.books.createMany({
		data: books,
	});
};
