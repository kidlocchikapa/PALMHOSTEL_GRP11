import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHostelsDropdown, setShowHostelsDropdown] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleHostelsDropdown = () => {
    setShowHostelsDropdown(!showHostelsDropdown);
  };

  return (
    
      <nav className="bg-gray-200 text-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold">PalmHostel</span>
              </div>
            </div>
            <div className="hidden md:flex ml-auto">
              <div className="flex items-baseline space-x-4">
                <Link to="/home" className="hover:text-white">
                  Home
                </Link>
                <div className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center hover:text-white"
                    onClick={toggleHostelsDropdown}
                  >
                    All Hostels
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {showHostelsDropdown && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <Link
                        to="/All-hostels"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-white"
                      >
                        All Hostels
                      </Link>
                     
                    </div>
                  )}
                </div>
                <Link to="/landlord-profile"
                className="hover:text-white">
                  
                  LandlordPortal
                </Link>
                <Link to="/about-us"
                className="hover:text-white"
                >About Us
                  
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {<button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            }
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          {<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/all-hostels"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700"
            >
              All Hostels
            </Link>
            <Link
              to="/all-hostels/boys"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700 ml-4"
            >
              Boys Hostels
            </Link>
            <Link
              to="/all-hostels/girls"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700 ml-4"
            >
              Girls Hostels
            </Link>
            <Link
              to="/landlord-portal"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700"
            >
              LandlordPortal
            </Link>
            <Link
              to="/about-us"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700"
            >
              AboutUs
            </Link>
          </div>
            }
        </div>
      </nav>
    
  );
};

export default Navbar;