import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { integratedRouter } from "./connectors/trpc/routers";

// NOTE: 문제가 생기면 아래 링크를 참고해주세요
// https://trpc.io/docs/server/adapters/express

const app = express();

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: integratedRouter,
	}),
);

app.listen(4000);
