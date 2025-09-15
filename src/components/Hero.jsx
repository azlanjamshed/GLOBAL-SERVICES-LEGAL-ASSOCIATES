import React from "react";
import hero from "../assets/law.jpg";
import DarkArrow from "../assets/dark-arrow.png";
import LightArrow from "../assets/white-arrow.png";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="w-full py-20 md:py-30  object-cover bg-center bg-cover text-white text-center flex  items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(39,38,38,0.8), rgba(39,38,38,0.8)), url(${hero})`,
      }}
    >
      <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 flex flex-col justify-center items-center gap-3 md:gap-5 text-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
          Your Trusted Partner for Legal & Business Compliance
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg md:w-3/4 lg:w-2/3 text-gray-200">
          ALL KINDS OF LEGAL RELATED WORK DONE HERE. WE ARE EXPERTISE IN THE
          FOLLOWING SERVICES: FDA, MSPC, FSSAI (Food License), GST Registration,
          Business Establishment Certificates, and Udyam/MSME Certificates.
        </p>
        {/* Optional Button */}
        <NavLink
          to={"/contact"}
          className=" group bg-white text-zinc-900 
          hover:bg-gray-800 hover:text-white
             py-2 px-4 text-sm  font-semibold     
             sm:py-2 sm:px-5 sm:text-base
             md:py-3 md:px-6 md:text-lg  
             rounded-full flex gap-2 sm:gap-3 items-center justify-center 
             shadow-md hover:shadow-lg  transition-all duration-300"
        >
          Contact Us
          <img
            src={DarkArrow}
            alt=""
            className="w-4 sm:w-5 md:w-6  group-hover:hidden"
          />
          <img
            src={LightArrow}
            alt=""
            className="w-4 sm:w-5 md:w-6 hidden group-hover:block  "
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
