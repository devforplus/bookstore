import { z } from "zod";

/**
 * 순수 책 데이터 스키마
 *
 * NOTE: csv에서 읽은 데이터 원형 스키마 (가공 전)
 */
export const RawBookSchema = z.object({
	title: z.string(),
	genre: z.string(),
	author: z.string(),
	translator: z.string().describe("역자"),
	publisher: z.string().describe("출판사"),
	publishedDate: z.string().date(),
	isbn: z.string().describe("ISBN 코드"),
	pageCount: z.number().int().min(0).describe("페이지 수"),
	price: z.number().int().min(0).describe("정가"),
});

/**
 * 순수 책 데이터 인터페이스
 *
 * NOTE: csv에서 읽은 데이터 원형 스키마 (가공 전)
 */
export type RawBook = z.infer<typeof RawBookSchema>;
