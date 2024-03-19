import { Button1 } from "./button1";
import TextareaComponent from "./textarea";
import { useState } from "react";
import { db } from "@/app/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Note = () => {
  const [value, setValue] = useState("");
  const handleSubmit = async () => {
    try {
      // Add note to Firestore
      const docRef = await addDoc(collection(db, "notes"), {
        content: value,
        timestamp: new Date(),
      });
      // Clear input field after saving
      setValue("");
      toast.success("succefully added!");
      console.log("Document written with ID: ");
    } catch (error) {
      toast.error("error occurred");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <TextareaComponent value={value} setValue={setValue} />
      <Button1 handleSubmit={handleSubmit} />
    </div>
  );
};
