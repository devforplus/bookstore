import {
	addToCart,
	findBookInCart,
	getAllBooksInCart,
	removeFromCart,
	reomveAllInCarts,
	updateQuantity,
} from "../../../utils/tables/carts";
import { procedure, router } from "../trpcClient";
import { z } from "zod";

import { tryit } from "radash";

export const cartRouter = router({
	addToCart: procedure
		.input(
			z.object({
				userId: z.string(),
				bookId: z.string(),
			}),
		)
		.mutation(({ input: { userId, bookId } }) => {
			return addToCart(userId, bookId);
		}),
	// 해당 사용자의 장바구니에 해당 도서가 있는지 검사합니다
	findBookInCart: procedure
		.input(
			z.object({
				userId: z.string(),
				bookId: z.string(),
			}),
		)
		.query(({ input: { userId, bookId } }) => {
			return findBookInCart(userId, bookId);
		}),
	getAllBooksInCart: procedure
		.input(
			z.object({
				userId: z.string(),
			}),
		)
		.query(({ input: { userId } }) => {
			return getAllBooksInCart(userId);
		}),
	// 해당 사용자의 장바구니를 모두 비웁니다.
	removeAllIncarts: procedure
		.input(
			z.object({
				userId: z.string(),
			}),
		)
		.mutation(({ input: { userId } }) => {
			return reomveAllInCarts(userId);
		}),
	// 해당 사용자의 특정 도서만 제거합니다
	removeFromCart: procedure
		.input(
			z.object({
				userId: z.string(),
				bookId: z.string(),
			}),
		)
		.mutation(({ input: { userId, bookId } }) =>
			removeFromCart(userId, bookId),
		),
	// 해당 사용자의 장바구니 속 특정 도서의 수량을 incrementer만큼 변경합니다
	updateQuantity: procedure
		.input(
			z.object({
				userId: z.string(),
				bookId: z.string(),
				incrementer: z.number().int(),
			}),
		)
		.mutation(async ({ input: { userId, bookId, incrementer } }) => {
			const [result, err] = await tryit(updateQuantity)(
				userId,
				bookId,
				incrementer,
			);

			// 오류 발생 시, 오류 정보 반환
			if (err instanceof Error)
				return {
					error: err.message,
				};

			return result;
		}),
});
