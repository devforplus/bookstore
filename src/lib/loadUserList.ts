import type { User } from "./types/User";

export const loadUserList = async (Id: number): Promise<User[]> => {
	return [
		{
			id: 1,
			name: "이지현",
			password: "to1074",
			email: "plus34566@naver.com",
			sex: "여자",
			phone: "010-9144-2158",
			delivery_address: "김해시",
		},
	];
};
