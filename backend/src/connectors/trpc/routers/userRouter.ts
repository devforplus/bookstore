import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { isNullish } from "remeda";

import { procedure, router } from "../trpcClient";
import {
	addUser,
	findUser,
	removeUser,
	updatePassword,
	verifyUser,
} from "../../../utils/tables/users";
import { AddUserArgsSchema } from "../../../schemas";

export const userRouter = router({
	addUser: procedure
		.input(AddUserArgsSchema)
		.mutation(({ input: newUser }) => addUser(newUser)),
	findUser: procedure
		.input(
			z.object({
				userId: z.string(),
			}),
		)
		.query(async ({ input: { userId } }) => {
			const result = await findUser(userId);

			if (isNullish(result))
				return new TRPCError({
					code: "BAD_REQUEST",
					message: "존재하지 않는 사용자입니다.",
				});

			return result;
		}),
	removeUser: procedure
		.input(z.object({ userId: z.string() }))
		.mutation(({ input: { userId } }) => removeUser(userId)),
	// TODO: 실제로는 이 과정에 쿠키를 추가하여 사용자 인증을 할 수 있지만,
	//       시간상 쿠키와 쿠키 데이터베이스 등을 구현 및 검증할 수 없으
	updatePassword: procedure
		.input(
			z.object({
				userId: z.string(),
				newPassword: z.string(),
			}),
		)
		.mutation(({ input: { userId, newPassword } }) =>
			updatePassword(userId, newPassword),
		),
	verifyUser: procedure
		.input(
			z.object({
				id: z.string(),
				password: z.string(),
			}),
		)
		.query(async ({ input: { id, password } }) => {
			try {
				const result = await verifyUser(id, password);

				// 비밀번호 틀림
				if (!result) {
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: "비밀번호가 틀렸습니다.",
					});
				}

				return result; // 비밀번호 일치
			} catch (error) {
				if (
					error instanceof Error &&
					error.message === "사용자 데이터가 존재하지 않습니다."
				) {
					throw new TRPCError({
						code: "UNAUTHORIZED",
						message: "존재하지 않는 사용자입니다.",
					});
				}
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "알 수 없는 오류가 발생했습니다.",
				});
			}
		}),
});
