import React from "react"
import {Link} from "react-router-dom"
import damaclogo from "../imgs/damaclogo.png"
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                               <img src={damaclogo} alt="damaclogo" className="w-25"></img>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Category <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><Link to="#">Architectures</Link></li>
                                        <li><Link to="#">Amenities</Link></li>
                                        <li><Link to="#">LOBBY</Link></li>
                                        <li><Link to="#">Apartment</Link></li>
                                        <li><Link to="#">Gym</Link></li>
                                        <li><Link to="#">SPA</Link></li>
                                        <li><Link to="#">Penthouse</Link></li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;