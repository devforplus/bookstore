import { client } from "src/db";

/**
 * 사용자가 장바구니에 넣은 모든 요소를 제거하는 함수
 *
 * - 결제 수행 시, 결제된 요소는 모두 제거되어야 하며, 주문 내역으로 이동해야 합니다.
 * - 이 함수는 모든 요소가 결제된 경우를 가정합니다.
 *
 * @param userId 사용자 ID
 */
export const reomveAllInCarts = async (userId: string) => {
	return await client.carts.deleteMany({
		where: {
			cart_owner_id: userId,
		},
	});
};
