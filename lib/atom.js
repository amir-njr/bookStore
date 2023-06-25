import { atom } from "jotai";

const Setting = atom({
  loginToggle: false,
  asideToggle: false,
});

const BasketAtom = atom({
  selectedItems: [],
  totalCount : 0
});

export { BasketAtom, Setting };
