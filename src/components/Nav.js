import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };



  return (
    <nav className="w-full">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo / Branding */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="logo" width="250px" height="100px" />
          </div>

          {/* Burger Icon */}
          <div className="md:hidden px-5">
            <button onClick={toggleBurgerMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              {isBurgerMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
          {/* Nav items for large screens */}
          <div className="hidden md:flex items-center space-x-4 mx-10">
            <Link to="presentation" className="text-gray-800 font-bold px-4 py-2 transition-colors duration-200 cursor-pointer" onClick={toggleBurgerMenu}  smooth={true} duration={500}>Presentation
              <hr className="border-[#e74123] border-t-4 " />
            </Link>
            <Link to="activites" className="text-gray-800 font-bold px-4 py-2 transition-colors duration-200 cursor-pointer" onClick={toggleBurgerMenu} smooth={true} duration={500}>Activités</Link>
            <Link to="dons" className="text-gray-800 font-bold px-4 py-2 transition-colors duration-200 cursor-pointer" onClick={toggleBurgerMenu} smooth={true} duration={500}>Dons</Link>
            <Link to="contact" className="text-gray-800 font-bold px-4 py-2 transition-colors duration-200 cursor-pointer" onClick={toggleBurgerMenu} smooth={true} duration={500}>Contact</Link>
          </div>
          {/* Mobile Menu */}
          <div className={`absolute top-0 left-0 right-0 py-5 px-2 md:hidden ${isBurgerMenuOpen ? 'block' : 'hidden'}`}>
            {/* Nav Items */}
            <div className="flex flex-col items-center justify-center min-h-screen">
              <Link to="presentation" className="text-gray-800 font-bold px-4 py-2 transition-colors duration-200" onClick={toggleBurgerMenu} smooth={true} duration={500}>Presentation</Link>
              <Link to="activites" className="text-gray-800 font-bold px-4 py-2 transition-colors duration-200" onClick={toggleBurgerMenu} smooth={true} duration={500}>Activités</Link>
              <Link to="dons" className="text-gray-800 font-bold px-4 py-2 transition-colors duration-200" onClick={toggleBurgerMenu} smooth={true} duration={500}>Dons</Link>
              <Link to="contact" className="text-gray-800 font-bold px-4 py-2 transition-colors duration-200" onClick={toggleBurgerMenu} smooth={true} duration={500}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
