import React from 'react';

import { Clock } from 'lucide-react';// Example icon

const Sidebar = ({ isOpen, toggleSidebar }) => {
   
    
  return (
    <>
      {/* Overlay for when the sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar container */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 p-4 z-50`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <button onClick={toggleSidebar} className="md:hidden">
            <Clock color='white' className="h-6 w-6" />
          </button>
        </div>
        {/* Navigation links */}
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 rounded hover:bg-gray-700">Dashboard</a>
            </li>
            
           
            <li className="mb-2">
              <a href="#" className="block p-2 rounded hover:bg-gray-700">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
