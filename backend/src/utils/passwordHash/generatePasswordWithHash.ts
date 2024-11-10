import bcrypt from "bcrypt";

/**
 * 새로운 비밀번호를 입력하면 salt와 hash를 반환합니다.
 *
 * @see https://bk0625.tistory.com/112
 * @see https://jisilver-k.tistory.com/63
 *
 * @param password 새로운 비밀번호
 * @returns
 */
export const generatePasswordWithHash = (password: string) => {
	const salt = bcrypt.genSaltSync(10);
	const hashed = bcrypt.hashSync(password, salt);

	return {
		salt,
		hashed,
	};
};
