import { usersCreateInputSchema } from "prisma-types";
import { procedure, router } from "../trpcClient";
import { z } from "zod";
import {
	addUser,
	findUser,
	removeUser,
	updatePassword,
	verifyUser,
} from "src/utils/tables/users";
import { isError, isNull } from "lodash";
import { TRPCError } from "@trpc/server";

export const userRouter = router({
	addUser: procedure
		.input(usersCreateInputSchema)
		.mutation(({ input: newUser }) => addUser(newUser)),
	findUser: procedure
		.input(
			z.object({
				userId: z.string(),
			}),
		)
		.query(async ({ input: { userId } }) => {
			const result = await findUser(userId);

			if (isNull(result))
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
			const result = await verifyUser(id, password);

			// 존재하지 않는 사용자
			if (isError(result))
				return new TRPCError({
					code: "UNAUTHORIZED",
					message: "존재하지 않는 사용자입니다.",
				});
			// 비밀번호 틀림
			if (!result)
				return new TRPCError({
					code: "BAD_REQUEST",
					message: "비밀번호가 틀렸습니다.",
				});

			return result;
		}),
});
