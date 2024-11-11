import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";

import { integratedRouter } from "./connectors/trpc/routers";

// NOTE: 문제가 생기면 아래 링크를 참고해주세요
// https://trpc.io/docs/server/adapters/express

const app = express();

app.use(cors());

app.use(
	"/api",
	createExpressMiddleware({
		router: integratedRouter,
	}),
);

app.listen(4000, () => {
	console.log("서버가 4000번 포트에서 활성화되었습니다.");
});
