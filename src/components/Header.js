import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import damaclogo from "../imgs/damaclogo.png";

const Header = () => {
  const [showCategory, setShowCategory] = useState(false); // showCategory fitrst false
  const location = useLocation();

  
  const toggleCategory = () => {
    setShowCategory(!showCategory); // when you click in button it will be true
  };
//
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
            <button
              className="navbar-toggler" // predifined bootstrap
              type="button"
              onClick={toggleCategory} // first it is false when you click it will be true
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${showCategory ? "show" : "" }`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                {/* if url not about and not contact => show category */}
                
                {location.pathname !== "/about" && location.pathname !== "/contact" && (

                    <li className="nav-item">
                      <div className="nav-link">
                        Category 
                        <i className="fas fa-chevron-down"></i>
                      </div>
                      <ul className={`sub-ul ${showCategory ? "show" : ""}`}>
                      <li>
                          <Link
                            to="#"
                            onClick={() => handleScrollToElement("Lobby")}
                          >
                            Lobby
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => handleScrollToElement("amenities")} // this is id of amenities
                          >
                            Amenities
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => handleScrollToElement("gym")}
                          >
                            Gym
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() =>
                              handleScrollToElement("architectures") // this is id of architectures
                            }
                          >
                            Architectures
                          </Link>
                        </li>
                   
                        <li>
                          <Link
                            to="#"
                            onClick={() => handleScrollToElement("apartment")}
                          >
                            Apartment
                          </Link>
                        </li>
                      
                     
                        {/* 
                        <li>
                          <Link
                            to="#"
                            onClick={() => handleScrollToElement("gym")}
                          >
                            SPA
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => handleScrollToElement("gym")}
                          >
                            Penthouse
                          </Link>
                        </li>
                        */}
                      </ul>
                    </li>
                  )}

{/* test*/}
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noopener noreferrer" href="https://www.gogovilage.com/post/exploring-nature-s-wonderland-a-journey-through-gogo-village" target="_blank">
                    Blog
                  </a>
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
