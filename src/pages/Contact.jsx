import React from "react";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10 bg-gray-50">
      <div className="flex  flex-col-reverse lg:flex-row gap-8 md:justify-around  ">
        <Map />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
