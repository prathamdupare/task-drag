import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TaskCard = ({
  index,
  task,
  cost,
  title,
  setActiveCard,
  note,
  duration,
  startTime,
  endTime,
  cardClick,
}) => {
  return (
    <Card
      className="cursor-grab h-[200px]"
      draggable
      onDragStart={() => {
        setActiveCard(index);
      }}
      onDragEnd={() => setActiveCard(null)}
      onClick={() =>
        cardClick(title, status, cost, note, startTime, duration, endTime)
      }
    >
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardDescription>Cost - {cost}</CardDescription>
        <CardDescription>Note - {note}</CardDescription>
        <CardDescription>Duration - {duration} hr(s)</CardDescription>
        <CardDescription>Start Time - {startTime}</CardDescription>
        <CardDescription>End Time - {endTime}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TaskCard;
