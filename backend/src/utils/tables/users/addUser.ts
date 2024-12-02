import { client } from "../../../connectors";
import type { AddUserArgs } from "../../../schemas";
import { generatePasswordWithHash } from "../../../utils/passwordHash";

/**
 *
 * @param user 사용자 정보
 * @returns
 */
export const addUser = async (user: AddUserArgs) => {
	const { password, name, phone, sex, email, address, id } = user;

	// 비밀번호 암호화
	const { hashed } = generatePasswordWithHash(password);

	return await client.users.create({
		data: {
			// 기존 사용자 데이터
			id,
			name,
			sex,
			phone,
			email,
			addresses: {
				// TODO: 추후 주소 데이터를 외부에서 입력받을 수 있도록 수정하기.
				// 현재는 프론트엔드도 상세주소와 우편번호를 받기에는 준비되지 않아서, 시간상 빈 문자열로 처리함.
				createMany: {
					data: {
						address: address,
						detailedAddress: "",
						zipCode: "",
					},
				},
			},
			// 생성된 해시
			password: hashed,
		},
		include: {
			addresses: true,
		},
	});
};
