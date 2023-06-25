import react from "react"
import {AiOutlineInstagram,AiOutlineFacebook,AiFillTwitterSquare} from "react-icons/ai"
import Footer from "./Footer.js"
export default function Contactus () {
    return (
        <section className="contact-us" id="contact-us">
            <div className="contact-us-container">
                <h1 className="contact-us-name">Contact Us</h1>
                <p className="contactus-p">To subscribe to our newsletters!</p>
                <input type="text" className="contact-us-input" id="contact" placeholder="Email Address"></input>
                <button class="contact-us-button">Submit</button>
                <h3 className="contact-us-h3">Let's Connect</h3>
                <div className="contact-us-socials">
                   <a href="#"> <AiOutlineInstagram className="socials-size" /></a>
                   <a href="#"> <AiOutlineFacebook className="socials-size" /></a>
                   <a href="#">  <AiFillTwitterSquare className="socials-size" /></a>
                    
                </div>
            </div>
            <Footer />

        </section>
        )
}