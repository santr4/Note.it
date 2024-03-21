"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/app/config/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const todoCollection = collection(db, "todos");
      const todoSnapshot = await onSnapshot(
        query(todoCollection),
        (snapshot) => {
          const tasksData = snapshot.docs.map((doc) => doc.data().task);
          setTasksArray(tasksData);
        }
      );
    };
    fetchData();
  }, []);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const inputSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      await addDoc(collection(db, "todos"), { task });
      setTasksArray([...tasksArray, task]);
      setTask("");
    }
  };

  const handleDelete = async (index: any) => {
    const todoCollection = collection(db, "todos");
    const snapshot = await getDocs(todoCollection);
    const docId = snapshot.docs[index].id;
    await deleteDoc(doc(todoCollection, docId));
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
