import React from "react";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";
import { useRecoilState } from "recoil";
import { tasksAtom } from "@/app/recoilContextProvider";

const TaskColumn = ({ onDrop, status, cardClick }) => {
  const [tasks, setTasks] = useRecoilState(tasksAtom);
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="flex flex-col w-full h-full md:w-[200px]  gap-2 mx-5">
      <DropArea
        extra={filteredTasks.length === 0 ? "flex-grow h-full" : "h-[100px]"}
        onDrop={() => onDrop(status, 0)}
      />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <div key={index} className="">
              <TaskCard
                title={task.title}
                cost={task.cost}
                note={task.note}
                duration={task.duration}
                startTime={task.startTime}
                endTime={task.endTime}
                index={index}
                cardClick={cardClick}
              />

              <DropArea
                extra="h-[50px]"
                onDrop={() => onDrop(status, index + 1)}
              />
            </div>
          ),
      )}
    </div>
  );
};

export default TaskColumn;
