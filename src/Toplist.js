import react from "react"
import Booksinfo from "./Booksinfo"



export default function Toplist () {
    return (
        <section className="toplist" id="toplist">
            <h1 className="topname">Top 12 most recommended books</h1>
            <div className="contacts">
            <Booksinfo  
                img= "./images/book1.png"
                title = "Sapiens"
                name = "Yuval Noah Harari"
            />
            <Booksinfo  
                img="./images/book2.png"
                title = "The Alchemist"
                name = "Paulo Coelho"
            />
            <Booksinfo  
                img="./images/book3.png"
                title = "Thinking, Fast and Slow"
                name = "Daniel Kahneman"
            />
            <Booksinfo  
                img="./images/book4.png"
                title = "Zero to One"
                name = "Peter Thiel"
            />
            <Booksinfo  
                img= "./images/book5.png"
                title = "The 4-Hour Workweek"
                name = "Tim Ferriss"
            />
            <Booksinfo  
                img="./images/book6.png"
                title = "Meditations"
                
                name = "Marcus Aurelius"
            />
            <Booksinfo  
                img="./images/book7.png"
                title = "Influence"
                name = "Robert B. Cialdini, PhD"
            />
            <Booksinfo  
                img="./images/book8.png"
                title = "The Hard Thing About Hard Things"
                name = "Ben Horowitz"
            />
            <Booksinfo  
                img= "./images/book9.png"
                title = "Shoe Dog"
                
                name = "Phil Knight"
            />
            <Booksinfo  
                img="./images/book10.png"
                title = "Atlas Shrugged"
                
                name = "Ayn Rand"
            />
            <Booksinfo  
                img="./images/book11.png"
                title = "Principles"
                
                name = "Ray Dalio"
            />
            <Booksinfo  
                img="./images/book12.png"
                title = "Man's Search for Meaning"
                
                name = "Viktor E. Frankl"
            />
        </div>
        </section>
        )
}