
import React, { useState, useRef, useCallback } from 'react'
import Booksearch from './Booksearch'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Searchapp from './Searchpage/Searchapp'
function search() {
    // Get the input element
    var searchInput = document.getElementById("searchInput");
  
    // Get the value of the input field
    var searchTerm = searchInput.value;
  
    // Do something with the search term
    console.log(searchTerm);
    // You can perform further actions with the search term, such as filtering data, making API requests, etc.
  }

export default function Searchbar () {

    return (
        <div className="search-bar" id="searchbar">  
                <form>
                <Link to="/searchapp" className="signup-link"><BsSearch className='Bssearch-size'/>Search</Link>
                    
                    <input type="search" id="searchInput" className="search-bar-inside" placeholder=" Type to Search"></input>
                    
                        
                    {/* <button onclick="search()">Search</button>   */}
                    </form>           
        </div>
        )
}