"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useRecoilState } from "recoil";
import {
  costAtom,
  durationAtom,
  endTimeAtom,
  isDialogOpenAtom,
  noteAtom,
  startTimeAtom,
  statusAtom,
  titleAtom,
} from "@/app/recoilContextProvider";
const CreateTask = ({ cardClick, addTask }) => {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [cost, setCost] = useRecoilState(costAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [note, setNote] = useRecoilState(noteAtom);
  const [startTime, setStartTime] = useRecoilState(startTimeAtom);
  const [duration, setDuration] = useRecoilState(durationAtom);
  const [endTime, setEndTime] = useRecoilState(endTimeAtom);
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(isDialogOpenAtom);

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

          <Select onValueChange={(value) => setStatus(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Day" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Day 1</SelectItem>
              <SelectItem value="2">Day 2</SelectItem>
              <SelectItem value="3">Day 3</SelectItem>
              <SelectItem value="4">Unassigned</SelectItem>
            </SelectContent>
          </Select>

          <Label>Notes</Label>
          <Input
            type="text"
            note={note}
            value={note}
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
          <Button onClick={(e) => addTask(e)}>Add Task</Button>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default CreateTask;
