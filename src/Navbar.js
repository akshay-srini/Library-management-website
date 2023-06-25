import react, {useState} from "react"
import {BsSearch} from 'react-icons/bs'
import Searchbar from './Searchbar.js'
import Searchapp from './Searchpage/Searchapp.js'
import Login from './Login.js'
import {Routes,Route,Link} from 'react-router-dom'
export default function Navbar () {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    
    
    return (
        <nav>
            <div className="navbar">
                <a href="#"className="nav--name">King's library</a>
                <div>
                    <a href="#searchbar" onClick={closeMenu} className="nav--login-welcome">Hello! Welcome to King's Library</a>
                </div>
                   
                <div  className="login--border">
                    <a href="#subject" onClick={closeMenu} className="nav--login">Subjects</a>
                </div> 
                <div className="login--border">
                    <a href="#toplist" onClick={closeMenu} className="nav--login">Top 12</a>
                </div> 
                 <div className="login--border">
                    <a href="#contact-us" onClick={closeMenu} className="nav--login">Contact Us</a>
                </div> 
                <div className="login--border">
                    {/* <a href="./Signupnav.js" className="nav--login">SignUp</a> */}
                    <Link to = "/Login" className="nav--login">Sign Out</Link>
                </div>   
            </div>
        </nav>
        )
}