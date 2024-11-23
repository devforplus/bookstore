import Fuse from "fuse.js";
import { match } from "ts-pattern";

import { getAllBooks } from "./getAllBooks";
import { BookSearchModeSchema, type BookSearchMode } from "../../../schemas";
import { keys } from "remeda";

/**
 * fuse.js를 통한 도서 검색 기능을 제공합니다.
 *
 * @description Prisma의 `"fullTextSearch"` 플러그인이 MySQL과 PostgreSQL에서만 동작하여, 모든 도서 데이터를 로드한 후 fuse.js를 통해 검색을 수행하는 형태로 작성됨.
 *
 * @param keyword 검색어
 * @param mode 검색 모드 (제목, 내용, 모두)
 *
 * @returns fuse.js의 검색 결과만 반환
 */
export const findBooksByKeyword = async (
	keyword: string,
	mode: BookSearchMode,
) => {
	// 모든 도서 데이터 가져오기
	const books = await getAllBooks();

	// 검색 대상 열 (e.g. name, description) 추출
	const $mode = match(mode)
		// "all" -> 모든 키
		.when(
			(mode) => mode === "all",
			() => keys(BookSearchModeSchema.Values),
		)
		// 그 외 -> 개별 키
		.otherwise(<T>(value: T): [T] => [value]);

	// 검색 및 결과 반환
	const fuse = new Fuse(books, {
		keys: $mode,
	});

	return fuse.search(keyword).map((item) => item.item);
};
