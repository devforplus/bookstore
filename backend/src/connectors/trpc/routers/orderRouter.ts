import { cancelOrder, createOrder } from "../../../utils/tables/orders";
import { procedure, router } from "../trpcClient";
import { z } from "zod";

export const orderRouter = router({
	// 주문을 취소 처리함
	cancelOrder: procedure
		.input(
			z.object({
				userId: z.string(),
				orderId: z.string(),
			}),
		)
		.mutation(({ input: { userId, orderId } }) => cancelOrder(userId, orderId)),
	// 주문 정보를 생성함
	createOrder: procedure
		.input(
			z.object({
				userId: z.string(),
				bookIds: z.string().array(),
			}),
		)
		.mutation(({ input: { userId, bookIds } }) => createOrder(userId, bookIds)),
});
