import { useState } from "react";
import TaskEditState from "./TaskEditState/TaskEditState";
import TaskDefaultState from "./TaskDefaultState/TaskDefaultState";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <TaskEditState task={task} setIsEditing={setIsEditing} />
      ) : (
        <TaskDefaultState task={task} setIsEditing={setIsEditing} />
      )}
    </li>
  );
};
export default Task;
