"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/app/config/firebase";

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
    const booksCollection = collection(db, "books");
    const querySnapshot = await getDocs(booksCollection);
    const fetchBooks: Book[] = [];
    querySnapshot.forEach((doc) => {
      const bookData = doc.data();
      fetchBooks.push({
        title: bookData.title,
        author: bookData.author,
      });
    });
    setBooks(fetchBooks);
  };

  const addBook = async () => {
    if (title.trim() != " " && author.trim() != " ") {
      const newBook = { title, author };
      try {
        const docRef = await addDoc(collection(db, "books"), newBook);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setBooks([...books, { title, author }]);
      setTitle("");
      setAuthor("");
    }
  };

  const removeBook = async (index: number) => {
    const bookToRemove = books[index];
    const booksCollection = collection(db, "books");
    const querySnapshot = await getDocs(booksCollection);
    querySnapshot.forEach((doc) => {
      const bookData = doc.data() as Book;
      if (
        bookData.title === bookToRemove.title &&
        bookData.author === bookToRemove.author
      ) {
        deleteDoc(doc.ref);
      }
    });
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
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
          className="m-2"
        />
        <input
          type="text"
          placeholder="input author of book"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="m-2"
        />
        <Button onClick={addBook}>Add Book</Button>
        <ul>
          {books.map((book, index) => (
            <li key={index} className="p-2">
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
