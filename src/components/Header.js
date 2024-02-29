import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import damaclogo from "../imgs/damaclogo.png";

const Header = () => {
    const [showCategory, setShowCategory] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Hide the "Category" dropdown when the location changes
        setShowCategory(false);
    }, [location]);

    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };

    const handleScrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                                <img src={damaclogo} alt="damaclogo" className="w-25" />
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={toggleCategory}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${showCategory ? "show" : ""}`} id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                {location.pathname !== "/about" && location.pathname !== "/contact" && (
                                    <li className="nav-item">
                                        <a className="nav-link" style={{ cursor: "pointer" }}>Category <i className="fas fa-chevron-down"></i></a>
                                        <ul className={`sub-ul ${showCategory ? "show" : ""}`}>
                                            <li><Link to="#" onClick={() => handleScrollToElement("architectures")}>Architectures</Link></li>
                                            <li><Link to="#" onClick={() => handleScrollToElement("amenities")}>Amenities</Link></li>
                                            <li><Link to="#" onClick={() => handleScrollToElement("apartment")}>Apartment</Link></li>
                                            <li><Link to="#" onClick={() => handleScrollToElement("gym")}>Gym</Link></li>
                                        </ul>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
