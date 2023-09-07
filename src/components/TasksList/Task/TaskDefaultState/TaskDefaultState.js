import { useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

import Button from "../../../Button/Button";
import { customDeleteTask } from "../../../../store/todoReducer";

import "./TaskDefaultState.css";

const TaskDefault = ({ task, setIsEditing }) => {
  const dispatch = useDispatch();

  const deleteTask = (e) => {
    e.preventDefault();
    dispatch(customDeleteTask(task.id));
  };

  return (
    <div className="list">
      <h3>{task.title}</h3>
      <div className="TaskBtn">
        <Button value={<FiEdit />} onClick={() => setIsEditing(true)} />
        <Button value={<AiFillDelete onClick={deleteTask} />} />
      </div>
    </div>
  );
};

export default TaskDefault;
