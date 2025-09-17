import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");

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
    setStatus("sending");

    emailjs
      .send(
        "service_ih15mke", // 👉 replace with your Service ID
        "template_iyytq9e", // 👉 replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "_exrgxfcfUueqB5SP" // 👉 replace with your Public Key
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });

        // Reset back to idle after 3s
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch((err) => {
        console.error("❌ Failed to send email:", err);
        alert("Something went wrong. Try again later.");
        setStatus("idle");
      });
  };

  return (
    <div className="md:w-1/2 flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Contact Form */}
      <div className="flex-1 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md sm:max-w-lg bg-[#1e1e1e] p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4 hover:shadow-md hover:shadow-amber-300 transition-all duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-400 mb-4">
            Contact Us
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-600 bg-[#272626] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full text-sm sm:text-base placeholder-gray-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-600 bg-[#272626] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full text-sm sm:text-base placeholder-gray-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border border-gray-600 bg-[#272626] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full text-sm sm:text-base resize-none placeholder-gray-400"
            required
          ></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`${
              status === "sent"
                ? "bg-green-500 text-white"
                : "bg-amber-300 text-black"
            } hover:opacity-90 transition-all duration-300 font-semibold px-6 py-3 rounded-lg text-sm sm:text-base cursor-pointer`}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Mail Sent ✅"
              : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
