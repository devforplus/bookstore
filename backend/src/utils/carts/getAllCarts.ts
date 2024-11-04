import { client } from "src/db";

/**
 * 장바구니 내역 호출
 * @param userId
 * @returns
 */
export const getAllCarts = async (userId: string) => {
	return await client.carts.findMany({
		where: {
			cart_owner_id: userId,
		},
	});
};
