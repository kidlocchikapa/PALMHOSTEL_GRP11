import React, { useState, useEffect } from 'react';
import hostelImage from "./images/home.jpg";

const HomePageHero = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [cost, setCost] = useState(0);
  const [searchText, setSearchText] = useState('');
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

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="relative">
      <img
        src={hostelImage}
        alt="Hostel"
        className="w-full h-screen object-cover md:block hidden"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-35 flex items-center justify-center">
        <div className="text-center text-white px-4">
          {}
          <div className="hidden md:block">
            <h1 className="text-6xl font-bold mb-4">{headerText}</h1>
            <p className="text-4x1 mb-8">{subHeaderText}</p>
            <div className="flex justify-center mb-4">
              <div className="relative">
              <input
                type="text"
                placeholder="Search hostel"
                value={searchText}
               onChange={handleSearchChange}
               className="px-4 py-2 rounded-l-md border border-black bg-white focus:outline-black focus:ring-2 focus:ring-blue-500"
               style={{ color: 'black' }}
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
                  Search
                </button>
              </div>
              <button
                className="ml-4 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                onClick={toggleFilters}
              >
                Filters
              </button>
            </div>
            {showFilters && (
              <div className="mt-4 bg-white text-black p-4 rounded shadow-md">
                <div className="mb-2">
                  {}
                </div>
                <div>
                  <label className="flex items-center">
                    <span className="mr-2">Cost:</span>
                    <input
                      type="text"
                      min="0"
                      max="10000"
                      value={cost}
                      onChange={handleCostChange}
                      className="form-range"
                    />
                    <span className="ml-2">K{cost}</span>
                  </label>
                </div>
              </div>
            )}
          
          </div>
        </div>
      </div>
      {}
      <div className="bg-gray-900 text-white p-8 md:hidden flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">{headerText}</h1>
        <p className="text-lg mb-8">{subHeaderText}</p>
        <div className="mb-4 w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search hostel"
              value={searchText}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 rounded-md border border-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-2">
              Search
            </button>
          </div>
        </div>
        {showFilters && (
          <div className="mt-4 bg-white text-black p-4 rounded shadow-md w-full">
            <div>
              <label className="flex items-center">
                <span className="mr-2">Cost:</span>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={cost}
                  onChange={handleCostChange}
                  className="form-range"
                />
                <span className="ml-2">${cost}</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageHero; 