import type { Toast } from "$lib/types/Toast";
import { writable } from "svelte/store";

export const toastList = writable<Toast[]>([])