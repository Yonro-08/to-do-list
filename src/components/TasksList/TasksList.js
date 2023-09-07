import { useSelector } from "react-redux";

import Task from "./Task/Task";

import "./TasksList.css";

function TaskList() {
  const tasks = useSelector((state) => state.todo);

  return (
    <ul className="TasksList">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}

export default TaskList;
