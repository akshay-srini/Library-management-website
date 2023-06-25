import react from "react"

export default function records () {
    return (
        <section className="records" id="records">
            <div className="record--container">
                <h1 className="record-name">Records</h1>
                <div className="record-box">
                    <h1 className="record-element"><span className="record-element-size">1,600+</span><br></br>Journals</h1>
                    <h1 className="record-element"><span className="record-element-size">250+</span><br></br>Reference papers</h1>
                    <h1 className="record-element"><span className="record-element-size">22,000+</span><br></br>Online Books</h1>
                </div>
                <p className="quote">Warren Buffett was once asked about the key to <span className="underline">success</span>, he pointed to a stack of nearby <span className="underline-3">books</span> and said, "<span className="underline-4">Read</span> 500 pages like this every day. That's how <span className="underline">knowledge</span> works. It builds up, like compound interest. All of <span className="underline">you can do it</span>, but I guarantee not many of you will do it."</p>
            </div>
        </section>
        )
}