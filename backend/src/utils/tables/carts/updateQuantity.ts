import { isNullish } from "remeda";
import { isInteger } from "lodash";

import { removeFromCart } from "./removeFromCart";
import { client } from "src/connectors";

/**
 * 주문 수량 수정 함수
 *
 * @param userId 사용자 ID
 * @param bookId 도서 ID
 * @param incrementer 변화시킬 양
 *
 * @throws `incrementor`가 정수가 아닐 때: 소수점 단위의 수량 변화를 수행할 수 없습니다.
 * @throws 사용자ID-도서ID 쌍에 유효한 행이 없을 때: 존재하지 않은 기록의 주문 수량 수정을 시도하였습니다
 */
export const updateQuantity = async (
	userId: string,
	bookId: string,
	incrementer: number,
) => {
	// === 타입 검증 ===
	if (!isInteger(incrementer))
		throw new Error("소수점 단위의 수량 변화를 수행할 수 없습니다");

	// === 수정할 데이터 존재 확인 ===
	const row = await client.carts.findFirst({
		where: {
			cart_owner_id: userId,
			book_id: bookId,
		},
	});

	// 수정할 데이터 없으면 오류 throw
	if (isNullish(row))
		throw new Error("존재하지 않는 기록의 주문 수량 수정을 시도하셨습니다");

	const { quantity } = row;
	/** 수정된 수량 정보 */
	const finalQuantity = quantity + incrementer;

	// 1. 수정된 수량 정보가 0 이하라면, 해당 행 제거
	if (finalQuantity <= 0) return removeFromCart(userId, bookId);
	// 2. 아니라면 수량 조정
	return client.carts.update({
		where: {
			cart_owner_id_book_id: {
				cart_owner_id: userId,
				book_id: bookId,
			},
		},
		data: {
			quantity: finalQuantity,
		},
	});
};
