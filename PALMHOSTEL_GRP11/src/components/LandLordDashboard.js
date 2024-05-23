// src/components/LandLordDashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';

const LandLordDashboard = () => {
  const [hostels, setHostels] = useState([]);

  const landlordProfile = {
    image: 'https://via.placeholder.com/150', 
    name: 'Lucy sabola',
    phone: '0999888777',
  };

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const mockHostels = [
          { id: 1, name: ' Apawo compounds', Location: 'Pamanda', cost: 'K 30,000', gender: 'Girls' },
          { id: 2, name: ' Petit', Location: 'Small bridge', cost: 'K 40,000', gender: 'Boys' },
          { id: 1, name: ' Blue Gate', Location: 'Matiya', cost: 'K 38,000', gender: 'Girls & Boys' },
         
        ];
        setHostels(mockHostels);
      } catch (error) {
        console.error('Failed to fetch hostels: ', error);
      }
    };
    fetchHostels();
  }, []);

  return (
    <div className="flex">
      <Sidebar profile={landlordProfile} />
      <div className="flex-1 container mx-auto p-4">
        <div className="mb-4">
          <hr className="my-4"/>
          <h2 className="text-2xl font-bold text-center">Landlord Account Management</h2>
          <hr className="my-4"/>
        </div>

        <h3 className="text-xl font-semibold mb-4">Palm Hostel Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hostels.map(hostel => (
            <div key={hostel.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold mb-2">{hostel.name}</h4>
              <p>Location: {hostel.Location}</p>
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
