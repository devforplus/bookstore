import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { genres } from "./genres";

/**
 * 도서 테이블
 *
 * - `id`에는 ISBN을 저장함. 입력되지 않으면, 저장할 수 없음
 */
export const books = sqliteTable("books", {
	id: text().primaryKey(), // ISBN 등 (자동완성하지 않음)
	name: text().notNull(), // 책 이름
	cost: int().notNull(), // 원가
	price: int().notNull(), // 정가
	description: text().notNull(),
	quantity: int().notNull(), // 재고량
	author: text().notNull(),
	genre: int().references(() => genres.id), // 장르 정보
});
