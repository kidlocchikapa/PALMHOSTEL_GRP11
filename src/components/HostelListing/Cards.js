import React from 'react';
import { FaBed, FaBullhorn, FaHome, FaInfoCircle } from 'react-icons/fa';

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center mb-4">
      <Card
        icon={<FaBed size={50} />}
        title="Find your uni-home"
        description="Find your university accomodation easily when left in campus."
        href="#"
      />
      <Card
        icon={<FaBullhorn size={50} />}
        title="Advertise your hostel for free"
        description="Landlords student bridge for hostels.sell them quick!."
        href="#"
      />
      <Card icon={<FaHome size={50} />} title="Hostels"
       description="Check all hostels by a single tap with palmHostel."
        href="#" />
      <Card
        icon={<FaInfoCircle size={50} />}
        title="About Us"
        description="Know more about PalmHostel your altenate patner."
        href="#"
      />
    </div>
  );
};

const Card = ({ icon, title, description, href }) => {
  return (
    <div className="w-full md:w-1/4 xl:w-1/4 p-6 text-center md:p-6 lg:p-6 sm:w-full sm:p-4">
      <a href={href} className="block shadow-md hover:shadow-lg transition duration-300">
        <div className="bg-white rounded-lg p-4 h-64 w-64 flex flex-col justify-center items-center sm:h-auto sm:w-full">
          {icon} 
          <h5 className="text-lg font-bold mb-2">{title}</h5>
          <p className="text-gray-600">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Cards;