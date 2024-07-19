"use client";

import React, { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
const CreateTask = ({
  addTask,
  title,
  setTitle,
  status,
  setStatus,
  cost,
  cardClick,
  setCost,
  note,
  setNote,
  setDuration,
  duration,
  endTime,
  setEndTime,
  isDialogOpen,
  setIsDialogOpen,
  startTime,
  setStartTime,
}) => {
  const calculateEndTime = () => {
    if (!startTime) return "";
    const [hours, minutes] = startTime.split(":");
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    date.setHours(date.getHours() + duration);
    const endHours = date.getHours().toString().padStart(2, "0");
    const endMinutes = date.getMinutes().toString().padStart(2, "0");
    return `${endHours}:${endMinutes}`;
  };

  const handleDurationChange = (amount) => {
    setDuration((prevDuration) => Math.max(1, prevDuration + amount));
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    const end = calculateEndTime();
    setEndTime(end);
  };

  return (
    <main>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Button
          onClick={(e) => {
            cardClick;
            setIsDialogOpen(true);
          }}
        >
          Add New Task
        </Button>
        <DialogContent>
          <Label>Task Title</Label>
          <Input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>Cost</Label>
          <Input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <br />
          <Label>Day</Label>
          <Input
            type="number"
            status={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <br />
          <Label>Notes</Label>
          <Input
            type="text"
            note={note}
            placeholder="Notes.."
            onChange={(e) => setNote(e.target.value)}
          />
          <br />
          <Label>Start Time:</Label>
          <Input
            type="time"
            value={startTime}
            onChange={handleStartTimeChange}
          />
          <div className="flex items-center  gap-3">
            <Label>Duration:</Label>
            <Button type="button" onClick={() => handleDurationChange(-1)}>
              -
            </Button>
            {duration}h
            <Button type="button" onClick={() => handleDurationChange(1)}>
              +
            </Button>
          </div>
          <br />
          <Label>End Time:</Label>
          <Input type="time" value={endTime} readOnly />
          <Button onClick={(e) => addTask(e)}>Add Task</Button>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default CreateTask;
