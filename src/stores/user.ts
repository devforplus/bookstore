import { loadUserList } from "$lib/loadUserList";
import { UserSchema, type User } from "$lib/types/User";
import { writable } from "svelte/store";

export const user = writable<User | undefined>(undefined);
