import React from "react"
import ReactDOM from "react-dom"
import Signupnav from "./Signupnav"
// import Agriculture from "./Subjects/Agriculture"
import App from "./App"
import Searchapp from "./Searchpage/Searchapp.js"
import "./App.css"
import Booklist from "./Books/Booklist"
import { BrowserRouter as Router } from "react-router-dom"
import { Routes,Route,useNavigate } from "react-router-dom"


ReactDOM.render(
<React.StrictMode>
    <Router>
        <Signupnav />
    </Router>
</React.StrictMode>
        , document.getElementById("root"))