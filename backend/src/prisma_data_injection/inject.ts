import { readFileSync } from "fs-extra";
import { Parser } from "@gregoranders/csv";
import { filter, isEmpty, map, pipe } from "remeda";

import { client } from "../client/index";
import { isUndefined } from "lodash";

const userlist = readFileSync("./userlist.csv").toString();
const booklist = readFileSync("./booklist.csv").toString();

//Todo: 데이터 값이 장르만 저장이 됨, 책 정보는 단 하나도 저장이 안됨, 사용자도 저장이 안되는 거 같음, 근데 사용자는 prisma studio에서는 뜸(?)

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
const books = pipe(
	new Parser().parse(booklist).slice(1),
	map((row) => {
		const [
			_,
			title,
			genre,
			author,
			translator,
			publisher,
			publishedDate,
			isbn,
			pageCount,
			price,
		] = row;

		return {
			title,
			genre,
			author,
			translator,
			publisher,
			publishedDate,
			isbn,
			pageCount: Number.parseInt(pageCount),
			price: Number.parseInt(price),
		};
	}),
	// ISBN이 없는 책 거르기
	filter((book) => !isEmpty(book.isbn)),
);

const genres = books.map((book) => book.genre);

console.log(`장르 데이터 업로드 시작 (${genres.length})`);

(async () => {
	for (const genre of genres) {
		try {
			await client.genre.addGenre
				.mutate({
					genre,
				})
				.then((res) => console.log(res));
		} catch (err) {
			console.log(`[장르] ${genre} 무시됨`);
		}
	}
})();

(async () => {
	const genres = await client.genre.getAllGenres.query();

	for (const book of books) {
		const _genre = genres.find((genre) => genre.genre === book.genre);

		if (isUndefined(_genre)) {
			console.log(`[제목] ${book.title} 무시됨 (장르 정보 없음)`);
			continue;
		}

		try {
			await client.book.addBooks.mutate({
				id: book.isbn,
				name: book.title,
				author: book.author,
				cost: book.price,
				genre_id: _genre.id,
				price: book.price,
				quantity: 10,
				description: "",
			});
		} catch (err) {
			console.log(`[제목] ${book.title} 무시됨`);
			console.log(err);
		}
	}
})();

(async () => {
	for (const user of users) {
		try {
			await client.user.addUser.mutate({
				name: user.name,
				email: user.email,
				password: user.password,
				phone: user.phone,
				sex: user.sex,
				addresses: {
					create: {
						address: user.address,
						detailedAddress: "",
						zip_code: "",
					},
				},
				id: "",
			});
		} catch (err) {
			console.log(`[사용자] ${user.name} 무시됨`);
			console.log(err);
		}
	}
})();
