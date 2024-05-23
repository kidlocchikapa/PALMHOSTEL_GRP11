import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = ({ hostels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, []);

  const handlePrevClick = () => {
    if (!isTransitioning && currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (!isTransitioning && currentIndex < hostels.length - 4) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const isLastIndex = currentIndex === hostels.length - 4;
  const isFirstIndex = currentIndex === 0;

  return (
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
          style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          ref={sliderRef}
        >
          {hostels.map((hostel, index) => (
            <div key={index} className="flex-shrink-0 w-1/4 mr-4 bg-white rounded-lg shadow-md overflow-hidden m-4">
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
  );
};

export default Slider;