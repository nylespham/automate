import { NavLink } from "react-router-dom"
import porsche from "../assets/porsche.jpg"

export default function CarsList(props: any){
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={porsche} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.key}</p>
            <p className="card-text">S{props.description}</p>
            <NavLink to="/cars/${props.id}" className="btn btn-primary">Go somewhere</NavLink>
        </div>
        </div>
    )
}