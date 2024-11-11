import { genresCreateInputSchema } from "prisma-types";
import { procedure, router } from "../trpcClient";
import {
	addGenre,
	getAllGenres,
	removeGenre,
	updateGenre,
} from "../../../utils/tables/genres";
import { z } from "zod";

export const genreRouter = router({
	addGenre: procedure
		.input(genresCreateInputSchema)
		.mutation(({ input: { genre } }) => addGenre(genre)),
	getAllGenres: procedure.query(() => getAllGenres()),
	removeGenre: procedure
		.input(z.object({ genreId: z.number().int() }))
		.mutation(({ input: { genreId } }) => removeGenre(genreId)),
	updateGenre: procedure
		.input(
			z.object({
				genreId: z.number().int(),
				genre: z.string(),
			}),
		)
		.mutation(({ input: { genreId, genre: newGenre } }) =>
			updateGenre(genreId, newGenre),
		),
});
