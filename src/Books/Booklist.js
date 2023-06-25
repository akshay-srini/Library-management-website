import React,{useState,useEffect} from 'react';
import './Booksapp';
import {API_URL} from '../API'
import axios from 'axios';
import '../App.css';
const Booklist = () => {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then(res=> {
            console.log(res.data.items)
            setBooks(res.data)
        }).catch(err=>console.log(err))
    },[])

    return <div className="book-list">
        {books.map((items)=> (
            <div key={items.id}>
                <div className='books-list-contain'>
                    <div><h2>{items.volumeInfo.title}</h2></div>
                    {/* <div><img src={book.image_url} alt="" /></div> */}
                </div>
            </div>
        ))}
    </div>
}

export default Booklist;