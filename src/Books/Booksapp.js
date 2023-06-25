import React,{useState,useEffect} from "react"

import { Routes, Route } from 'react-router-dom';
import Booklist from './Booklist';
import Bookdetails from './Bookdetails';



function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/book/:id" element={<Bookdetails />} />
      </Routes>
    </div>
)
}

export default App;
