"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
interface Book {
  title: string;
  author: string;
}

const ReadingList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (title.trim() != " " && author.trim() != " ") {
      setBooks([...books, { title, author }]);
      setTitle("");
      setAuthor("");
    }
  };

  const removeBook = (index: number) => {
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
