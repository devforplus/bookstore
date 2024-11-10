import { client } from "src/connectors";

/**
 * 특정 주문을 취소합니다.
 *
 * @param userId 사용자 ID
 * @param orderId 주문 ID
 * @returns
 */
export const cancelOrder = async (userId: string, orderId: string) => {
  return await client.orders.updateMany({
    where: {
      orderer: userId,
      id: orderId,
    },
    data: {
      canceled: new Date(),
    },
  });
};
