import React from "react";
import damaclogo from "../imgs/damacwhite.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <img src={damaclogo} alt="dmaclogo" className="w-50"></img>
            <span className="footer-other-text d-block mt-3 mb-3">
              Sapphire Damac: A Haven of Luxury Living Discover Exquisite Living:
              Sapphire Damac - Where Luxury Meets Lifestyle
            </span>
            <div className="footer-social">
              <div className="footer-social-item">
                <i className="fab fa-facebook"></i>
              </div>
              <div className="footer-social-item">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="footer-social-item">
                {" "}
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <p className="footer-title">Menu</p>
            <ul className="footer-ul">
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <div>
              <p className="footer-title">Categories</p>
              <ul className="footer-ul">
                <li>Architectures</li>
                <li>Amenities</li>
                <li>LOBBY</li>
                <li>Apartment</li>
                <li>Gym</li>
                <li>SPA</li>
                <li>Penthouse</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <p className="footer-title">Contact</p>
            <ul className="footer-ul">
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-clock"></i>
                </div>{" "}
                <span>08:00-18:00</span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-envelope"></i>
                </div>{" "}
                <span>damac@gmail.com</span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-map-marker-alt"></i>
                </div>{" "}
                <span>Dubai </span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-phone-alt"></i>
                </div>{" "}
                <span> +971 4 520 5400</span>
              </li>
            </ul>
          </div>
          {/*<div className="col-lg-3 col-md-6">
                        <p className="footer-title">Subscribe</p>
                        <span className="footer-other-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                        </span>
                        <div className="subscribe-area mb-2 mt-2">
                            <input type="text" placeholder="Email" className="inp-footer w-100" />
                        </div>
                        <button className="btn-subscribe">Subscribe</button>
                    </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Footer;
