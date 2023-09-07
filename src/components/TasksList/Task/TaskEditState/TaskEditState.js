import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../Button/Button";
import Input from "../../../Input/Input";
import { customEditTask } from "../../../../store/todoReducer";

import "./TaskEditState.css";

const Edit = ({ task, setIsEditing }) => {
  const [inputValue, setInputValue] = useState(task.title);

  const dispatch = useDispatch();

  const UpdateTask = (e) => {
    e.preventDefault();
    const newTask = { ...task, title: inputValue };
    setIsEditing(false);
    return dispatch(customEditTask(newTask));
  };

  return (
    <div className="editTask">
      <Input value={inputValue} setInputValue={setInputValue} />
      <Button value="Update Task" onClick={UpdateTask} />
    </div>
  );
};
export default Edit;
