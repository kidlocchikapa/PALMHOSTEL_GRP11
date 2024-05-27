import React from 'react';
import { Link } from 'react-router-dom';

const AllHostels = ({ hostels }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {hostels.map((hostel, index) => (
        <Link
          to={`/hostels/${hostel.name.replace(/\s/g, '-').toLowerCase()}`}
          key={index}
          className="bg-gray-100 rounded-lg shadow-md"
        >
          <div className="p-4">
            <img src={hostel.image} alt={hostel.name} className="w-full h-40 object-cover mb-4 rounded overflow-hidden" />
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
        </Link>
      ))}
    </div>
  );
};

export default AllHostels;