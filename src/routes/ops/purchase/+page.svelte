<script lang="ts">
	// TODO: 결제 페이지인 것 같음, 기능 추가하기
	// 기존에는 바로 구매 버튼을 통해 이동했던 것 같음

	import { cart } from '../../../stores/cart';

	/**
	 * 책 총 가격
	 * - `undefined`: "알 수 없음", "아직 책 총 가격이 계산되지 않음"
	 */
	let totalPrice: number | undefined = undefined;

	// 책 총 가격 업데이트
	$: totalPrice = $cart.reduce((totalPrice, book) => totalPrice + book.price, 0);

	// Todo : 장바구니에 있는 데이터를 purchase로 옮겨서 총 금액 출력 및 구매하기 기능 추가
</script>

<div>
	현재 장바구니에 들어간 책들의 총 가격: {Intl.NumberFormat('ko-KR').format(totalPrice)}
</div>
