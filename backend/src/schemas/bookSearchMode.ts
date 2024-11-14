import { z } from "zod";

export const BookSearchModeSchema = z.enum([
  "name",
  "description",
  "id",
  "all",
]);

/**
 * 책 검색 모드 스키마
 *
 * - `"name"`: 책의 "제목"을 기준으로 검색합니다.
 * - `"description"`: 책의 "설명"을 기준으로 검색합니다.
 * - `"all"`: 모든 요소를 대상으로 검색합니다.
 */
export type BookSearchMode = z.infer<typeof BookSearchModeSchema>;
