import { isNull } from "lodash";
import { findUser } from "./findUser";
import { comparePassword } from "../../../utils/passwordHash";

/**
 * 입력된 비밀번호가 유효한지 검사합니다.
 *
 * 반환값이 `Error | false`인 경우 유효하지 않은 비밀번호, `true`인 경우 유효한 비밀번호임.
 *
 * - `Error`: 존재하지 않는 사용자
 * - `false`: 유효하지 않은 비밀번호 (비밀번호 불일치)
 * - `true`: 유효한 비밀번호 (비밀번호 일치)
 *
 * @param id 사용자 ID
 * @param password 입력된 비밀번호
 * @returns
 */
// uuid로 입력을 하면 비밀번호 불일치라는 문구가 출력, userId로 입력하면 사용자 없음 출력
export const verifyUser = async (id: string, password: string) => {
	console.log("verifyUser 호출됨, id:", id);
	const user = await findUser(id);

	if (!user) {
		console.log("사용자 없음");
		throw new Error("사용자 데이터가 존재하지 않습니다.");
	}

	const isPasswordValid = await comparePassword(password, user.password);
	if (!isPasswordValid) {
		console.log("로그인 실패: 비밀번호 불일치");
		return false;
	}

	return true;
};
