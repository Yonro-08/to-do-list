import { useState } from "react";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

import "./TaskEditState.css";

const Edit = ({ setIsEditing, tasks, setTasks, task }) => {
  const [inputValue, setInputValue] = useState(task.title);

  const updateTask = () => {
    const newTasks = [...tasks];
    newTasks.filter((elem, i, arr) => {
      if (task.id === elem.id) {
        arr[i] = { ...elem, title: inputValue };
        setTasks(arr);
      }
    });
    setIsEditing(false);
  };

  return (
    <div className="editTask">
      <Input value={inputValue} setInputValue={setInputValue} />
      <Button value="Update Task" onClick={updateTask} />
    </div>
  );
};
export default Edit;
