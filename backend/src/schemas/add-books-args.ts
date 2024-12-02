import { AddBookArgsSchema } from "./add-book-args";
import type { z } from "zod";

export const AddBooksArgsSchema = AddBookArgsSchema.array();

export type AddBooksArgs = z.infer<typeof AddBookArgsSchema>;
