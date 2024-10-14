import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import Trip from "../pages/trip";

const routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Trip" element={<Trip />} />
    </Routes>
  );
};

export default routing;
