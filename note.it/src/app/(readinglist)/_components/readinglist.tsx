"use client";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   doc,
//   getDoc,
//   deleteDoc,
// } from "firebase/firestore";
// import { db } from "@/app/config/firebase";

interface Book {
  title: string;
  author: string;
}

const ReadingList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    // const booksCollection = collection(db, "books");
    // const querySnapshot = await getDocs(booksCollection);
    // const fetchBooks: Book[] = [];
    // querySnapshot.forEach((doc) => {
    //   const bookData = doc.data();
    //   fetchBooks.push({
    //     title: bookData.title,
    //     author: bookData.author,
    //   });
    // });
    // setBooks(fetchBooks);
    try {
      const response = await axios.get(
        "http://localhost:8000/api/get_readinglist/"
      );
      const fetchedBooks: Book[] = response.data.data.map((book: any) => ({
        task_id: book.task_id,
        title: book.title,
        author: book.author,
      }));
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("error fetching data: ", error);
    }
  };

  const addBook = async () => {
    if (title.trim() != " " && author.trim() != " ") {
      try {
        const newBook = { title, author };
        // try {
        //   const docRef = await addDoc(collection(db, "books"), newBook);
        //   console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //   console.error("Error adding document: ", e);
        // }
        await axios.post("http://localhost:8000/api/add_readinglist/", newBook);
        setBooks([...books, newBook]);
        setTitle("");
        setAuthor("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const removeBook = async (index: number) => {
    // const bookToRemove = books[index];
    // const booksCollection = collection(db, "books");
    // const querySnapshot = await getDocs(booksCollection);
    // querySnapshot.forEach((doc) => {
    //   const bookData = doc.data() as Book;
    //   if (
    //     bookData.title === bookToRemove.title &&
    //     bookData.author === bookToRemove.author
    //   ) {
    //     deleteDoc(doc.ref);
    //   }
    // });
    // const updatedBooks = [...books];
    // updatedBooks.splice(index, 1);
    // setBooks(updatedBooks);
    try {
      const bookToRemove = books[index];
      await axios.delete("http://localhost:8000/api/delete_readinglist/");
      const updatedBooks = [...books];
      updatedBooks.splice(index, 1);
      setBooks(updatedBooks);
    } catch (error) {
      console.log("error while removing book: ", error);
    }
  };

  return (
    <div>
      <h1>Reading List</h1>
      <div>
        <input
          type="text"
          placeholder="input title of book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="m-2 border border-zinc-600 p-2"
        />
        <input
          type="text"
          placeholder="input author of book"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="m-2 border border-zinc-600 p-2"
        />
        <Button onClick={addBook}>Add Book</Button>
        <ul className="p-4 m-2">
          {books.map((book, index) => (
            <li key={index} className="p-2 border border-zinc-900 m-4">
              <strong>{book.title}</strong> by {book.author}
              <Button onClick={() => removeBook(index)} className="m-3">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReadingList;
