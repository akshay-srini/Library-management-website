import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubjectPage = () => {
  const { subject } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params: {
              q: subject,
              maxResults: 20,
              key: "AIzaSyDm5oan4SrAgPJJLoW6BkiNvfejGaJmRQ8",
            },
          }
        );

        setBooks(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, [subject]);

  return (
    <div>
      <h1>Books on {subject}</h1>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors?.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default SubjectPage;
