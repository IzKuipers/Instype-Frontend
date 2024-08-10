export type Listener = (...args: any[]) => void;
export type Listeners = Record<string, Listener>; // event, callback
