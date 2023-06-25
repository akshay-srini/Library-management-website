import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchcard from "./Searchpage/Searchcard";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDm5oan4SrAgPJJLoW6BkiNvfejGaJmRQ8&maxResults=40`
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div>
      <Searchcard book={bookData} />
    </div>
  );
};

export default SearchResults;
