import { atom, useAtom } from "jotai";

import { mails } from "@/data/data";

const configAtom = atom({
  selected: mails[0].id,
});

export function useMail() {
  return useAtom(configAtom);
}
