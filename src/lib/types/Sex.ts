import { z } from "zod";

export const SexSchema = z.enum(["남자", "여자"]);
export type Sex = z.infer<typeof SexSchema>;
