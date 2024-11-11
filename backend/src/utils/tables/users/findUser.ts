import { client } from "../../../connectors";

/**
 * 사용자 ID를 통해 데이터를 조회합니다.
 *
 * @param userId 사용자 ID
 * @returns
 */
export const findUser = async (userId: string) => {
	return client.users.findFirst({
		where: {
			id: userId,
		},
	});
};
