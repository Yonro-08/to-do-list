import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Form.css";

const Form = ({ setTasks }) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    setTasks((prev) => [
      ...prev,
      { id: new Date().getTime(), title: inputValue },
    ]);
    setInputValue("");
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
