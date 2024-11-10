import { client } from "src/connectors";

/**
 * 새로운 장르 정보를 추가합니다
 *
 * @throws 이미 있는 장르를 추가하는 경우 Prisma가 "P2002" 오류를 반환합니다
 *
 * @param genre 장르 이름
 * @returns
 */
export const addGenre = async (genre: string) => {
  return await client.genres.create({
    data: {
      genre,
    },
  });
};
