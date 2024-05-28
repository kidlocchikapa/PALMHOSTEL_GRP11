import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import house from './house.jpg';

const HostelListing = () => {
  const navigate = useNavigate();

  const handleMessageOwnerClick = () => {
    navigate('/ContactOwner');
  };

  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div>
          <img
            src={house}
            alt="Hostel"
            className="w-full rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-lg font-bold">Mandele</h3>
            <p className="text-gray-600">Price: K70,000 / student</p>
            <p className="text-gray-600">Location: Small Bridge</p>
          </div>
          <div className="bg-gray-100 p-3 rounded mb-4">
            <p><strong>Amenities:</strong> All Bills Inclusive, Fenced, Self Contained</p>
          </div>
          <div className="bg-gray-100 p-3 rounded mb-4">
            <p><strong>General Description:</strong> Our hostel has double rooms and so far we are remaining with 6
              rooms. It's a hostel for girls that offers a convenient
              environment for education.</p>
          </div>
          <div className="text-center mt-4">
            <Link to="/contactOwner">
            <button onClick={handleMessageOwnerClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Message The Owner
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelListing;
