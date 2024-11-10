import { client } from "src/connectors";
import { findBookInCart } from "./findBookInCart";
import { updateQuantity } from "./updateQuantity";

/**
 * 장바구니에 도서 추가하는 함수
 *
 * @param userId 사용자 ID
 * @param bookId 책 ID
 * @returns
 */
export async function addToCart(userId: string, bookId: string) {
	// === 준비 로직 ===
	// 해당 도서 정보가 포함되어 있는지 검사
	const row = await findBookInCart(userId, bookId);

	// === 처리 로직 ===
	// 1. 이미 장바구니에 해당 사용자-도서 짝이 존재하는 경우 => 책 수만 늘려주기
	if (row !== null) return updateQuantity(userId, bookId, 1);

	// 2. 장바구니에 해당 사용자-도서 짝이 없는 경우 => 행 추가하기
	return client.carts.create({
		data: {
			cart_owner_id: userId,
			book_id: bookId,
			quantity: 1,
		},
	});
}
