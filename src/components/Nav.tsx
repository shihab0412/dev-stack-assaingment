import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 container mx-auto bg-white px-4 py-3">
   
      <div className="hidden items-center justify-between md:flex">
        <img src={logo} alt="Logo" />

        <ul className="flex items-center gap-6 text-gray-700">
          <li className="font-medium text-[#eb2c95]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 font-medium text-gray-800 transition">
            Sign In
          </button>

          <button className="rounded-full bg-[#EC4899] px-5 py-2 font-medium text-white">
            Sign Up
          </button>
        </div>
      </div>
    
      <div className="grid grid-cols-[40px_1fr_auto] items-center gap-2 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-gray-700"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-28 max-w-full object-contain"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="whitespace-nowrap px-1 py-2 text-xs font-medium text-gray-800">
            Sign In
          </button>

          <button className="whitespace-nowrap rounded-full bg-[#EC4899] px-3 py-2 text-xs font-medium text-white">
            Sign Up
          </button>
        </div>
      </div>
      {menuOpen && (
        <ul className="mt-3 border-t border-gray-200 bg-white py-2 md:hidden">
          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-[#eb2c95]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-700"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
      
    </nav>
  );
};

export default Nav;
