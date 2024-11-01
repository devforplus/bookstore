import { writable } from "svelte/store";

import type { Book } from "$lib/types/Book";

export const purchase = writable<Book | undefined>(undefined);
