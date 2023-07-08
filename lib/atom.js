import { atom } from "jotai";

const Setting = atom({
  loginToggle: false,
  asideToggle: true,
});

const BasketAtom = atom({
  selectedItems: [],
  totalCount : 0
});

export { BasketAtom, Setting };
