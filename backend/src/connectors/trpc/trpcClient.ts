import { initTRPC } from "@trpc/server";

// https://trpc.io/docs/quickstart <- 이 문서를 참고하여 작성한 코드입니다.

// trpc client 생성
export const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
