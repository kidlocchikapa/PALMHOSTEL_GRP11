import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-black text-white py-2 flex flex-col justify-center items-center px-8"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center', 
      }}
    >
      <div className="mb-2">PalmHostel</div>
      <div>© Copyright All rights reserved</div>
    </footer>
  );
};

export default Footer;
