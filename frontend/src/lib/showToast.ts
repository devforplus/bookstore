import type { ToastProps } from "flowbite-svelte/Toast.svelte";
import { toastList } from "../stores/toastList";

import { v4 } from "uuid";

/**
 * ### Toast 추가 함수
 *
 * @param props Toast 컴포넌트 속성 객체
 * @param delay 토스트 제거 딜레이 (단위: ms)
 */
export const showToast = (props: ToastProps, message: string, delay = 3000) => {
	const uuid = v4();
	// Toast 추가 로직
	toastList.update((list) => [
		...list,
		{
			uuid,
			message,
			...props,
		},
	]);
	// Toast 삭제 로직
	setTimeout(() => {
		toastList.update((list) => list.filter((toast) => toast.uuid !== uuid));
	}, delay);
};
