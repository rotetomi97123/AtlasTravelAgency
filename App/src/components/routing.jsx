import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import Trip from "../pages/trip";
import ScrollToTop from "../components/scrollToTop";
import Onama from "../pages/Onama";
import Kontakt from "../pages/kontakt";

const routing = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Onama" element={<Onama />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/trip/:tripTitle" element={<Trip />} />
      </Routes>
    </>
  );
};

export default routing;
