import type { Socket } from "socket.io-client";
import { ListenerStore } from "./store";

export async function addListeners(socket: Socket) {
  for (const [event, listener] of Object.entries(ListenerStore)) {
    socket.on(event, listener);
  }
}
