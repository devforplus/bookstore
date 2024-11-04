import type { Book } from "./types/Book";

/**
 * ## 책 데이터 로드 함수
 *
 * @param page 페이지 번호
 * @returns
 */
export const loadBookList = async (page: number): Promise<Book[]> => {
	console.log(`${page}번 페이지로의 요청이 발생하였습니다.`);
	return [
		{
			id: 100,
			author: "한강",
			name: "소년이 온다",
			publishedDate: "2014년 05월 19일",
			price: 13500,
			genre: "국내 도서",
			coverUrl: "/Book1.png",
		},
	];
};
