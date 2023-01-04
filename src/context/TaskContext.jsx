import { createContext } from "react";
import { tasks as data } from "../data/tasks";
import { useState, useEffect } from "react";


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

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

  function deleteTask(taskId) {
    //alert(`eliminando... ${task.id}`);
    console.log(taskId);
    const newTasks = tasks.filter((task) => task.id != taskId); // true se quedan, false se quitan
    setTask(newTasks);
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
