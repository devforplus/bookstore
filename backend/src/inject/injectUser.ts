import fs from "fs-extra";
import { Parser } from "@gregoranders/csv";
import { map, pipe } from "remeda";
import { join } from "node:path";

import { client } from "../client/index";

const dirname = import.meta.dirname;
const userlist = fs.readFileSync(join(dirname, "userlist.csv")).toString();

const users = pipe(
	new Parser().parse(userlist).slice(1),
	map((row) => {
		const [id, name, password, sex, email, phone, address, detail_address] =
			row;

		return {
			id,
			name,
			password,
			sex,
			email,
			phone,
			address,
			detail_address,
		};
	}),
);

(async () => {
	for (const user of users) {
		try {
			await client.user.addUser.mutate({
				name: user.name,
				email: user.email,
				password: user.password,
				phone: user.phone,
				sex: user.sex,
				address: user.address,
				id: user.id,
			});
		} catch (err) {
			// @ts-ignore
			console.log(`[사용자] ${user.name} 무시됨 (${err?.data?.code})`);
		}
	}
})();
