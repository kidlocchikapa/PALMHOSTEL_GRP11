import React from 'react';
import LandlordImage from './LandlordImage.jpg';

const LandlordProfile = ({ profile }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-gray-300 rounded-lg mb-6"
      >
      <img 
        src={LandlordImage}
        alt="Profile" 
        className="w-60 h-60 rounded-full object-cover mb-4"
      />
      <h4 className="text-lg font-bold">{profile.name}</h4>
      <p className="text-sm text-black">{profile.phone}</p>
    </div>
  );
};

export default LandlordProfile;

