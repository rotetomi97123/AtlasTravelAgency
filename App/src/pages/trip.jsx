import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

const trip = () => {
  const location = useLocation();
  const { trip } = location.state;

  return (
    <div className="app_container">
      <Navbar />
      <div className="trip_wrapper">
        <div>
          <h5>već od {trip.trip.startingPrice} €</h5>
          <h1>{trip.trip.title}</h1>
          <h2>{trip.trip.short_description}</h2>
          <h4>{trip.trip.long_description}</h4>
        </div>
        <div>
          <img src={trip.trip.bannerImg} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default trip;
