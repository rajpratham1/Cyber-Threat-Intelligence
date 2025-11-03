import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cyber Threat Intelligence Dashboard</h1>
        {/* Theme toggle can be added here */}
      </div>
    </nav>
  );
};

export default Navbar;