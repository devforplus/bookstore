import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { books } from "./books";

export const carts = sqliteTable("carts", {
	// Composite PFK: 사용자 ID + 책 ID
	cart_owner_id: text()
		.primaryKey()
		.references(() => users.id),
	book_id: text()
		.primaryKey()
		.references(() => books.id),
});
