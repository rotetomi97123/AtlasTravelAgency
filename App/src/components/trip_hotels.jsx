import React, { useState } from "react";

const trip_hotels = ({ trip }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="trip_hotels_wrapper">
      <div className="trip_hotels_header">
        <h1>{trip.title} hoteli</h1>
        <p>Cene su po osobi*</p>
      </div>
      <h2>{trip.hotels[0].title}</h2>
      <div className="trip_hotels_container">
        <div className="trip_hotels_rooms_wrapper">
          <div className="trip_hotels_rooms_wrapper_text usluge">
            <h4>Tip sobe/usluge</h4>
          </div>
          <div className="trip_hotels_rooms_wrapper_price usluge_price">
            <p>29.12. - 03.01.</p>
          </div>
        </div>
        {trip.hotels[0].sobe.map((item) => (
          <div key={item.id} className="trip_hotels_rooms_wrapper">
            <div className="trip_hotels_rooms_wrapper_text">
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
            </div>
            <div
              onClick={() => setIsShow(true)}
              className="trip_hotels_rooms_wrapper_price"
            >
              <p>
                <span>{item.popust} €</span>
              </p>
              <p>{item.price} €</p>
            </div>
          </div>
        ))}
      </div>
      {isShow && (
        <div className="trip_hotels_reserve_bg">
          <div className="trip_hotels_reserve">
            <button
              onClick={() => setIsShow(false)}
              className="trip_hotels_reserve_close"
            >
              X
            </button>
            <h1>Pošaljite UPIT za putovanje - {trip.title}</h1>
            <div>
              <input type="text" placeholder="Ime i prezime*" required />
              <input type="text" placeholder="Kontakt telefon*" required />
            </div>
            <div>
              <input type="email" placeholder="Kontakt email*" required />
              <input type="text" value={trip.hotels[0].title} readOnly />
            </div>
            <div>
              <input
                type="text"
                value={trip.hotels[0].sobe[0].heading}
                className="trip_hotels_reserve_shortedInput"
                readOnly
              />
              <input
                type="text"
                value="29.12. - 03.01."
                readOnly
                className="trip_hotels_reserve_shortedInput"
              />
              <input
                type="text"
                value={`${trip.hotels[0].sobe[0].price} €`}
                className="trip_hotels_reserve_shortedInput"
                readOnly
              />
            </div>
            <button className="trip_hotels_reserve_btn">
              Pošaljite upit za putovanje
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default trip_hotels;
