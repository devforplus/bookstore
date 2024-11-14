import { router } from "../trpcClient";
import { bookRouter } from "./bookRouter";
import { cartRouter } from "./cartRouter";
import { genreRouter } from "./genreRouter";
import { orderRouter } from "./orderRouter";
import { userRouter } from "./userRouter";

export const integratedRouter = router({
	book: bookRouter,
	cart: cartRouter,
	genre: genreRouter,
	order: orderRouter,
	user: userRouter,
});

export type IntegratedRouter = typeof integratedRouter;
