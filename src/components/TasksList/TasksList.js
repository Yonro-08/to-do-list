import Task from "./Task/Task";
import "./TasksList.css";

function TaskList({ tasks, setTasks }) {
  return (
    <ul className="TasksList">
      {tasks.map((elem, i, arr) => {
        return (
          <Task key={elem.id} task={elem} tasks={arr} setTasks={setTasks} />
        );
      })}
    </ul>
  );
}

export default TaskList;
