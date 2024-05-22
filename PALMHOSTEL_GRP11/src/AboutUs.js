import React, {  } from 'react';


function About() {
  

  return (
    <div className="bg-gradient-to-br from-blue-200 to-purple-200 min-h-screen flex flex-col justify-center items-center relative">
      <header className="text-4xl font-bold mb-8 text-gray-900">About Us</header>
      
      

      <div className="max-w-3xl">
      <div className="p-6 bg-white rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Our Vision</h2>
          <p className="text-lg mb-4 text-gray-800">To provide easy access to affordable off-campus accommodation, relieving the stresses of housing insecurity.</p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Our Mission</h2>
          <p className="text-lg mb-4 text-gray-800">To connect students with available housing options near their campus, fostering a sense of community and security.</p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Our Core Values</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-lg text-gray-800">Accessibility: Ensuring everyone has access to safe and affordable housing options.</li>
            <li className="text-lg text-gray-800">Community: Fostering connections between students and landlords to build a supportive community.</li>
            <li className="text-lg text-gray-800">Transparency: Providing clear and honest information about available accommodations.</li>
            <li className="text-lg text-gray-800">Affordability: Striving to offer cost-effective housing solutions for students.</li>
          </ul>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Why PalmHostel Exists</h2>
          <p className="text-lg text-gray-800">PalmHostel was created to address the challenges faced by students in finding suitable accommodation near their educational institutions. With limited space on campus and the high costs associated with traditional housing agents, PalmHostel offers a convenient and affordable solution. We believe that everyone deserves access to safe and comfortable living arrangements, and PalmHostel is committed to making that a reality.</p>
        </div>
      </div>
    </div>
  );
}

      
export default About;
