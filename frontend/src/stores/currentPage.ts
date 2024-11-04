import { writable } from "svelte/store";

/** 페이지 번호 상태 (기본값: 0) */
export const currentPage = writable(0);
