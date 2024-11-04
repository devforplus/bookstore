import { client } from "src/db";

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
