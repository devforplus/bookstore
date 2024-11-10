import { client } from "src/connectors";

/**
 * 사용자의 장바구니 내용 가져오기
 *
 * @param userId 사용자 ID
 * @returns
 */
export const getAllBooksInCart = async (userId: string) => {
  return await client.carts.findMany({
    where: {
      cart_owner_id: userId,
    },
  });
};
