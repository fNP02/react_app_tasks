function TaskCard({task}) {
  
  

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
