import { atom } from "recoil";

export const fileAtom = atom<null | string>({
    key:"fileAtom",
    default:"null"
})