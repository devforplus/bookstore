import { client } from "../../../connectors";

/**
 * 특정 사용자의 비밀번호를 업데이트합니다.
 *
 * **NOTE**: 반드시 권한 검증을 확실히 수행 후 사용해주세요. 함수 내에는 별도의 검증 과정이 포함되어 있지 않습니다.
 *
 * @param userId 사용자 ID
 * @param newPassword 새로운 비밀번호
 * @returns
 */
export const updatePassword = async (userId: string, newPassword: string) => {
	return client.users.update({
		where: {
			id: userId,
		},
		data: {
			password: newPassword,
		},
	});
};
