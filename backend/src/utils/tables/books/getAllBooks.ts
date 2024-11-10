import { client } from "src/connectors";

/**
 * 모든 도서 정보를 로드하여 반환합니다
 * @returns
 */
export const getAllBooks = async () => {
  return await client.books.findMany();
};
