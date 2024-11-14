import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { IntegratedRouter } from "../connectors/trpc/routers/integratedRouter";

/**
 * TRPC Client 모듈
 */
export const client = createTRPCClient<IntegratedRouter>({
	links: [
		httpBatchLink({
			url: "http://192.168.0.22:4000/api",
		}),
	],
});
