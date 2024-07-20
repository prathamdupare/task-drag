"use client";

import { atom, RecoilRoot } from "recoil";

const initialTasks = [
  { title: "Task 1: Setup Project", status: "1" },
  {
    title: "Dehradun Palace Sauna",
    status: "2",
    cost: 4000,
    duration: 2,
    note: "Purchase towels",
    startTime: "23:03",
    endTime: "23:03",
  },
  {
    title: "Task 2: Create Components",
    status: "1",
    cost: 4000,
    duration: 2,
    endTime: "23:03",
    note: "Hello",
    startTime: "23:03",
  },
  {
    title: "Book Flights to Iceland",
    status: "0",
    cost: 1200,
    duration: 0.5,
    note: "Check for best prices on flights",
    startTime: "09:00",
    endTime: "09:30",
  },
  {
    title: "Reserve Hotels in Reykjavik",
    status: "2",
    cost: 2000,
    duration: 1,
    note: "Prefer central locations for better access",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    title: "Organize Day Tours in Iceland",
    status: "3",
    cost: 1500,
    duration: 2,
    note: "Include glacier and volcano tours",
    startTime: "12:00",
    endTime: "14:00",
  },
  {
    title: "Prepare Travel Itinerary for Norway",
    status: "1",
    cost: 800,
    duration: 1.5,
    note: "Include museums and fjord sightseeing",
    startTime: "15:00",
    endTime: "16:30",
  },
  {
    title: "Confirm Transportation in Oslo",
    status: "2",
    cost: 300,
    duration: 1,
    note: "Check options for rental cars and public transport",
    startTime: "17:00",
    endTime: "18:00",
  },
];

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
