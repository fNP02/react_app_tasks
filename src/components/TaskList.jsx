import TaskCard from "./TaskCard";

function TaskList(tasks, deleteTask) {
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <div>
      {/* {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))} */}
    </div>
  );
}

export default TaskList;
