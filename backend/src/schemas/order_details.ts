import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { orders } from "./orders";
import { books } from "./books";

/**
 * 주문상세정보 테이블
 */
export const order_details = sqliteTable("order_detail", {
	order_id: int()
		.primaryKey()
		.references(() => orders.order_id),
	book_id: text()
		.primaryKey()
		.references(() => books.id),
});
