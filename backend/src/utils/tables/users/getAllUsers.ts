import { client } from "prisma-connector";

export const getAllUsers = () =>
	client.users.findMany({
		include: {
			addresses: true,
		},
	});
