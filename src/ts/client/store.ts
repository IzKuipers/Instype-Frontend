import { Texts } from ".";
import type { Listeners } from "../../types/listeners";

export const ListenerStore: Listeners = {
  "update-text": (nickname: string, content: string) => {
    const texts = Texts.get() || {};

    texts[nickname] = content;

    Texts.set(texts);
  },
  clients: (texts: Record<string, string>) => {
    Texts.set(texts);
  },
  leave: (nickname: string) => {
    const texts = Texts.get() || {};

    delete texts[nickname];

    Texts.set(texts);
  },
  join: (nickname: string) => {
    const texts = Texts.get() || {};

    texts[nickname] = "";

    Texts.set(texts);
  },
};
