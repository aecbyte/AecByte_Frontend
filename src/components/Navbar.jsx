"use client";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; // Ensure you're using the correct import for NavLink

const NavItem = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-left w-full"
      aria-label={text}
    >
      {text}
    </button>
  );
};

const Navigation = ({ isOpen, onNavItemClick }) => {
  const navItems = ["Services", "Blogs", "Careers", "About", "Contact"];
  
  return (
    <nav className={`font-['Jura'] gap-2 lg:gap-5 items-center ${isOpen ? "flex flex-col" : "hidden"} md:flex`} role="navigation">
      {navItems.map((item) => (
        <NavLink
          key={item}
          to={`/${item}`}
          className={({ isActive }) =>
            isActive ? "text-[1.65rem]" : "text-xl"
          }
          onClick={() => onNavItemClick(item)} // Close menu on item click
        >
          <NavItem text={item} />
        </NavLink>
      ))}
    </nav>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = (item) => {
    console.log(`Navigating to: ${item}`);
    setIsOpen(false); // Close the menu when an item is clicked
  };

  return (
    <>
      <header
        className="sticky top-0 z-10 box-border flex justify-between items-center md:px-12 lg:px-16 xl:px-48 py-5 w-full h-20 bg-white max-md:px-10 max-md:py-5"
      >
        <Link to="/">
          <h1 className="text-3xl text-black font-['Jura']">AecByte</h1>
        </Link>
        <button
          className="sm:hidden flex flex-col justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45' : ''}`}></span>
        </button>
        <Navigation isOpen={isOpen} onNavItemClick={handleNavItemClick} />
      </header>
      {isOpen && (
        
        <div className="fixed top-0 left-0 w-full h-2/5 bg-white shadow-lg transition-all duration-300 ease-in-out z-20">
          <div className="flex flex-col h-full">
            <button
              className="self-end m-4 text-xl font-bold"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45' : ''}`}></span>
            </button>
            <div className="flex-grow overflow-y-auto">
              <Navigation isOpen={isOpen} onNavItemClick={handleNavItemClick} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;