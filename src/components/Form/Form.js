import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { customAddTask } from "../../store/todoReducer";

import "./Form.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: new Date().getTime(),
      title: inputValue,
    };
    setInputValue("");
    return dispatch(customAddTask(task));
  };

  return (
    <form className="form">
      <Input
        value={inputValue}
        placeholder="What is the task today?"
        setInputValue={setInputValue}
      />
      <Button className="formBtn" value="Add Task" onClick={addTask} />
    </form>
  );
};

export default Form;
