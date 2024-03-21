import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebase";

const SavedNotes = () => {
  const [notes, setNotes] = useState<
    { id: string; title: string; content: string }[]
  >([]);
  const [selectedNote, setSelectedNote] = useState<{
    id: string;
    title: string;
    content: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const notesCollection = collection(db, "notes");
      const querySnapshot = await getDocs(notesCollection);
      const notesData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, title: data.title, content: data.content }; // here we are setting the id, title, and content for the data from db.
      });
      setNotes(notesData);
    };
    fetchData();
  }, []);

  const handleNoteClick = (note: any) => {
    setSelectedNote(note);
  };

  const handleCloseModal = () => {
    setSelectedNote(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-4 rounded-md shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleNoteClick(note)}
          >
            <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
            <p className="text-gray-600">{note.content.substring(0, 50)}...</p>
          </div>
        ))}
      </div>
      {selectedNote && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <span
              className="absolute top-0 right-0 p-2 cursor-pointer"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4">{selectedNote.title}</h2>
            <p>{selectedNote.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedNotes;
