import React, { useState } from 'react';
import ChickenImage from './images/ChickenImage.jpg';
import Mexican from './images/Mexican.jpg';
import Baked from './images/Baked.jpg';

const FoodCards = () => {
  const [ratings, setRatings] = useState({});

  const foodItems = [
    {
      name: 'Zomba branch',
      description: 'The intermittent use of the "Zomba" term refers to the switch from light to heavy food - preparing heavily mixed chicken meal with high layers of flavor and satisfaction.',
      cost: 95000,
      image: ChickenImage,
    },
    {
      name: 'Blantyre',
      description: 'The establishment of this branch is also aimed at improving customer satisfaction by adding a touch of salami and mayonnaise to most of the meals, customers get a taste of Mediterranean.',
      cost: 95000,
      image: Baked,
    },
    {
      name: 'Lilongwe',
      description: 'The uniqueness of this menu is the "spicy" side of things - which is achieved by adding more spices and ingredients from different cultures, spices are fresh and homemade giving meals a distinct taste.',
      cost: 95000,
      image: Mexican,
    },
  ];

  const handleRating = (index, stars) => {
    setRatings({ ...ratings, [index]: stars });
  };

  const getRatingText = (rating) => {
    if (rating === 3) {
      return 'Not bad';
    } else if (rating === 4) {
      return 'Good';
    } else if (rating === 5) {
      return 'Excellent';
    } else {
      return '';
    }
  };

  return (
    <div className="flex flex-wrap justify-center bg-white py-8">
      {foodItems.map((item, index) => (
        <div
          key={index}
          className="max-w-screen-lg bg-gray-300 rounded-lg shadow-md overflow-hidden m-4 flex"
        >
          <div className="w-48  bg-white rounded-lg shadow-md m-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-4">K{item.cost}</p>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`text-xl cursor-pointer ${
                        starIndex < ratings[index]
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      onClick={() => handleRating(index, starIndex + 1)}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <span className="ml-2 font-semibold">
                  {getRatingText(ratings[index])}
                </span>
              </div>
              <button className="bg-white text-black py-2 px-4 rounded-md">
                Check In
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCards;