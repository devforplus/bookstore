import { client } from "../../../connectors";
import { generatePasswordWithHash } from "../../../utils/passwordHash";
import type { PrismaMethodParameters } from "src/utils/prisma-types";

/**
 *
 * @param user 사용자 정보
 * @returns
 */
export const addUser = async (
	user: PrismaMethodParameters<"users", "create">["data"],
) => {
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
