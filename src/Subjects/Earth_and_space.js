import React, { useEffect, useState } from "react";
import axios from "axios";

const AgricultureBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params: {
              q: "earth and space",
              maxResults: 10, // Specify the maximum number of results you want
              key: "AIzaSyDm5oan4SrAgPJJLoW6BkiNvfejGaJmRQ8", // Replace with your actual Google Books API key
            },
          }
        );

        setBooks(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="subject-element-page-container">
      <h1 className="subject-title">Books on Earth and Space</h1>
      {books.map((book) => (
        <div className="subject-element-container" key={book.id}>
          <div className="subject-element-style" key={book.id}>
            <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
          />
          <div className="subject-details-container">
            <h2 className="subject-details-title">{book.volumeInfo.title}</h2>
            <p className="subject-details-p">Author: {book.volumeInfo.authors?.join(", ")}</p>          
            <p>Published Date: {book.volumeInfo.publishedDate}</p>
          </div>
          
        </div>
        </div>
      ))}
    </div>
  );
};

export default AgricultureBooks;
