import { client } from "../../../connectors";

/**
 * 사용자의 장바구니 내에 데이터가 있는지 검사합니다
 *
 * @param userId 사용자 ID
 * @param bookId 책 ID
 * @returns 찾은 책 객체 | null
 */
export const findBookInCart = async (userId: string, bookId: string) => {
	const data = await client.carts.findFirst({
		where: {
			cart_owner_id: userId,
			book_id: bookId,
		},
	});

	return data;
};
