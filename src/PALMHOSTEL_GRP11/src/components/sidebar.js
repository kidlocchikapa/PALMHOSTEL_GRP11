// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LandlordProfile from './LandlordProfile';

const Sidebar = ({ profile }) => {
  return (
    <div className="w-64 h-screen bg-gray-10 text-black flex flex-col p-4">
      <LandlordProfile profile={profile} />
      <Link 
        to="#hostels" 
        className="block bg-blue-500 text-center py-2 rounded-md mb-4 hover:bg-blue-600"
      >
        Add Hostels
      </Link>
      <Link 
        to="/" 
        className="block bg-green-400 text-center py-2 rounded-md hover:bg-green-600"
      >
        Log Out
      </Link>
    </div>
  );
};

export default Sidebar;
