import { writable } from 'svelte/store';

import type { Book } from '$lib/types/Book';

/**
 * ### 장바구니 상태
 * 
 * - `"new book data"`는 새로운 책 데이터를 의미함. `Book` 인터페이스에 맞게 작성하면 됨
 * 
 * @example
 * // In Svelte Component
 * $cart = [...$cart, {"new book data"}];
 * 
 * // In TypeScript
 * cart.update(prevCartList => [...prevCartList, "new book data"]);
 */
export const cart = writable<Book[]>([]);
