import { client } from "src/connectors";

/**
 * 특정 장르를 제거합니다
 *
 * @param genreId 장르 ID
 */
export const removeGenre = async (genreId: number) => {
  return await client.genres.delete({
    where: {
      id: genreId,
    },
  });
};
