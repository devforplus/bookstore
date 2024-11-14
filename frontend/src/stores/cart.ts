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

/** 장바구니에 담긴 도서 수량 */
export const totalAmount = derived(cart, $cart => {
  return $cart.reduce((totalAmount, book) => {
    // TODO: book.quantity가 string인데 number로 정의됨. 타입 정리할 때 한 번에 하기
    const quantity = Number.parseInt(book.quantity ?? "1");
    return totalAmount + quantity
  }, 0);
})

/**
 * 장바구니에 담긴 책들의 총액
 */
export const totalPrice = derived(cart, $cart => {
  return $cart.reduce((totalPrice, book) => {
    const quantity = Number.parseInt(book.quantity ?? "1");
    return totalPrice + book.price * quantity;
  }, 0)
})