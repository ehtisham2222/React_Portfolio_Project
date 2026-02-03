import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full text-white pt-6">
      {/* Perfect Center Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <span className="text-xl font-bold tracking-wide">
          Portfolio
        </span>

        {/* Desktop Menu (Centered Items) */}
        <ul className="hidden md:flex gap-10 font-semibold items-center">
          <li><a href="#About" className="hover:text-gray-300">About</a></li>
          <li><a href="#Experience" className="hover:text-gray-300">Experience</a></li>
          <li><a href="#Projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#Contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Mobile Icon */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden w-[90%] mx-auto mt-4 bg-[#00000050] backdrop-blur-md rounded-xl py-4 text-center space-y-3 font-semibold">
          <li><a href="#About">About</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
