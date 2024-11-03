import type { ToastProps } from "flowbite-svelte/Toast.svelte";

/** Toast 알림 ID */
export type Toast = ToastProps & {uuid: string; message: string};