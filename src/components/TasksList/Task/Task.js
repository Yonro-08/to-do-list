import { useState } from "react";
import TaskEditState from "./TaskEditState/TaskEditState";
import TaskDefaultState from "./TaskDefaultState/TaskDefaultState";

const Task = ({ task, tasks, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <TaskEditState
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          setIsEditing={setIsEditing}
        />
      ) : (
        <TaskDefaultState
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          setIsEditing={setIsEditing}
        />
      )}
    </li>
  );
};
export default Task;
