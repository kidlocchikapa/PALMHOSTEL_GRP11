import React from "react";
import Slider from "./Slider";
import AllHostels from "./AllHostels";

import KairaImage from "./images/kailaImage.jpeg";
import KateteImage from "./images/kateteImage.jpeg";
import PetitImage from "./images/PetitImage.jpeg";
import MimisImage from "./images/MimisImage.jpeg";
import bethImage from "./images/bethImage.jpeg";
import masterImage from "./images/masterImage.jpeg";
import makaImage from "./images/makaImage.jpeg";

const HostelCards = () => {
  const hostels = [
    {
      name: "Apawo Compounds",
      owner: "James Apawo",
      location: "Pamanda",
      cost: "K30,000 / student",
      amenities: "Fenced, Cooker, Single Rooms, 5 minutes to campus",
      gender: "Girls",
      image: KateteImage,
    },
    {
      name: "Petit",
      owner: "Alexis Peter",
      location: "Main bridge",
      cost: "K30,000 / student",
      amenities: "Fenced, Cooker, Single Rooms, 5 minutes to campus",
      gender: "Boys",
      image: PetitImage,
    },
    {
      name: "Mimis Compounds",
      owner: "Blessings Katete",
      location: "Pamanda",
      cost: "K30,000 / student",
      amenities: "Fenced, Cooker, Single Rooms, 12 minutes to campus",
      gender: "Girls",
      image: MimisImage,
    },
    {
      name: "Kaira BoysDen",
      owner: "Henly Kaira",
      location: "Matiya",
      cost: "K55,000 / student",
      amenities: "Single Rooms, 5 minutes to campus",
      gender: "Boys",
      image: KairaImage,
    },
    {
      name: "Hollywood",
      owner: "Brian Banda",
      location: "GoodMorning",
      cost: "K55,000 / student",
      amenities: "Cooker, Double Rooms, 10 minutes to campus",
      gender: "Boys",
      image: PetitImage,
    },
    {
      name: "3.75 Den",
      owner: "Master Banda",
      location: "pa Gwamba",
      cost: "K40,000 / student",
      amenities: "Fenced, Cooker, Single Rooms, 5 minutes to campus",
      gender: "Girls",
      image: masterImage,
    },
    {
      name: "Makawa Compounds",
      owner: "Janet Makawa",
      location: "Makawa",
      cost: "K50,000 / student",
      amenities: "Fenced, Cooker, Double Rooms, 15 minutes to campus",
      gender: "Girls",
      image: makaImage,
    },
    {
      name: "Bethrehem",
      owner: "tiwonge Banda",
      location: "Sothini",
      cost: "K30,000 / student",
      amenities: "Fenced, Cooker, Single Rooms, 5 minutes to campus",
      gender: "Girls",
      image: bethImage,
    },
  ];

  return (
    <div className="container mx-auto px-1 p-2 h-full">
      <h2 className="text-4xl font-bold mb-4 p-1">Recent Hostels</h2>
      <Slider hostels={hostels} />

      <h2 className="text-4xl font-bold mb-4 p-1">All Hostels</h2>
      <AllHostels hostels={hostels} />
    </div>
  );
};

export default HostelCards;
