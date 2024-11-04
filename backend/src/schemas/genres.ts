import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";

/**
 * 장르 테이블
 *
 * 저장될 수 있는 장르의 종류를 정규화하여 저장하기 위한 테이블입니다.
 */
export const genres = sqliteTable("genres", {
	id: int().primaryKey({
		autoIncrement: true,
	}),
	genre: text().notNull(),
});
