import react from "react"
import { Link } from "react-router-dom"
import Subjectelement from "./Subjectelement.js"
import {BiChevronsDown} from "react-icons/bi"
import Agriculture from "./Subjects/Agriculture.js"

export default function Subjects () {
    return (
        <section className="subject" id="subject">
            <div className="subject-container">
                <h1 className="subject-title">Subjects</h1>
            
                <div className="subject-list">
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Agriculture">Agriculture</Link>
                        </div>
                    </div>
                    
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/History">History</Link>
                        </div>
                    </div>
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Fantasy">Fantasy</Link>
                        </div>
                    </div>
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/ArtificialIntelligence">Artificial Intelligence</Link>
                        </div>
                    </div>
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Narrative">Narrative</Link>
                        </div>
                    </div>
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Architecture">Architecture</Link>
                        </div>
                    </div>
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Romance">Romance</Link>
                        </div>
                    </div>
                    
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Thriller">Thriller</Link>
                        </div>
                    </div>
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Science">Science</Link>
                        </div>
                    </div>
                    
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Biography">Biography</Link>
                        </div>
                    </div>
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Mathematics_and_statistics">Mathematics</Link>
                        </div>
                    </div>
                    <div className="subject-element">
                        <div className="subject-name">
                        <Link to="/Earth_and_space">Earth and Space</Link>
                        </div>
                    </div>
                    
                    

                
                    
                </div>
            {/* <div className="subject-seemore">
                <p className="see-more-name">And many more<BiChevronsDown className="icon-seemore" /></p>
                
            </div> */}
            </div>

        </section>
        )
}