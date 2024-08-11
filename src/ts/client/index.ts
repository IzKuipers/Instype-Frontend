import type { Socket } from "socket.io-client";
import SocketIO from "socket.io-client";
import { Store } from "../writable";
import { addListeners } from "./listener";

export const Connected = Store<boolean>(false);
export const Nickname = Store<string>("");
export const Texts = Store<Record<string, string>>({});
export const LastSaid = Store<string>("");
export const Announcement = Store<string>("");

export let socket: Socket | null;

export async function ConnectAs(nickname: string) {
  socket = SocketIO(`https://insapi.sacruda.nl`);

  socket.connect();
  socket.on("connect_error", disconnect);
  socket.emit("activate", nickname);

  socket.on("connected", () => {
    Announcement.set(`Connected as ${nickname}`);
    Connected.set(true);
    Nickname.set(nickname);
  });

  socket.on("disconnect", () => {
    Announcement.set(`Disconnected!`);
    Connected.set(false);
    Nickname.set("");
  });

  addListeners(socket);

  return socket.connected;
}

export function disconnect() {
  console.log(`Disconnecting ${socket?.id}`);

  socket?.disconnect();
  socket = null;

  Connected.set(false);
  Nickname.set("");
}

export function activate() {
  if (!socket) throw new Error("Not initialized");

  socket.emit("activate", Nickname.get());
}
