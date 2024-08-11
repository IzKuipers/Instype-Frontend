import { Announcement, LastSaid, Nickname, Texts } from ".";
import type { Listeners } from "../../types/listeners";

export const ListenerStore: Listeners = {
  "update-text": (nickname: string, content: string) => {
    const texts = Texts.get() || {};

    texts[nickname] = content;

    LastSaid.set(nickname);
    Texts.set(texts);
  },
  clients: (texts: Record<string, string>) => {
    Texts.set(texts);
  },
  leave: (nickname: string) => {
    Announcement.set(`${nickname} left the session`);

    const texts = Texts.get() || {};

    delete texts[nickname];

    Texts.set(texts);
  },
  join: (nickname: string) => {
    if (nickname !== Nickname.get())
      Announcement.set(`${nickname} joined the session`);

    const texts = Texts.get() || {};

    texts[nickname] = "";

    Texts.set(texts);
  },
};
