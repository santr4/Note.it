"use client";
import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState<string[]>([]);

  const inputChange = (e: any) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e: any) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask("");
    }
  };

  const handleDelete = (index: any) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={inputSubmit}>
        <input
          type="text"
          value={task}
          onChange={inputChange}
          placeholder="input a task"
        />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
