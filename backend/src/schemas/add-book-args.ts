import { z } from "zod";

export const AddBookArgsSchema = z.object({
	id: z.string(),
	author: z.string(),
	name: z.string(),
	cost: z.number(),
	price: z.number(),
	description: z.string(),
	quantity: z.number().min(0).int(),
	genre: z.string(),
});

export type AddBookArgs = z.infer<typeof AddBookArgsSchema>;
