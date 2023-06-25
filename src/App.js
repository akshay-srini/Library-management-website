import React,{useState,useEffect} from "react"
// import { BookLoader } from "react-awesome-loaders";
import Signupnav from "./Signupnav.js"
import Navbar from "./Navbar.js"
import Hero from "./Hero.js"
import Records from "./Records.js"
import Subjects from "./Subjects.js"
import Toplist from "./Toplist.js"
import Preloader from "./Preloader.js"
import Contactus from "./Contactus.js"
import Searchitem from "./Searchpage/Searchitem.js"
// import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import Searchbar from "./Searchbar";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import { Routes, Route,Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./UserAuthContest.js";


function App() {
  return (
    <div className="container">
      
    <> 
        <Preloader />
        <Navbar />
        <Routes>
        {/* <Route exact path="/Home" component={Searchbar} /> */}
        <Route path="/results/" element={<SearchResults />} />
      </Routes>
        <Hero />
        <Records />
        <Subjects />
        <Toplist />
        <Searchitem />
        <Contactus />
        </>
    </div>
)
}

export default App;
