import { client } from "src/connectors";

/**
 * 사용자 ID를 통해 데이터를 조회합니다.
 *
 * @param userId 사용자 ID
 * @returns
 */
export const findUser = async (userId: string) => {
	return await client.users.findFirst({
		where: {
			id: userId,
		},
	});
};
