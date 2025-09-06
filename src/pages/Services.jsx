import React from "react";
import { services } from "../data/serviceData";
import Title from "../components/Title";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    // <div className="relative">
    //   <span className="sticky top-[95px] right-4 bg-[#272626] text-lg font-semibold text-white px-4 py-2 z-10">
    //     Home
    //   </span>
    //   <div className="w-full bg-[#272626] py-16 px-6 md:px-20">
    //     {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
    //     All Services
    //   </h2> */}

    //     <div className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
    //       <Title text1={"All"} text2={"Services"} />
    //     </div>

    //     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    //       {services.map((service, index) => (
    //         <div
    //           key={index}
    //           className="bg-gray-300 p-6 rounded-xl shadow-md hover:shadow-3xl hover:shadow-amber-300 transition-all duration-300 text-center flex flex-col items-center"
    //         >
    //           {/* {service.icon} */}
    //           <h3 className="mt-4 text-xl font-semibold text-gray-800">
    //             {service.title}
    //           </h3>
    //           <p className="mt-2 text-gray-600 text-sm">
    //             {service.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="relative">
      {/* Breadcrumb / Back button */}
      <NavLink
        to={"/"}
        className="fixed top-25 left-0 bg-amber-300 hover:bg-amber-400text-sm md:text-base font-medium text-gray-800 px-6 py-3 block z-10 shadow-md"
      >
        {/* <span>Home</span> */}
        Home
      </NavLink>

      {/* Services Section */}
      <div className="w-full bg-[#272626] py-16 px-6 md:px-20">
        <div className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">
          <Title text1={"All"} text2={"Services"} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-300 p-6 rounded-xl shadow-md hover:shadow-3xl hover:shadow-amber-300 transition-all duration-300 text-center flex flex-col items-center"
            >
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
