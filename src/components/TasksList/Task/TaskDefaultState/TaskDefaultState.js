import Button from "../../../Button/Button";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

import "./TaskDefaultState.css";

const TaskDefault = ({ tasks, setTasks, task, setIsEditing }) => {
  const editTask = () => {
    setIsEditing(true);
  };

  const deleteTask = () => {
    let newTasks = [...tasks];
    newTasks = newTasks.filter((elem) => task.id !== elem.id);
    setTasks(newTasks);
  };

  return (
    <div className="list">
      <h3>{task.title}</h3>
      <div className="TaskBtn">
        <Button value={<FiEdit />} onClick={editTask} />
        <Button value={<AiFillDelete />} onClick={deleteTask} />
      </div>
    </div>
  );
};

export default TaskDefault;
