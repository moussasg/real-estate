import React from "react";
import TeamItem from "./TeamItem";
import parktoseaone from "../imgs/park to sea 1.jpg";
import safapark from "../imgs/safa park View.jpg";
import teraceupdate from "../imgs/terrace update 1.jpg";
import towerdayone from "../imgs/tower day 1.jpg";
import citynight from "../imgs/city night.jpg";
import entrance from "../imgs/Entrance View.png";

const TeamList = () => {
  const teamItems = [
    {
      title: "City Night",
      description: "Description",
      image: citynight
    },
    {
      title: "Park to Sea",
      description: "Description",
      image: parktoseaone
    },
    {
      title: "Safa Park View",
      description: "Description",
      image: safapark
    },
    {
      title: "Terrace Update",
      description: "Description",
      image: teraceupdate
    },
    {
      title: "Tower Day",
      description: "Description",
      image: towerdayone
    },
    {
      title: "Entrance View",
      description: "Description",
      image: entrance
    }
  ];

  return (
    <section className="section-teams">
      <div className="container">
        <h1 className="text-center title-category" id='architectures'>Architectures</h1>
        <p className='text-center'>Explore our meticulously designed properties, crafted by renowned architects to blend functionality with aesthetic appeal, ensuring a timeless and sophisticated living experience</p>
        <br></br>
        <div className="row">
          {teamItems.map((item, index) => (
            <TeamItem key={index} image={item.image} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamList;
