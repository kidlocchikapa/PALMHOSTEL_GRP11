import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  return (
    <div className="bg-gray-300 py-8">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="flex items-center justify-center mb-8">
          <input
            type="text"
            placeholder="Search Hostel."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-1/2 px-4 py-2 border border-gray-400 rounded-l"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </form>

        {/* Display search results */}
        {/* Add code to display filtered results here */}
      </div>
    </div>
  );
};

export default Search; 