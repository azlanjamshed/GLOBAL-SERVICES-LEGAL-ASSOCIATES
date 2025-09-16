import React from "react";

const Map = () => {
  return (
    <>
      <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.192503924086!2d72.84306967601091!3d19.055271982145037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d9d3a8a9e5%3A0xd0512f51e9ab56b!2sGlobal%20Services%20%26%20Legal%20Associate's!5e0!3m2!1sen!2sin!4v1757138858127!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ minHeight: "400px", border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
