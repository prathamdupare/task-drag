"use client";

import { atom, RecoilRoot } from "recoil";
import { initialTasks } from "./constants/initialTasks";

export const tasksAtom = atom({
  key: "tasks",
  default: initialTasks,
});

export const titleAtom = atom({
  key: "title",
  default: "",
});

export const statusAtom = atom({
  key: "status",
  default: "",
});

export const costAtom = atom({
  key: "cost",
  default: null,
});

export const noteAtom = atom({
  key: "note",
  default: "",
});

export const startTimeAtom = atom({
  key: "startTime",
  default: "",
});

export const durationAtom = atom({
  key: "atom",
  default: 1,
});

export const endTimeAtom = atom({
  key: "endTime",
  default: "",
});

export const isDialogOpenAtom = atom({
  key: "isDialogOpen",
  default: false,
});

export const activeCardAtom = atom({
  key: "activeCard",
  default: null,
});

export default function RecoilContextProvider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
