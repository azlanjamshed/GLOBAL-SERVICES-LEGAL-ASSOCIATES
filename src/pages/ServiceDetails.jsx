import { useParams } from "react-router-dom";
import { ServiceDetailsMaps } from "../data/ServiceDetailsMaps";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams(); // e.g. "license", "registration"
  const serviceData = ServiceDetailsMaps[serviceId.toLowerCase()];

  if (!serviceData) {
    return (
      <div className="text-center text-red-400 py-20">Service not found 🚫</div>
    );
  }

  return (
    <div className="p-6 sm:p-10 bg-[#272626] text-center flex flex-col items-center gap-5">
      <div className="inline-flex gap-3 items-center mb-8 ">
        <p className="text-amber-400 text-3xl font-semibold">
          {serviceId} <span className="text-white">Services</span>
        </p>
        <span className="w-10 sm:w-16 h-[2px] bg-amber-500"></span>
      </div>
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="bg-[#1e1e1e] p-6 rounded-xl text-center shadow-lg hover:shadow-2xl
               transition transform hover:-translate-y-1 border border-gray-700"
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg mb-4 w-full h-40 object-contain"
            />
            <h2 className="text-lg font-bold text-white">{service.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{service.details}</p>
          </div>
        ))}
      </div> */}
      <div className="grid gap-8 md:gap-20 sm:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="bg-[#1e1e1e] p-6 rounded-xl text-center shadow-lg hover:shadow-2xl
                 transition transform hover:-translate-y-1 border border-gray-700
                 w-full max-w-[300px] h-[380px] flex flex-col "
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg mb-4 w-full h-40 object-contain"
            />
            <h2 className="text-lg font-bold text-white">{service.title}</h2>
            <p className="text-gray-400 text-sm mt-2 flex-grow overflow-hidden">
              {service.details}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-amber-300 flex items-center gap-2 px-4 py-2 rounded-md shadow-md hover:bg-amber-400 transition w-fit cursor-pointer">
        <FaArrowLeftLong className="text-black text-lg" />
        <Link to="/" className="text-black font-medium">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
