import { client } from "../../db/driver";

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
	const row = await client.carts.findFirst({
		where: {
			// 책 ID와 사용자 ID 가 가은 경우
			book_id: {
				equals: bookId,
			},
			cart_owner_id: {
				equals: userId,
			},
		},
	});

	// === 처리 로직 ===
	// 1. 이미 장바구니에 해당 사용자-도서 짝이 존재하는 경우 => 책 수만 늘려주기
	if (row !== null) {
		const { quantity } = row;

		return await client.carts.update({
			where: {
				cart_owner_id_book_id: {
					book_id: bookId,
					cart_owner_id: userId,
				},
			},
			data: {
				quantity: quantity + 1,
			},
		});
	}

	// 2. 장바구니에 해당 사용자-도서 짝이 없는 경우 => 행 추가하기
	return await client.carts.create({
		data: {
			cart_owner_id: userId,
			book_id: bookId,
			quantity: 1,
		},
	});
}
