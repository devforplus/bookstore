import { z } from "zod";

/**
 * 유저 정보 스키마
 */
export const UserWithCredentialSchema = z.object({
	id: z.number().int().min(0),
	name: z.string(),
	password: z.string(),
	email: z.string().email(),
	sex: z.string(),
	phone: z.string(),
	delivery_address: z.string(),
});

/**
 * 유저 정보 인터페이스
 *
 * - `id` : 유저 ID
 * - `name` : 유저 이름
 * - `password` : 유저 비밀번호
 * - `email` : 유저 이메일
 * - `sex` : 유저 성별
 * - `phone` : 유저 폰 번호
 * - `delivery_address` : 유저 배송지
 */
export type UserWithCredential = z.infer<typeof UserWithCredentialSchema>;

export const isUserWithCredential = (
	user: unknown,
): user is UserWithCredential =>
	UserWithCredentialSchema.safeParse(user).success;
