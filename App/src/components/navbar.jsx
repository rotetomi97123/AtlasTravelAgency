import React from "react";
import "../css/style.css";
import logo from "../assets/logo.svg";
import data from "../data.json";

const navbar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav-menu">
          <li className="nav-item nav_dashed">
            Putovanja <span>za sve generacije</span>
            <ul className="dropdown">
              {Object.keys(data.putovanje_za_sve).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>{" "}
                  <ul className="category_ul">
                    {data.putovanje_za_sve[categoryKey].map((trip, index) => (
                      <li key={index} className="trip">
                        <h3>{trip.title}</h3>
                        <p>od {trip.startingPrice}€</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item nav_dashed">
            Putovanja <span>za mlade</span>{" "}
            <ul className="dropdown">
              {Object.keys(data.putovanje_za_mlade).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>
                  <ul className="category_ul">
                    {data.putovanje_za_mlade[categoryKey].map((trip, index) => (
                      <li key={index} className="trip">
                        <h3>{trip.title}</h3>
                        <p>od {trip.startingPrice}€</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            Leto 2025{" "}
            <ul className="dropdown">
              {Object.keys(data.leto_2025).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>
                  <ul className="category_ul">
                    {data.leto_2025[categoryKey].map((trip, index) => (
                      <li key={index} className="trip">
                        <h3>{trip.title}</h3>
                        <p>od {trip.startingPrice}€</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            Hoteli{" "}
            <ul className="dropdown dropdown_smaller">
              {Object.keys(data.hoteli).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <ul className="category_ul">
                    {data.hoteli[categoryKey].map((trip, index) => (
                      <li key={index} className="trip">
                        <h3>{trip.title}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item grey_bg">
            Poslovnice <span>Kontakti</span>
            <ul className="dropdown">
              <li className="dropdown-item">Service 1</li>
              <li className="dropdown-item">Service 2</li>
              <li className="dropdown-item">Service 3</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
