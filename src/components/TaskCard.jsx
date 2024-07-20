import React from "react";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { useRecoilState } from "recoil";
import { activeCardAtom } from "@/app/recoilContextProvider";

const TaskCard = ({
  index,
  cost,
  title,
  note,
  duration,
  startTime,
  endTime,
  cardClick,
}) => {
  const [activeCard, setActiveCard] = useRecoilState(activeCardAtom);
  return (
    <Card
      className="cursor-grab h-[250px]"
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
