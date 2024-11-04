import { sessionWritable } from "@macfja/svelte-persistent-store";

import type { Book } from "$lib/types/Book";
import { derived } from "svelte/store";

// TODO: 장바구니에 '갯수' 데이터 추가하기 (지금은 야매로, 나중에 시간있을 때 정식으로 추가하기)
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
export const cart = sessionWritable<(Book & { quantity: number })[]>("cart", []);

/**
 * 장바구니에 담긴 책들의 총액
 */
export const totalPrice = derived(cart, $cart => {
  return $cart.reduce((totalPrice, book) => totalPrice + book.price, 0)
})