"use client";

import React, { useEffect, useState } from "react";
import TaskColumn from "@/components/TaskColumn";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";

import CreateTask from "@/components/CreateTask";

const initialTasks = [
  { title: "Task 1: Setup Project", status: "1" },

  {
    title: "Dehradun Palace Sauna",
    status: "4",
    cost: 4000,
    duration: 2,
    note: "Purchase towels",
    startTime: "23:03",
    endTime: "23:03",
  },

  {
    title: "Task 2: Create Components",
    status: "2",
    cost: 4000,
    duration: 2,
    endTime: "23:03",
    note: "Hello",
    startTime: "23:03",
  },

  {
    title: "Book Flights to Iceland",
    status: "1",
    cost: 1200,
    duration: 0.5,
    note: "Check for best prices on flights",
    startTime: "09:00",
    endTime: "09:30",
  },

  {
    title: "Reserve Hotels in Reykjavik",
    status: "3",
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

const Page = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [cost, setCost] = useState(null);
  const [note, setNote] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(1); // in hours
  const [endTime, setEndTime] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [activeCard, setActiveCard] = useState(null);

  const [currentDay, setCurrentDay] = useState(1); // Manage current day with state

  const maxDays = 5;

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
    <div className="flex flex-row m-5">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="day">Day</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <ScrollArea className="h-[85vh] w-full rounded-md border p-4">
            <div className="rounded-md mt-10 h-screen flex flex-row">
              <div className="mx-5 border  flex">
                <div className="flex flex-col items-center ">
                  <p className="p-2 font-bold">Day 1</p>
                  <TaskColumn
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    status="1"
                    tasks={tasks}
                    cardClick={cardClick}
                  />
                </div>
              </div>
              <div className="mx-5 border  flex ">
                <div className="flex  flex-col items-center">
                  <p className="p-2 font-bold">Day 2</p>
                  <TaskColumn
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    status="2"
                    tasks={tasks}
                    cardClick={cardClick}
                  />
                </div>
              </div>

              <div className="mx-5 border  flex ">
                <div className="flex  flex-col items-center">
                  <p className="p-2 font-bold">Day 3</p>
                  <TaskColumn
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    tasks={tasks}
                    status="3"
                    cardClick={cardClick}
                  />
                </div>
              </div>

              <div className="mx-5 border  flex ">
                <div className="flex  flex-col items-center">
                  <p className="p-2 font-bold">Day 4</p>
                  <TaskColumn
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    status="4"
                    tasks={tasks}
                    cardClick={cardClick}
                  />
                </div>
              </div>
              <CreateTask
                addTask={addTask}
                setTitle={setTitle}
                setStatus={setStatus}
                title={title}
                status={status}
                cost={cost}
                setCost={setCost}
                note={note}
                setNote={setNote}
                startTime={startTime}
                setStartTime={setStartTime}
                duration={duration}
                setDuration={setDuration}
                endTime={endTime}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                setEndTime={setEndTime}
              />
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
