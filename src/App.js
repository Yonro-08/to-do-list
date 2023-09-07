import { useState } from "react";

import Form from "./components/Form/Form";
import TasksList from "./components/TasksList/TasksList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hello" },
    { id: 2, title: "By" },
  ]);

  return (
    <div className="App">
      <div className="container">
        <h1 style={{ marginBottom: "20px" }}>Get Things Done!</h1>
        <Form />
        <TasksList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
