import CarsList from "../components/CarsList"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Cars(props: any){
    return (
        <div>
            <Nav />
            <CarsList />
            <Footer />
        </div>
    ) 
}