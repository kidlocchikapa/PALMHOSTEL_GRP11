import React from 'react';
import { useParams } from 'react-router-dom';

const HostelDetails = () => {
  const { hostelName } = useParams();

  // Find the hostel data based on the hostelName parameter
  const hostel = hostel.find((h) => h.name.replace(/\s/g, '-').toLowerCase() === hostelName);

  if (!hostel) {
    return <div>Hostel not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{hostel.name}</h2>
      <div className="flex">
        <img src={hostel.image} alt={hostel.name} className="w-64 h-64 object-cover mr-4" />
        <div>
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
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Amenities:</span> {hostel.amenities}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostelDetails;