import { loadBookList } from "$lib/loadBookList";
import type { Book } from "$lib/types/Book";
import { writable } from "svelte/store";

/**
 * ## 책 리스트 상태
 *
 * - 데이터가 로드되지 않았을 때는 `undefined`, 로드된 이후에는 `Book[]` 타입을 따릅니다.
 * - 데이터는 {@link loadBookList} 함수를 통해 로드할 수 있습니다.
 */
export const bookList = writable<Book[] | undefined>(undefined);
