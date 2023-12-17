import CarsList from "../components/CarsList"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Pagination from "../components/Pagination"

function Cars(){
    const cars = 
        [
            {
                "id": 1,
                "name": "Honda Civic",
                "make": "Honda",
                "description": "Description 1"
            },
            {
                "id": 2,
                "name": "Toyota Cross",
                "make": "Toyota",
                "description": "Description 2"
            },
            {
                "id": 3,
                "name": "Nissan Rogue",
                "make": "Nissan",
                "description": "Description 3"
            },
            {
                "id": 4,
                "name": "Honda Accord",
                "make": "Honda",
                "description": "Description 4"
            },
            {
                "id": 5,
                "name": "Toyota Camry",
                "make": "Toyota",
                "description": "Description 5"
            },
            {
                "id": 6,
                "name": "Nissan Altima",
                "make": "Nissan",
                "description": "Description 6"
            }
        ]
    
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    {cars.map((car: any) => <CarsList key={car.id} name={car.name} description={car.description} />)}
                </div>
            </div>
            <br />
            <Pagination />
            <Footer />
        
        </div>
    )
} 


export default Cars