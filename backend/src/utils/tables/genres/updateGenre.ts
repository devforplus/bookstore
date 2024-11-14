import { client } from "../../../connectors";

/**
 * 장르 정보를 업데이트 합니다.
 *
 * @param genreId 장르 ID
 * @param genre 새로운 장르 이름
 */
export const updateGenre = async (genreId: number, genre: string) => {
	return client.genres.update({
		where: {
			id: genreId,
		},
		data: {
			genre,
		},
	});
};
