import { client } from "src/connectors";

/**
 * 모든 장르 데이터를 호출 및 반환합니다
 * @returns
 */
export const getAllGenres = async () => {
	return client.genres.findMany();
};
