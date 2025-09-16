import { Link } from "react-router-dom";

import { services } from "../data/serviceData";

const ServicesSection = () => {
  return (
    <div className="bg-[#272626] text-center py-10 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="inline-flex gap-3 items-center mb-8">
        <p className="text-amber-400 text-3xl font-semibold">
          Our <span className="text-white">Services</span>
        </p>
        <span className="w-10 sm:w-16 h-[2px] bg-amber-500"></span>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Link
            to={`/services/${service.id}`}
            key={index}
            className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg hover:shadow-xl
               transition transform hover:-translate-y-1 border border-gray-700 "
          >
            <h2 className="text-2xl  font-bold mb-4 text-amber-400 text-center">
              {service.category}
            </h2>

            <ul className="space-y-2 text-gray-300 text-left text-md md:text-xl leading-relaxed">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
