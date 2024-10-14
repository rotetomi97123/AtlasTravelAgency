import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

const trip = () => {
  const location = useLocation();
  const { trip } = location.state;
  console.log(trip);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default trip;
