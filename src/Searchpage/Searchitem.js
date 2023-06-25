import react ,{useState}from "react";
import Searchcard from "./Searchcard";
import Searchbar from "../Searchbar";
import {BsSearch} from "react-icons/bs"

import Pagination from '../Pagination/Pagination';
import Navbar from "../Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
const Searchitem=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const [Booksperpage, setBooksperpage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const numofTotalpages = Math.ceil((bookData.length)/Booksperpage);
    const page = [...Array(numofTotalpages + 1).keys()].slice(1);
    
    const indexofLastbook = currentPage * Booksperpage;
    const indexofFirstbook = indexofLastbook - Booksperpage;

    const visiblebookspage = bookData.slice(indexofFirstbook,indexofLastbook)

    const prevPageHandler = () => {
        if(currentPage != 1) setCurrentPage(currentPage-1)

    }
    const nextPageHandler = () => {
        if(currentPage != 1) setCurrentPage(currentPage+1)

    }



    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDm5oan4SrAgPJJLoW6BkiNvfejGaJmRQ8'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = search.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <>
                
                {/* <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                     */}
                    <div className="search-bar" id = "searchbar">
                        
                        <h2 className="search-title">Want to search Something?</h2>
                    <div className="search-bar-container">
                        
                        <input class="search-bar-inside" type="text" placeholder="Type to search" value={search} onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}></input>  
                        {/* <BsSearch className="search-logo"/>   */}
                    </div>
                        {/* <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/> */}
                        {/* <button><i className="fas fa-search"></i></button> */}
                    </div>
                    <img src="./images/bg2.png" alt="" />
                
                    
                <Searchcard book={visiblebookspage}/>

                <div >
               
                

                    <div className="search-page-container">
                        <span className="button-26-prev" onClick={prevPageHandler}>prev</span>
                        <p>

                        {page.map((visiblebookpages) => 
                            (
                            <span keys={visiblebookpages} 
                            onClick={() => setCurrentPage(visiblebookpages)}
                            className={`$(currentPage === visiblebookpages ? "page-active" : " "} `}
                            >
                                {`${visiblebookpages} | `}
                                </span> 
                            ))}</p>

                        <span className="button-26-prev" onClick={nextPageHandler}>next</span> 
                    </div>
                    <p className="tot-books-p">Total no of Books: {bookData.length}</p>

                </div>
                    

              
        </>
    )
}
export default Searchitem;