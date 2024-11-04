import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./users";

export const addresses = sqliteTable("addresses", {
	// NOTE: zip_code는 id로 사용되기 어려울 수 있음, 상세 주소에 따라 중복이 어려울 것 같음
	id: int().primaryKey({
		autoIncrement: true,
	}),
	zip_code: int().notNull(),
	address: text().notNull(),
	detailed_address: text().notNull(),
	owner_id: text().references(() => users.id),
});
