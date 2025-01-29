import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 text-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">QueenLens</div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Gallery</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </nav>
        <button className="bg-gray-900 text-gray-100 px-4 py-1 rounded ">Let&apos;s Talk</button>
      </div>
    </header>
  );
};

export default Header;
