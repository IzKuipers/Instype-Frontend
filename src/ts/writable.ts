import { get, writable } from "svelte/store";
import type { Nullable } from "../types/common";
import type { ReadableForeverStore, ReadableStore } from "../types/writable";

export function Store<T>(initial?: T): ReadableStore<T> {
  const store = writable<Nullable<T>>(initial);

  return { ...store, get: () => get(store) };
}

export function ForeverStore<T>(initial?: T): ReadableForeverStore<T> {
  const store = writable<T>(initial);

  return { ...store, get: () => get(store) };
}
