import type { client } from "prisma-connector";
import type { OmitDollarKeys } from "./utility-types";

/** Prisma Client */
type Client = typeof client;

/** Prisma 테이블 이름 타입 (Union Type) */
type TableKeys = Exclude<keyof OmitDollarKeys<Client>, symbol>;

/** Prisma 테이블의 메소드 파라미터 타입 */
type PrismaMethodParameters<
	K extends TableKeys,
	N extends keyof Client[K],
	// biome-ignore lint/suspicious/noExplicitAny: TODO: 현재 코드에서 any의 대체제가 없음
> = Client[K][N] extends (...args: any) => any
	? Required<Parameters<Client[K][N]>>[0]
	: never;

export type { PrismaMethodParameters };
