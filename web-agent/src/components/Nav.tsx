import automate from "../assets/automate.png";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={automate} style={ {width: "32px", height: "32px"} }/>Automate</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cars
                    </a>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/cars">Puchase New</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/cars">Purchase Used</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><NavLink className="dropdown-item" to="/cars/explore">Explore Alls</NavLink></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Get Started
                    </a>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/signin">Sign In</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/signout">Sign Out</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><NavLink className="dropdown-item" to="/">Become Our Partner</NavLink></li>
                    </ul>
                    </li>

                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}