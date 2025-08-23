// src/components/Navbar.jsx
import React from "react";
// import logo from "../assets/logo.svg"; // replace with your actual logo

export default function Navbar() {
  return (
    <nav className="bg-[#FAFAEF] px-10 py-4 flex items-center w-full h-20">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img src={logo} alt="logo" className="w-6 h-6" /> */}
        <span className="text-2xl font-extrabold tracking-wide text-[#1E1E1C] pl-16">
          HAPPIER
        </span>
      </div>

      {/* Menu - evenly spaced */}
      <ul className="flex-1 flex justify-center space-x-6 text-sm font-medium text-[#1E1E1C]">
        <li className="cursor-pointer hover:underline">Courses</li>
        <li className="cursor-pointer hover:underline">Meditations</li>
        <li className="cursor-pointer hover:underline">Happier Weekly</li>
        <li className="cursor-pointer hover:underline">Our Story</li>
      </ul>

      {/* Button */}
      <button className="bg-[#1E1E1C] text-white hover:text-black hover:border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors">
        Try free
      </button>
    </nav>
  );
}
