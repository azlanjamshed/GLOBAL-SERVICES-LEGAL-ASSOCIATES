import React from "react";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 bg-[#272626]">
      <NavLink
        to={"/"}
        className="fixed top-20 left-0 bg-amber-300 hover:bg-amber-400  text-sm md:text-base font-semibold text-black px-6 py-3 block z-10 shadow-lg rounded-tr-xl rounded-br-xl transition"
      >
        Home
      </NavLink>

      <div className="flex flex-col-reverse lg:flex-row gap-8 md:justify-around">
        <Map />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
