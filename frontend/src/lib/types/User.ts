import type { z } from "zod";
import { UserWithCredentialSchema } from "./UserWithCredential";

/**
 * 유저 정보 스키마
 */
export const UserSchema = UserWithCredentialSchema.omit({
	password: true,
	phone: true,
	detail_address: true,
});

/**
 * 유저 정보 인터페이스
 *
 * - `id` : 유저 ID
 * - `name` : 유저 이름
 * - `email` : 유저 이메일
 * - `sex` : 유저 성별
 */
export type User = z.infer<typeof UserSchema>;

export const isUser = (user: unknown): user is User =>
	UserSchema.safeParse(user).success;
