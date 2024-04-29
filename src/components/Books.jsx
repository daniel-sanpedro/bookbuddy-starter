import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
        );
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      {selectedBook ? (
        <div>
          <h2>{selectedBook.title}</h2>
          <p>Author: {selectedBook.author}</p>
          <img
            src={selectedBook.coverimage}
            alt={`Cover of ${selectedBook.title}`}
            style={{ width: "100px", height: "150px" }}
          />
          <p>{selectedBook.description}</p>
          <p>{selectedBook.available ? "Available" : "Checked Out"}</p>
          <button onClick={() => setSelectedBook(null)}>
            Back to Books List
          </button>
        </div>
      ) : books.length > 0 ? (
        books.map((book) => (
          <div
            key={book.id}
            onClick={() => handleBookClick(book)}
            style={{ cursor: "pointer" }}
          >
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;
