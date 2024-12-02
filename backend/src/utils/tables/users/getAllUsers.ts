import { client } from "prisma-connector";

export const getAllUsers = () => client.users.findMany();
