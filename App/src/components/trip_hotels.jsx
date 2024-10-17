import React from "react";

const trip_hotels = ({ trip }) => {
  console.log(trip);
  return (
    <div className="trip_hotels_wrapper">
      <div className="trip_hotels_header">
        <h1>{trip.trip.title} hoteli</h1>
        <p>Cene su po osobi*</p>
      </div>
      <h2>{trip.trip.hotels[0].title}</h2>
      <div className="trip_hotels_container">
        <div className="trip_hotels_rooms_wrapper">
          <div className="trip_hotels_rooms_wrapper_text usluge">
            <h4>Tip sobe/usluge</h4>
          </div>
          <div className="trip_hotels_rooms_wrapper_price usluge_price">
            <p>29.12. - 03.01.</p>
          </div>
        </div>
        {trip.trip.hotels[0].sobe.map((item) => (
          <div key={item.id} className="trip_hotels_rooms_wrapper">
            <div className="trip_hotels_rooms_wrapper_text">
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
            </div>
            <div className="trip_hotels_rooms_wrapper_price">
              <p>
                <span>{item.popust} €</span>
              </p>
              <p>{item.price} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default trip_hotels;
