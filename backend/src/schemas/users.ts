import { sqliteTable, text } from "drizzle-orm/sqlite-core";

/** 사용자 테이블 */
export const users = sqliteTable("users", {
	id: text().primaryKey(),
	name: text().notNull(),
	password: text().notNull(),
	sex: text({ enum: ["female", "male"] }),
	email: text().notNull().unique(),
	phone: text().notNull().unique(),
	address: text(),
});
