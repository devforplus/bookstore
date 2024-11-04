import { client } from "src/db";

/**
 * 장바구니에서 도서 삭제하는 함수
 *
 * @param userId 사용자 ID
 * @param bookId 책 ID
 */
export const removeFromCart = async (userId: string, bookId: string) => {
	return await client.carts.delete({
		where: {
			cart_owner_id_book_id: {
				cart_owner_id: userId,
				book_id: bookId,
			},
		},
	});
};
