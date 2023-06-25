import React from "react"

// Challenge: fix the bug, now that we've destructured the props object
export default function Contact(props) {
    
    return (
        <div className="contact-card">
            <img src={props.img}></img>
            <h3>{props.title}</h3>
            <h3>- {props.name}</h3>
        </div>
    )
}
