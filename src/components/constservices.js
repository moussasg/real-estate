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
        <h1 className='text-center'>THE SAPHIRE</h1>
        <p className='text-center'>SHEIKH ZAYED ROAD</p>
        <br></br>
        <Typewriter/>
        <br></br>
        <h1 className='text-center'>Category</h1>
        <br></br>
        <div className="row">
          {services.map((item, index) => (
            <Services key={index} image={item.image} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serviceslist;
