import { z } from "zod";

/** 책 정보 스키마 */
export const BookSchema = z.object({
	id: z.string(),
	name: z.string(),
	price: z.number().int().min(0),
	genre: z.string(),
	author: z.string(),
	publishedDate: z.string(),

	// url은 보통 https:// 시작하는 완전한 URL을 의미하기도 함
	coverUrl: z.string(),
});

/**
 * 책 정보 인터페이스
 *
 * - `id`: 책 ID
 * - `name`: 책 이름
 * - `price`: 책 가격 (단위: 원)
 * - `genre`: 장르
 * - `author`: 작가
 * - `publishedDate: 출간일자
 * - `coverUrl`: 책 표지 이미지 주소
 */
export type Book = z.infer<typeof BookSchema>;

/**
 * 입력 데이터가 `Book` 스키마에 유효한지 검사합니다
 *
 * @param book 입력 데이터
 * @returns
 */
export const isBook = (book: unknown): book is Book =>
	BookSchema.safeParse(book).success;
