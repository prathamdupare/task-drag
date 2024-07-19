import React from "react";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({ setActiveCard, onDrop, status, tasks, cardClick }) => {
  return (
    <div className="flex flex-col w-[300px]  h-full gap-2 mx-5 ">
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <div key={index} className="">
              <DropArea extra="h-[50px]" onDrop={() => onDrop(status, 0)} />
              <TaskCard
                title={task.title}
                cost={task.cost}
                note={task.note}
                duration={task.duration}
                startTime={task.startTime}
                endTime={task.endTime}
                index={index}
                setActiveCard={setActiveCard}
                cardClick={cardClick}
              />
              <DropArea
                extra="h-[50px]"
                onDrop={() => onDrop(status, index + 1)}
              />
            </div>
          ),
      )}

      <DropArea extra="h-full" onDrop={() => onDrop(status, 0)} />
    </div>
  );
};

export default TaskColumn;
