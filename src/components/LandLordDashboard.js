import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ profile }) => {
  return (
    <div className="w-64 h-screen bg-gray-100 text-black fixed">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="p-5">
            <img src={profile.image} alt="Landlord" className="rounded-full h-24 w-24 mx-auto" />
            <h3 className="mt-4 text-center text-xl">{profile.name}</h3>
            <p className="text-center text-sm">{profile.phone}</p>
          </div>
          <nav className="mt-10">
            <Link to="/hostel-upload" className="block py-2.5 px-4 rounded text-center hover:bg-gray-700">Add Hostel</Link>
            <Link to="/logout" className="block py-2.5 px-4 rounded text-center hover:bg-gray-700">Logout</Link>
          </nav>
        </div>
        <div className="p-5">
        
        </div>
      </div>
    </div>
  );
};

const LandLordDashboard = () => {
  const [hostels, setHostels] = useState([]);
  const navigate = useNavigate();

  const landlordProfile = {
    image: 'https://via.placeholder.com/150',
    name: 'Lucy Sabola',
    phone: '0999888777',
  };

  useEffect(() => {
    const fetchHostels = async () => {
      // Replace with actual API call
      const mockHostels = [
        { id: 1, name: 'Apawo Compounds', location: 'Pamanda', cost: 'K 30,000', gender: 'Girls' },
        { id: 2, name: 'Petit', location: 'Small Bridge', cost: 'K 40,000', gender: 'Boys' },
        { id: 3, name: 'Blue Gate', location: 'Matiya', cost: 'K 38,000', gender: 'Girls & Boys' },
      ];
      setHostels(mockHostels);
    };
    fetchHostels();
  }, []);

  return (
    <div className="flex flex-row">
      <Sidebar profile={landlordProfile} />
      <div className="flex-1 ml-64 p-4">
        <h2 className="text-2xl font-bold text-center mb-4">Landlord Account Management</h2>
        <h3 className="text-xl font-semibold mb-4">My Hostels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hostels.map(hostel => (
            <div key={hostel.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold mb-2">{hostel.name}</h4>
              <p>Location: {hostel.location}</p>
              <p>Cost: {hostel.cost}</p>
              <p>Gender: {hostel.gender}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandLordDashboard;
