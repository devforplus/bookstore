import { client } from "../../../connectors";

/**
 * 특정 장르를 제거합니다
 *
 * @param genreId 장르 ID
 */
export const removeGenre = async (genreId: number) => {
	return client.genres.delete({
		where: {
			id: genreId,
		},
	});
};
