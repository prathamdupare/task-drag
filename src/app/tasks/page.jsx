"use client";

import React, { useEffect, useState } from "react";
import TaskColumn from "@/components/TaskColumn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import CreateTask from "@/components/CreateTask";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {
  activeCardAtom,
  costAtom,
  durationAtom,
  endTimeAtom,
  isDialogOpenAtom,
  noteAtom,
  startTimeAtom,
  statusAtom,
  tasksAtom,
  titleAtom,
} from "../recoilContextProvider";

const Page = () => {
  const [tasks, setTasks] = useRecoilState(tasksAtom);

  const [title, setTitle] = useRecoilState(titleAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [cost, setCost] = useRecoilState(costAtom);
  const [note, setNote] = useRecoilState(noteAtom);
  const [startTime, setStartTime] = useRecoilState(startTimeAtom);
  const [duration, setDuration] = useRecoilState(durationAtom);
  const [endTime, setEndTime] = useRecoilState(endTimeAtom);
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(isDialogOpenAtom);
  const [activeCard, setActiveCard] = useRecoilState(activeCardAtom);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going to be placed into ${status} and at the position ${position}`,
    );

    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];

    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updatedTasks);
  };

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      status: status,
      cost: cost,
      note: note,
      startTime: startTime,
      duration: duration,
      endTime: endTime,
    };
    setTasks([...tasks, newTask]);
    console.log(newTask);
  };

  const cardClick = (
    title,
    status,
    cost,
    note,
    startTime,
    duration,
    endTime,
  ) => {
    setTitle(title);
    setStatus(status);
    setCost(cost);
    setNote(note);
    setStartTime(startTime);
    setDuration(duration);
    setEndTime(endTime);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col m-5">
      <Link href="/" className="flex gap-2" prefetch={false}>
        <span className="font-bold">Task Planner</span>
      </Link>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <ScrollArea className="h-[85vh] w-full rounded-md border p-4">
            <div className="rounded-md mt-10 h-full flex flex-col md:flex-row">
              <div className="mx-5 border min-h-full flex">
                <div className="flex flex-col items-center ">
                  <p className="p-2 font-bold">Day 1</p>
                  <TaskColumn
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    status="1"
                    cardClick={cardClick}
                  />
                </div>
              </div>
              <div className="mx-5 border min-h-full flex">
                <div className="flex flex-col h-full items-center">
                  <p className="p-2 font-bold">Day 2</p>
                  <TaskColumn
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    status="2"
                    cardClick={cardClick}
                  />
                </div>
              </div>

              <div className="mx-5 border flex">
                <div className="flex flex-col items-center">
                  <p className="p-2 font-bold">Day 3</p>
                  <TaskColumn
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    status="3"
                    cardClick={cardClick}
                  />
                </div>
              </div>

              <div className="mx-5 border flex">
                <div className="flex flex-col items-center border-2 border-red-100">
                  <p className="p-2 font-bold">Unassigned</p>
                  <TaskColumn
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    status="Unassigned"
                    cardClick={cardClick}
                  />
                </div>
              </div>
              <CreateTask cardClick={cardClick} addTask={addTask} />
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
