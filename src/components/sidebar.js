import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import LandlordProfile from './LandlordProfile';

const Sidebar = ({ profile }) => {
  const navigate = useNavigate(); 

  const handleAddHostelsClick = () => {
    navigate('/add-hostels'); 
  };

  return (
    <div className="w-64 h-screen bg-white text-black flex flex-col p-4 ">
      <LandlordProfile profile={profile} />
      <button 
        onClick={handleAddHostelsClick} 
        className="block bg-blue-500 text-center py-2 rounded-md mb-4 hover:bg-blue-600"
      >
        Add Hostels
      </button>
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
