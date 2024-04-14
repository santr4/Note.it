"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// import { db } from "@/app/config/firebase";
// import {
//   addDoc,
//   collection,
//   onSnapshot,
//   query,
//   deleteDoc,
//   getDocs,
//   doc,
// } from "firebase/firestore";

import axios from "axios";

// const Todo = () => {
//   const [task, setTask] = useState("");
//   const [tasksArray, setTasksArray] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const todoCollection = collection(db, "todos");
//       const todoSnapshot = await onSnapshot(
//         query(todoCollection),
//         (snapshot) => {
//           const tasksData = snapshot.docs.map((doc) => doc.data().task);
//           setTasksArray(tasksData);
//         }
//       );
//     };
//     fetchData();
//   }, []);

//   const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTask(e.target.value);
//   };

//   const inputSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (task.trim()) {
//       await addDoc(collection(db, "todos"), { task });
//       setTasksArray([...tasksArray, task]);
//       setTask("");
//     }
//   };

//   const handleDelete = async (index: any) => {
//     const todoCollection = collection(db, "todos");
//     const snapshot = await getDocs(todoCollection);
//     const docId = snapshot.docs[index].id;
//     await deleteDoc(doc(todoCollection, docId));
//     setTasksArray(tasksArray.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <form onSubmit={inputSubmit}>
//         <input
//           type="text"
//           value={task}
//           onChange={inputChange}
//           placeholder="input a task"
//         />
//         <Button type="submit" className="m-2" size="sm">
//           +
//         </Button>
//       </form>
//       <ul>
//         {tasksArray.map((task, index) => (
//           <li key={index}>
//             {task}
//             <Button
//               onClick={() => handleDelete(index)}
//               className="m-2"
//               size="sm"
//             >
//               -
//             </Button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState<any>([]);

  useEffect(() => {
    fetchData(); // Fetch initial data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/get_todos/"); // Fetch todo items from Django backend
      console.log(response);
      setTasksArray(response.data.data); // Set fetched todo items to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const inputSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      try {
        console.log(task, "task");
        const sendObj = {
          title: task,
          completed: false,
        };
        await axios.post("http://localhost:8000/api/add_todos/", sendObj); // Add todo item to Django backend
        setTasksArray((prevTasks: any) => [...prevTasks, sendObj]); // Add new task to tasksArray state
        setTask("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      const headers = { "x-request-info": taskId };
      await axios.delete(`http://localhost:8000/api/delete-todos/`, {
        headers: headers,
      }); // Delete todo item from Django backend
      fetchData(); // Refresh todo list
    } catch (error) {
      console.error("Error deleting task:", error);
    }
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
        {tasksArray.map((task: any, index: any) => (
          <li key={index}>
            <div className="w-full flex justify-between my-5 border border-slate-500 px-2 py-3">
              <div>{task.title}</div>
              <div>
                <div>{task.completed.toString()}</div>
                <div>{task.created_at}</div>
              </div>
              <Button
                onClick={() => handleDelete(task.taskid)} // Assuming task has an 'id' property
                className="m-2"
                size="sm"
              >
                -
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
