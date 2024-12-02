import { client } from "../../../connectors";

/**
 * 사용자 ID를 통해 데이터를 조회합니다.
 *
 * @param userId 사용자 ID
 * @returns
 */

// Todo: userId가 입력값대로 데이터를 받지만 사용자를 찾을 수 없다고 나옴. 아마도 inject에서 사용자를 받지 못해서 일수도 있음

export const findUser = async (userId: string) => {
	console.log("findUser 호출됨, userId:", userId);
	const user = await client.users.findFirst({
		where: {
			id: userId,
		},
	});

	if (!user) {
		console.log("사용자를 찾을 수 없습니다:", userId);
	}

	return user;
};
