import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import apawoCompoundsImage from './images/apawo-compounds.jpg';
import hostelImage from './images/hostel.jpg';
import hollyWoodImage from './images/holly-wood.jpg';
import KairaImage from './images/kailaImage.jpeg';
import KateteImage from './images/kateteImage.jpeg';
import PetitImage from './images/PetitImage.jpeg';
import MimisImage from './images/MimisImage.jpeg';


const HostelCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hostels = [
    {
      name: 'Apawo Compounds',
      owner: 'James Apawo',
      location: 'Pamanda',
      cost: 'K30,000 / student',
      amenities: 'Fenced, Cooker, Single Rooms, 5 minutes to campus',
      gender: 'Girls',
      image: KateteImage,
    },
    {
      name: 'Mandele Hostels',
      owner: 'Mr Mandele',
      location: 'Small Bridge',
      cost: 'K40,000 / student',
      amenities: 'Fenced, Cooker, 5 minutes to campus',
      gender: 'Girls',
      image: KairaImage,
    },
    {
      name: 'Petit Hostels',
      owner: 'Alexis Peterson',
      location: 'Main Bridge',
      cost: 'K55,000 / student',
      amenities: 'Cooker, Fenced, Fridge, 2 minutes to campus',
      gender: 'Boys',
      image: PetitImage,
    },
    {
      name: 'Holly wood',
      owner: 'Henly Banda',
      location: 'Good Morning',
      cost: 'K45,000 / student',
      amenities: 'Cooker, No fence, Fridge, 4 minutes to campus',
      gender: 'Boys',
      image: apawoCompoundsImage,
    },
    {
      name: 'Kaira Compounds',
      owner: 'Alexis Peterson',
      location: 'Matiya',
      cost: 'K30,000 / student',
      amenities: 'Fridge, 8 minutes to campus, Single',
      gender: 'Boys',
      image: hollyWoodImage,
    },
    {
      name: 'Kidloc Compounds',
      owner: 'Peterson',
      location: 'Matiya',
      cost: 'K30,000 / student',
      amenities: 'Fridge, 5 minutes, Single',
      gender: 'Boys',
      image: hollyWoodImage,
    },
    {
      name: 'Masters Nest',
      owner: 'John Master',
      location: 'Matiya',
      cost: 'K30,000 / student',
      amenities: 'Fridge, 5 minutes, Single',
      gender: 'Boys',
      image: hollyWoodImage,
    },
    {
      name: 'Katete Compounds',
      owner: 'Blessings Katete',
      location: 'Small Bridge',
      cost: 'K30,000 / student',
      amenities: 'Fridge, 5 minutes, Single',
      gender: 'Boys',
      image: hollyWoodImage,
    },
    {
      name: 'Pascal Compounds',
      owner: 'Econoomics',
      location: 'Matiya',
      cost: 'K30,000 / student',
      amenities: 'Fridge, 5 minutes, Single',
      gender: 'Boys',
      image: hollyWoodImage,
    },
    {
      name: 'Bethrehem',
      owner: 'Tiwomge Stanfold',
      location: 'Matiya',
      cost: 'K30,000 / student',
      amenities: 'Fridge, 5 minutes, Single',
      gender: 'Boys',
      image: hollyWoodImage,
    },
    {
      name: 'Mimis Compounds',
      owner: 'Sabola Lucy',
      location: 'Matiya',
      cost: 'K30,000 / student',
      amenities: 'Fridge, 5 minutes, Single',
      gender: 'Boys',
      image: hollyWoodImage,
    },
    {
      name: 'Makawa Compounds',
      owner: 'Brian Makawa',
      location: 'Matiya',
      cost: 'K30,000 / student',
      amenities: 'Fridge, 5 minutes, Single',
      gender: 'Boys',
      image: hollyWoodImage,
    },
  ];

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < hostels.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      return;
    }
  };

  const isLastIndex = currentIndex === hostels.length - 1;
  const isFirstIndex = currentIndex === 0;

  return (
    <div className="container mx-auto px-1 p-2 h-full">
      <h2 className="text-4xl font-bold mb-4 p-1">Recent Hostels</h2>
      <div className="flex items-center mb-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handlePrevClick}
          disabled={isFirstIndex}
        >
          <FaChevronLeft />
        </button>
        <div className="flex overflow-x-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {hostels.slice(0, 8).map((hostel, index) => (
              <div key={index} className="flex-shrink-0 w-64 mr-4  bg-white rounded-lg shadow-md overflow-hidden m-4">
                <div className="p-4">
                  <img src={hostel.image} alt={hostel.name} className="w-full h-40 object-cover mb-4 rounded" />
                  <h3 className="text-lg font-bold mb-2">{hostel.name}</h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-bold">Owner:</span> {hostel.owner}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-bold">Location:</span> {hostel.location}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-bold">Cost:</span> {hostel.cost}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-bold">Gender:</span> {hostel.gender}
                  </p>
                  <p className="text-gray-600 mb-4">{hostel.amenities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={handleNextClick}
          disabled={isLastIndex}
        >
          <FaChevronRight />
        </button>
      </div>

      <h2 className="text-4xl font-bold mb-4 p-1">All Hostels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hostels.map((hostel, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md ">
            <div className="p-4">
            <img src={hostel.image} alt={hostel.name} className="w-full h-40 object-cover mb-4 rounded overflow-hidden" />
              <h3 className="text-lg font-bold mb-2">{hostel.name}</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Owner:</span> {hostel.owner}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Location:</span> {hostel.location}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Cost:</span> {hostel.cost}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Gender:</span> {hostel.gender}
              </p>
              <p className="text-gray-600 mb-4">{hostel.amenities}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelCards;