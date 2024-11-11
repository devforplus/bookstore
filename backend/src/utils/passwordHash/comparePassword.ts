import bcrypt from "bcrypt";

/**
 * 암호화된 비밀번호가 유효한지 검사 및 반환합니다
 *
 * @param password 입력된 비밀번호
 * @param hashed 해싱된 비밀번호
 * @returns 비밀번호 유효성 (같음 여부)
 */
export const comparePassword = (password: string, hashed: string) => {
	return bcrypt.compareSync(password, hashed);
};
