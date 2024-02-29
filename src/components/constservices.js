import React from "react";
import Architecture from "../imgs/architecture/safa park View.jpg"
import apartment from "../imgs/apartment/bedroom.jpg"
import gym from "../imgs/gym/6.jpg"
import spa from "../imgs/SPA/spa.jpg"
import lobby from "../imgs/LOBBY/lobby.jpg"
import Penthouse from "../imgs/Penthouse/penthouse.jpg"
import Amenities from "../imgs/amenities/amen.jpg"



import Services from "./services";
import Typewriter from "./typewriter";

const Serviceslist = () => {
  const services = [
    {
      title: "Architecture",
      description: "Discover",
      image: Architecture
    },
    {
      title: "Apartment",
      description: "Discover",
      image: apartment
    },
    {
      title: "Gym",
      description: "Discover",
      image: gym
    },
    {
      title: "SPA",
      description: "Discover",
      image: spa
    },
    {
      title: "LOBBY",
      description: "Discover",
      image: lobby
    },
    {
      title: "Penthouse",
      description: "Discover",
      image: Penthouse
    },
    {
        title: "Amenities",
        description: "Discover",
        image: Amenities
      },
  ];

  return (
    <section className="section-teams">
      <div className="container">
        <h1 className='text-center wow animate__animated animate__fadeInUp'>THE SAPHIRE</h1>
        <p className='text-center wow animate__animated animate__fadeInUp'>SHEIKH ZAYED ROAD</p>
        <br></br>
        <Typewriter/>
        <br></br>
        <br></br>

        <div className="container">
    <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
            <img src={spa} alt="spa" className="img-fluid rounded-end wow animate__animated animate__backInRight animate__slow"/>
        </div>
        <div className="col-md-6 order-md-1 p-4 wow animate__animated animate__fadeInUp">
            <h2 style={{ color: '#212529', fontWeight: 'bold' }}>Why Choose DAMAC Properties?</h2>
            <p style={{ color: '#6c757d' }}>DAMAC Properties has been at the forefront of the Middle East's luxury real estate market since 2002, delivering luxury residential, commercial, and leisure properties across the region.</p>
            <ul style={{ color: '#6c757d' }}>
                <li>46,000 Homes delivered</li>
                <li>33,000 In planning and progress</li>
                <li>100+ Awards received</li>
            </ul>
            <p style={{ color: '#6c757d' }}>As of 30th June, 2023</p>
        </div>
    </div>
</div>
<br></br>
<br></br>

        <h1 className='text-center wow animate__animated animate__fadeInUp'>Category</h1>
        <br></br>
        <div className="row wow animate__animated animate__fadeInUp animate__slow">
          {services.map((item, index) => (
            <Services key={index} image={item.image} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serviceslist;
