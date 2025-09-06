import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className={`w-full py-3 text-white font-semibold bg-[#272626] flex items-center justify-between px-5 md:px-16 lg:px-32 sticky top-0 left-0`}
    >
      {/* Logo */}
      <NavLink
        to={"/"}
        className="w-16 sm:w-20 md:w-28 lg:w-36 h-10 sm:h-12 md:h-14 lg:h-20"
      >
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </NavLink>

      {/* Title */}
      <h1 className="text-xs sm:text-sm md:text-xl lg:text-3xl font-black text-center flex-1">
        GLOBAL SERVICES & LEGAL ASSOCIATES
      </h1>

      {/* Optional button */}
      {/* <button className="bg-white text-gray-900 px-3 py-1 md:px-4 md:py-2 rounded-full hidden md:block">
    Contact US
  </button> */}
    </nav>
  );
};

export default Navbar;
