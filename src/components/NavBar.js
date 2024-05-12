import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  const handleHoverEnter = (e) => {
    e.target.style.color = '#22c55e';
  };

  const handleHoverLeave = (e) => {
    e.target.style.color = '';
  };

  return (
    <Router>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
        <div className="flex w-full flex-wrap items-center px-3">
          <span className="ms-2 text-2xl font-bold text-black dark:text-green-400">PalmHostel.</span>
          <div className="ml-auto flex items-center">
            <div className="mr-6 flex items-center">
              <Link
                to="/home"
                className="inline mx-2 hover:text-green-600 dark:hover:text-green-400"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                Home
              </Link>
              <Link
                to="/all-hostels"
                className="inline mx-2 hover:text-green-600 dark:hover:text-green-400"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                All hostels
              </Link>
              <Link
                to="/add-listing"
                className="inline mx-2 hover:text-green-600 dark:hover:text-green-400"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                Add your listings
              </Link>
            </div>
            <div className="flex w-[30%] items-center">
              <div className="relative flex w-full">
                <input
                  type="search"
                  className="w-full rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
                  placeholder="Search hostel"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center whitespace-nowrap rounded-r px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-5"
                  id="button-addon2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;