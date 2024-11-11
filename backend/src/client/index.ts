import { createTRPCClient, httpBatchLink } from "@trpc/client";

/**
 * TRPC Client 모듈
 */
export const client = createTRPCClient({
	links: [
		httpBatchLink({
			url: "http://localhost:4000/api",
		}),
	],
});
