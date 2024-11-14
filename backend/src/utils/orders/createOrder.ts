import { client } from "src/db";
import { isNonNullish } from "remeda";
import { assert } from "@toss/assert";

/**
 * 주문 정보 생성 (기록성 정보)
 *
 * @param userId 사용자 ID
 * @param bookIds 책 ID들
 */
export const createOrder = async (userId: string, bookIds: string[]) => {
	// 책 정보 가져오기
	const $books = await client.$transaction(
		bookIds.map((bookId) =>
			client.books.findFirst({
				where: {
					id: bookId,
				},
			}),
		),
	);

	// 유효하지 않은 책 ID 거르기
	// TODO: 오류에 대한 책 ID 로그 추가하기
	assert(
		$books.every(isNonNullish),
		new Error("유효하지 않은 책 ID가 포함되어 있습니다"),
	);

	const totalPrice = $books.reduce(
		(totalPrice, book) => totalPrice + book.price,
		0,
	);

	// 책 주문 정보 추가하기
	const result = await client.orders.create({
		data: {
			// 주문자
			orderer: userId,
			// 주문한 도서 정보
			orderDetails: {
				createMany: {
					data: bookIds.map((bookId) => ({
						book_id: bookId,
					})),
				},
			},
			// 총액 (기록성)
			total_price: totalPrice,
		},
		include: {
			orderDetails: true,
		},
	});

	return result;
};
