import React from 'react';
import dynamic from 'next/dynamic';
import NavLink from './navLink';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center flex-wrap bg-amber-100 p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-center">
        <div className="overflow-auto whitespace-nowrap 
                scrollbar scrollbar-thumb-blue-900 scrollbar-thin 
                scrollbar-track-transparent ">
            <NavLink 
                section="kfc" 
                title="Korean Fried Chicken"
            />
            <NavLink 
                section="pre-game" 
                title="Pre-Game"
            />
            <NavLink 
                section="Party-On" 
                title="Party On"
            />
            <NavLink 
                section="Drinks" 
                title="Drinks"
            />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
