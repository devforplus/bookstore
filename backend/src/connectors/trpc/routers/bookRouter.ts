import { booksCreateManyInputSchema } from "prisma-types";
import { router, procedure } from "../trpcClient";
import {
	addBooks,
	findBookById,
	findBooksByKeyword,
	getAllBooks,
} from "../../../utils/tables/books";
import { z } from "zod";
import { BookSearchModeSchema } from "../../../schemas";

export const bookRouter = router({
	getAllBooks: procedure.query(() => getAllBooks()),
	findBookById: procedure
		.input(
			z.object({
				userId: z.string(),
			}),
		)
		.query(({ input: { userId } }) => findBookById(userId)),
	findBooksByKeyword: procedure
		.input(
			z.object({
				keyword: z.string(),
				mode: BookSearchModeSchema,
			}),
		)
		.query(({ input: { keyword, mode } }) => findBooksByKeyword(keyword, mode)),
	addBooks: procedure
		.input(booksCreateManyInputSchema)
		.mutation(async (books) => {
			const { input } = books;
			return addBooks(input);
		}),
});
