import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { IntegratedRouter } from "../connectors/trpc/routers/integratedRouter";

/**
 * TRPC Client 모듈
 */
export const client = createTRPCClient<IntegratedRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:4000/api",
		}),
	],
});
