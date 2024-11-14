import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { users } from "./users";

/** 주문자 테이블 */
export const orders = sqliteTable("orders", {
	order_id: int().primaryKey({
		autoIncrement: true,
	}),
	order_date: text("date").default(sql`CURRENT_DATE`),
	total_price: int().notNull(),
	orderer: text().references(() => users.id),
});
