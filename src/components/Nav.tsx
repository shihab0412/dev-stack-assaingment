
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Technologies", "#technologies"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-6">

        {/* Hamburger: mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="shrink-0 p-1 text-2xl text-gray-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-pink-500 text-xs font-bold text-white">
            DS
          </span>
          <span className="whitespace-nowrap text-sm font-bold sm:text-base">
            Dev Stack
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 md:flex">
          {links.map(([name, href]) => (
            <a key={name} href={href} className="text-sm text-gray-600 hover:text-pink-500">
              {name}
            </a>
          ))}
        </div>

        {/* Sign in / Sign up: all screen sizes */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button className="whitespace-nowrap text-xs text-gray-600 sm:text-sm">
            Sign In
          </button>
          <button className="whitespace-nowrap rounded-full bg-pink-500 px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
