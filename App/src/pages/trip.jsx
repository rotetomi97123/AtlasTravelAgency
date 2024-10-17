import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Form from "../components/form";
import Footer from "../components/footer";
import Garancija from "../components/garancija";
import Trip_akcija from "../components/trip_akcija";
import Trip_hotels from "../components/trip_hotels";

const trip = () => {
  const location = useLocation();
  const { trip } = location.state;

  return (
    <div className="app_container">
      <Navbar />
      <div className="trip_wrapper">
        <div>
          <p className="trip_header">
            Početna {">"} Putovanja {">"} {trip.trip.category}&nbsp;
            {">"} <span>{trip.trip.title}</span>
          </p>
          <h5>već od {trip.trip.startingPrice} €</h5>
          <h1>{trip.trip.title}</h1>
          <h2>{trip.trip.short_description}</h2>
          <h4>{trip.trip.long_description}</h4>
          <div className="trip_boxes">
            <p>Doručak u ceni</p>
            <p>Najbolje žurke</p>
            <p>Party destinacija</p>
            <p>TOP ponuda</p>
          </div>
        </div>
        <div>
          <img src={trip.trip.bannerImg} alt="banner" />
        </div>
      </div>
      <Trip_akcija />
      <Trip_hotels trip={trip} />
      <Form />
      <Garancija />
      <Footer />
    </div>
  );
};

export default trip;
