import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Form from "../components/form";
import Footer from "../components/footer";
import Garancija from "../components/garancija";
import Trip_akcija from "../components/trip_akcija";
import Trip_hotels from "../components/trip_hotels";

const Trip = () => {
  const trip = useLocation();
  const tripData = trip.state.trip;

  if (!tripData) {
    return <div>No trip details available.</div>;
  }

  return (
    <div className="app_container">
      <Navbar />
      <div className="trip_wrapper">
        <div>
          <p className="trip_header">
            Početna {">"} Putovanja {">"} {tripData.category}&nbsp;
            {">"} <span>{tripData.title}</span>
          </p>
          <h5>već od {tripData.startingPrice} €</h5>
          <h1>{tripData.title}</h1>
          <h2>{tripData.short_description}</h2>
          <h4>{tripData.long_description}</h4>
          <div className="trip_boxes">
            <p>Doručak u ceni</p>
            <p>Najbolje žurke</p>
            <p>Party destinacija</p>
            <p>TOP ponuda</p>
          </div>
        </div>
        <div>
          <img src={tripData.bannerImg} alt="banner" />
        </div>
      </div>
      <Trip_akcija />
      <Trip_hotels trip={tripData} /> {/* Pass the found trip data */}
      <Form />
      <Garancija />
      <Footer />
    </div>
  );
};

export default Trip;
