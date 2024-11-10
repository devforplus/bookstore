import { client } from "src/connectors";

import type { z } from "zod";
import type { usersCreateInputSchema } from "prisma-types";
import { generatePasswordWithHash } from "src/utils/passwordHash";

type User = z.infer<typeof usersCreateInputSchema>;

/**
 *
 * @param user 사용자 정보
 * @returns
 */
export const addUser = async (user: User) => {
	const { password } = user;

	// 비밀번호 암호화
	const { hashed } = generatePasswordWithHash(password);

	return client.users.create({
		data: {
			// 기존 사용자 데이터
			...user,
			// 생성된 해시
			password: hashed,
		},
	});
};
