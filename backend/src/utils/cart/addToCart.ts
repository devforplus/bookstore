import { and, count, eq } from "drizzle-orm";
import { db } from "../../driver";
import { orderDetails, carts } from "../../schemas";

export async function addToCart(userId: string, bookId: string) {
	// 1. 이미 해당 도서가 장바구니에 포함되어 있다면, 개수만 변경

	// 해당 도서 정보가 포함되어 있는지 검사
	const result = await db
		.select({ count: count() })
		.from(carts)
		.where(
			and(
				eq(carts.book_id, bookId), // 책 ID
				eq(carts.cart_owner_id, userId), // 사용자 ID
			),
		);

	const countInCart = result[0]?.count || 0; // 쿼리 결과에서 카운트 가져오기

	// 이미 해당 장바구니가 존재함
	if (countInCart >= 1) {
		// 개수 업데이트 로직 추가
		await db
			.update(carts)
			.set({ quantity: countInCart + 1 }) // 개수 증가
			.where(and(eq(carts.book_id, bookId), eq(carts.cart_owner_id, userId)));
	} else {
		// 2. 없다면, 도서 추가
		await db.insert(carts).values({
			cart_owner_id: userId,
			book_id: bookId,
			quantity: 1, // 처음 추가하므로 개수는 1
		});
	}
}
