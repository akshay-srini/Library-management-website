import react from "react";
import { useState } from "react";
import Searchmodel from "./Searchmodel";
const Searchcard = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    // const [Booksperpage, setBooksperpage] = useState(5);
    // const [currentPage, setCurrentPage] = useState(1);

    // const numofTotalpages = Math.ceil((book.length)/Booksperpage);
    // const page = [...Array(numofTotalpages + 1).keys()].slice(1);
    
    // const indexofLastbook = currentPage * Booksperpage;
    // const indexofFirstbook = indexofLastbook - Booksperpage;

    // const visiblebookspage = .slice(indexofFirstbook,indexofLastbook)

    // const prevPageHandler = () => {
    //     if(currentPage != 1) setCurrentPage(currentPage-1)

    // }
    // const nextPageHandler = () => {
    //     if(currentPage != 1) setCurrentPage(currentPage+1)

    // }
    // console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            <div className="searchcard" onClick={()=>{setShow(true);setItem(item)}}>
                                
                                <img className="searchcard-name" src={thumbnail} alt="" />
                                <div>
                                <div className="searchcard-details-container">
                                    <h3 className="searchcard-title-name">{item.volumeInfo.title}</h3>
                                    <h3>- {item.volumeInfo.authors}</h3>

                                    <p className="amount">&#8377;{amount}</p>
                                    {/* <h1>{item.volumeInfo.title}</h1> */}
                                    <h4>Publisher: {item.volumeInfo.publisher}<br></br><span>Published Date:{item.volumeInfo.publishedDate}</span></h4><br/>
                                    {/* <a href={item.volumeInfo.previewLink}><button className="button_container button-26">More</button></a> */}
                                </div>
                            </div>
                              <Searchmodel show={show} item={bookItem} onClose={()=>setShow(false)}/>
                              </div>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default Searchcard;
