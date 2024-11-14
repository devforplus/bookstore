import { writable, type Readable } from "svelte/store";

import { Parser } from "@gregoranders/csv";

import type { User } from "$lib/types/User";
import type { UserWithCredential } from "$lib/types/UserWithCredential";

export const userList: Readable<User[] | undefined> = (() => {
	// 상태 생성
	const $userList = writable<User[] | undefined>(undefined);

	console.time("유저 리스트 로드");
	// 1. 데이터 로드(fetch)
	fetch("/userlist.csv")
		.then((res) => res.text())
		// 2. csv 데이터 해석
		.then((text) => new Parser().parse(text))
		// 3. 데이터 변환 (추상화)
		.then((parsed) => {
			return parsed
				.slice(1)
				.map((row) => {
					const [
						id,
                        name,
                        password,
                        sex,
                        email,
                        phone,
                        address,
                        detail_address,
					] = row;

					return {
                        id,
                        name,
                        password,
                        sex,
                        email,
                        phone,
                        address,
                        detail_address,
                    } as unknown as UserWithCredential;
				})
		})
		.then((users) => {
			$userList.set(
				users.map((user) => {
					const { id,name,password,sex,email,phone,address,detail_address } = user;

					return {
						id,
						name,
						password,
						sex,
						email,
						phone,
                        address,
                        detail_address
					};
				}),
			);
		})
		.then(() => {
			console.timeEnd("유저 리스트 로드");
		});

	return {
		subscribe: $userList.subscribe,
	};
})();
