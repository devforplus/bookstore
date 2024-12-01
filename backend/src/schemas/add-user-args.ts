import { z } from "zod";

export const AddUserArgsSchema = z.object({
	id: z.string(),
	name: z.string(),
	password: z.string(),
	sex: z.string(),
	email: z.string(),
	phone: z.string(),
	address: z.string(),
});

export type AddUserArgs = z.infer<typeof AddUserArgsSchema>;
