import React, { useState, useEffect } from 'react';
import hostelImage from './home.jpg';

const HomePageHero = () => {
  const [headerText, setHeaderText] = useState('Welcome to PalmHostel');
  const [subHeaderText, setSubHeaderText] = useState('Your alternate partner when left for campus accomodation');
  const [textIndex, setTextIndex] = useState(0);

  const handleTextChange = () => {
    const texts = [
      { header: 'Welcome to PalmHostel', subHeader: 'Your alternate partner when left for campus accomodation' },
      { header: 'Where do you want to go?', subHeader: 'Find hostel of your choice' },
      { header: 'Students at your glance', subHeader: 'Advertise your hostels for free' },
    ];

    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    setHeaderText(texts[textIndex].header);
    setSubHeaderText(texts[textIndex].subHeader);
  };

  useEffect(() => {
    const interval = setInterval(handleTextChange, 7000);
    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div className="relative">
      <img
        src={hostelImage}
        alt="Hostel"
        className="w-full h-screen object-cover md:block hidden"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-35 flex items-center justify-center">
        <div className="text-center text-white px-4">
          {/* Desktop version */}
          <div className="hidden md:block">
            <h1 className="text-6xl font-bold mb-4">{headerText}</h1>
            <p className="text-4x1 mb-8">{subHeaderText}</p>
          </div>
        </div>
      </div>
      {/* Phone version */}
      <div className="bg-gray-900 text-white p-8 md:hidden flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">{headerText}</h1>
        <p className="text-lg mb-8">{subHeaderText}</p>
      </div>
    </div>
  );
};

export default HomePageHero;