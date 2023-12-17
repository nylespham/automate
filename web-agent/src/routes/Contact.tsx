import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Contact(){
    const rows = 3
    return (
        <div>
            <Nav />
            <br />
            <div className="d-flex justify-content-center">
            <form className="row g-3">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={rows}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleDataList" className="form-label">Preferred Location</label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                <datalist id="datalistOptions">
                <option value="Bellevue"/>
                <option value="Tacoma"/>
                <option value="Seattle"/>
                <option value="Spokane"/>
                </datalist>
            </div>
            <div className="mb-3 d-flex justify-content-center">
            <button type="submit" className="btn mb-3 col-6 btn-dark">Submit Inquiry</button>
            </div>
            
            </form>
            </div>
            <Footer />
        </div>
    )
}