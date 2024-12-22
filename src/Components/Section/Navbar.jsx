import React from 'react';
import { navItems } from '../../ui/data';


const Navbar = () => {
  return (
    <div className='pt-8 pb-[19px]'>
      <nav
        className="w-full  max-w-screen-lg bg-[#a86c6c] text-white rounded-lg font-sans mx-auto px-4 py-2 flex justify-between items-center"
        aria-label="Main Navigation"
      >
        <ul className="flex custom-gap">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="custom-font-size font-serif hover:text-gray-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;