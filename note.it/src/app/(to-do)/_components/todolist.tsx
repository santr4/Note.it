"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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
        <Button type="submit" className="m-2" size="sm">
          +
        </Button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index}>
            {task}
            <Button
              onClick={() => handleDelete(index)}
              className="m-2"
              size="sm"
            >
              -
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
