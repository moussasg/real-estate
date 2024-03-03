import React from "react";
import LobbyCard from "./LobbyCard";
import lob1 from "../imgs/LOBBY/lob1.jpg"
import lob2 from "../imgs/LOBBY/lob2.jpg"
import lob3 from "../imgs/LOBBY/lob3.jpg"


export default function Lobby() {
  const dataloby = [
    {
      image: lob1,
      title: "Grand Entrance",
      description: "Step into luxury as you enter our lobby, where opulent furnishings and a majestic chandelier create an atmosphere of elegance and sophistication.",
    },
    {
      image: lob2,
      title: "Modern Oasis",
      description: "Experience contemporary comfort in our lobby, featuring sleek design elements, abundant natural light, and inviting seating areas, perfect for relaxation and socializing.",
    },
    {
      image: lob3,
      title: "Artistic Haven",
      description: "Discover creativity in our lobby, where vibrant artworks and lush greenery come together to form a vibrant and inspiring space, welcoming residents and visitors alike.",
    },
  ];
  return (
    <div>
      <h1 className="text-center title-category mt-4" id='Lobby'>Lobby</h1>
      <p className='text-center'>Experience luxury from the moment you enter our grand lobby, where exquisite design elements, plush furnishings, and attentive concierge services create an ambiance of sophistication and warmth.</p>
      <br></br>
      {dataloby.map((x, xe) => (
        <LobbyCard
          key={xe}
          image={x.image}
          title={x.title}
          description={x.description}
        />
      ))}
    </div>
  );
}
