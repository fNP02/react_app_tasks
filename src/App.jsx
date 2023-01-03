import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tareas } from "./tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTask] = useState([]);


  useEffect(() => {
    setTask(tareas);
  }, []);
  console.log('ccc'+tasks);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask() {
    alert(`eliminando... ${task.id}`);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
