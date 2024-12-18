import { client } from "../../../connectors";

/**
 * 사용자의 장바구니 내용 가져오기
 *
 * @param userId 사용자 ID
 * @returns
 */
export const getAllBooksInCart = async (userId: string) => {
	return client.carts.findMany({
		where: {
			cart_owner_id: userId,
		},
	});
};
