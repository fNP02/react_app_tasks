import { useState, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setDescription("");
    setTitle("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear Tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='bg-slate-300 p-3 w-full mb-2 rounded-md'
          autoFocus
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Añadir descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2 rounded-md'
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400 rounded-sm">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
