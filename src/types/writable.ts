import type { Writable } from "svelte/store";
import type { Nullable } from "./common";

export type ReadableStore<T> = {
  get: () => Nullable<T>;
} & Writable<Nullable<T>>;

export type ReadableForeverStore<T> = {
  get: () => T;
} & Writable<T>;
