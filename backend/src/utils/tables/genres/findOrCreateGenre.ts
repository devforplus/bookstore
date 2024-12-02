import { client } from "prisma-connector";

/**
 * 해당 장르의 존재를 보장합니다.
 *
 * - 존재하지 않는 경우 생성하고, 존재하면 찾아서 반환합니다
 *
 * @param genre 장르 정보
 * @returns
 */
export const findOrCreateGenre = async (genre: string) => {
	return client.genres.upsert({
		where: {
			genre: genre,
		},
		create: {
			genre: genre,
		},
		update: {},
	});
};
