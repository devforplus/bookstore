import { client } from "../../../connectors";

// TODO: 계정을 삭제하지 않고, 비활성화 모드로 돌리려면 is_deleted 열을 추가하여 처리하세요.

/**
 * 특정 ID의 사용자 계정을 삭제합니다
 *
 * @param userId 사용자 ID
 * @returns
 */
export const removeUser = async (userId: string) => {
	return client.users.delete({
		where: {
			id: userId,
		},
	});
};
