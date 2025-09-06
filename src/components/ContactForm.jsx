import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent("New Message from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    window.location.href = `mailto:test@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
    }, 5000);
  };

  return (
    <div className=" md:w-1/2 flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Contact Form */}
      <div className="flex-1 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4 hover:shadow-2xl hover:shadow-gray-700 transition-all duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full text-sm sm:text-base"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full text-sm sm:text-base"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full text-sm sm:text-base resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-lg text-sm sm:text-base cursor-pointer"
          >
            {loading ? "Opening Mail App..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
