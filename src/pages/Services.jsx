import React from "react";
import { services } from "../data/serviceData";
import Title from "../components/Title";

const Services = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-20">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        All Services
      </h2> */}
      <div className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        <Title text1={"All"} text2={"Services"} />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-gray-600 transition-all duration-300 text-center flex flex-col items-center"
          >
            {/* {service.icon} */}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
