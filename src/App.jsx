import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
