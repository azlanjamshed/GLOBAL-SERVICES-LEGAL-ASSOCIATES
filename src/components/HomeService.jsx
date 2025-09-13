import React, { useState, useEffect } from "react";
import { services } from "../data/serviceData";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const HomeServices = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
            onClick={() => handleCardClick(service)}
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
      {/* Popup Modal */}

      {selectedService && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white/95 p-6 md:p-8 rounded-2xl shadow-2xl max-w-lg w-[90%] text-center transform transition-all scale-100 hover:scale-[1.02]"
          >
            {/* Service Image */}
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-64 object-contain rounded-xl mb-4 shadow-md"
            />

            {/* Title */}
            <h3 className="text-2xl font-extrabold text-gray-800">
              {selectedService.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-3 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-6 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeServices;
