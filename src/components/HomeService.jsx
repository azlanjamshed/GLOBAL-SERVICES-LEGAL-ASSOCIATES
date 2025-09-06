import React, { useState, useEffect } from "react";
import { services } from "../data/serviceData";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const HomeServices = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(4);
      } else {
        setVisibleCount(8);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);
  return (
    <div className="w-full bg-[#272626] py-16 px-6 md:px-20">
      <div className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        <Title text1={"Our"} text2={"Services"} />
      </div>

      <div className="grid gap-8  sm:grid-cols-2  lg:grid-cols-4">
        {services.slice(0, visibleCount).map((service, index) => (
          <div
            key={index}
            className="bg-gray-300 p-6 rounded-xl shadow-md hover:shadow-3xl hover:shadow-amber-300 transition-all duration-300 text-center flex flex-col items-center"
          >
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/services"
          className="bg-amber-300 hover:bg-amber-400 text-gray-800 font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
