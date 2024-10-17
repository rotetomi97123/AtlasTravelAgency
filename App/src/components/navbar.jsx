import React, { useState } from "react";
import "../css/style.css";
import logo from "../assets/logo.svg";
import data from "../data.json";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close3.svg";
import arrow from "../assets/arrow.svg";
import arrow_down from "../assets/arrow_down.svg";
import arrow_right from "../assets/arrow_right.svg";
import { Link } from "react-router-dom";
import AtlasLogo from "../assets/atlas_logo2.png";

const navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState("");

  return (
    <div className="container">
      <nav className="nav">
        <Link to="/" className="logo_link">
          <img src={AtlasLogo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item nav_dashed">
            <div className="nav_hover">
              Putovanja <span>za sve generacije</span>
            </div>
            <ul className="dropdown dropdown_large">
              {Object.keys(data.putovanje_za_sve).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>{" "}
                  <ul className="category_ul">
                    {data.putovanje_za_sve[categoryKey].map((trip, index) => (
                      <Link to="/Trip" state={{ trip: { trip } }}>
                        <li key={index} className="trip">
                          <h3>{trip.title}</h3>
                          <p>od {trip.startingPrice}€</p>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item nav_dashed">
            <div className="nav_hover">
              Putovanja <span>za mlade</span>{" "}
            </div>
            <ul className="dropdown">
              {Object.keys(data.putovanje_za_mlade).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>
                  <ul className="category_ul">
                    {data.putovanje_za_mlade[categoryKey].map((trip, index) => (
                      <Link to="/Trip" state={{ trip: { trip } }}>
                        <li key={index} className="trip">
                          <h3>{trip.title}</h3>
                          <p>od {trip.startingPrice}€</p>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <div className="nav_hover">Leto 2025</div>
            <ul className="dropdown dropdown_leto">
              {Object.keys(data.leto_2025).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>
                  <ul className="category_ul">
                    {data.leto_2025[categoryKey].map((trip, index) => (
                      <Link to="/Trip" state={{ trip: { trip } }}>
                        <li key={index} className="trip">
                          <h3>{trip.title}</h3>
                          <p>od {trip.startingPrice}€</p>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <div className="nav_hover">Hoteli</div>
            <ul className="dropdown dropdown_smaller">
              {Object.keys(data.hoteli).map((categoryKey) => (
                <div
                  key={categoryKey}
                  className={`category ${
                    categoryKey === "hoteli1"
                      ? "hotel1-class"
                      : categoryKey === "hoteli2"
                      ? "hotel2-class"
                      : ""
                  }`}
                >
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
            <div className="nav_hover">
              Poslovnice <span>Kontakti</span>
            </div>
            <ul className="dropdown dropdown_contact">
              <div>
                <h2>Radno vreme:</h2>
                <h5>Pon-Pet 10-19h, Sub 10-16h</h5>
                <p>
                  <strong>011 7450 444 /</strong> centrala <br></br> Dostupni
                  smo i na<br></br>
                  <span className="viber">Viber</span> i
                  <span className="whatsApp"> WhatsApp</span>
                </p>
                <strong>Balkanska 27, Beograd</strong>
              </div>
              <div className="contact_links">
                <a href="/">O nama</a>
                <a href="/">Kontakt</a>
                <a href="/">Provera duga</a>
              </div>
            </ul>
          </li>
        </ul>
        <div
          className="hamburger_menu"
          onClick={() => setIsMobile((prev) => !prev)}
        >
          {isMobile ? (
            <img src={close} alt="menu" />
          ) : (
            <img src={hamburger} alt="menu" />
          )}
        </div>
        {isMobile && (
          <div className="mobile_nav_dropdown">
            <div className="mobile_nav_dropdown_padding">
              <div
                className="mobile_nav_dropdown_wrapper"
                onClick={() =>
                  setToggleDropdown((prev) => (prev === "first" ? "" : "first"))
                }
              >
                <h3>Putovanja za sve generacije</h3>
                {toggleDropdown === "first" ? (
                  <img src={arrow} alt="arrow" />
                ) : (
                  <img src={arrow_down} alt="arrow" />
                )}
              </div>
              {toggleDropdown === "first" && (
                <ul className="mobile_nav_dropdown_content">
                  {Object.keys(data.putovanje_za_sve).map((categoryKey) => (
                    <div
                      key={categoryKey}
                      className="mobile_nav_dropdown_category"
                    >
                      <h2>{categoryKey.replaceAll("_", " ")}</h2>{" "}
                      <ul className="">
                        {data.putovanje_za_sve[categoryKey].map(
                          (trip, index) => (
                            <Link to="/Trip" state={{ trip: { trip } }}>
                              <li key={index}>
                                <h5>{trip.title}</h5>
                                <p>od {trip.startingPrice}€</p>
                              </li>
                            </Link>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </ul>
              )}
              <div
                className="mobile_nav_dropdown_wrapper"
                onClick={() =>
                  setToggleDropdown((prev) =>
                    prev === "second" ? "" : "second"
                  )
                }
              >
                <h3>Putovanja za mlade</h3>
                {toggleDropdown === "second" ? (
                  <img src={arrow} alt="arrow" />
                ) : (
                  <img src={arrow_down} alt="arrow" />
                )}{" "}
              </div>
              {toggleDropdown === "second" && (
                <ul className="mobile_nav_dropdown_content">
                  {Object.keys(data.putovanje_za_mlade).map((categoryKey) => (
                    <div
                      key={categoryKey}
                      className="mobile_nav_dropdown_category"
                    >
                      <h2>{categoryKey.replaceAll("_", " ")}</h2>{" "}
                      <ul className="">
                        {data.putovanje_za_mlade[categoryKey].map(
                          (trip, index) => (
                            <Link to="/Trip" state={{ trip: { trip } }}>
                              <li key={index}>
                                <h5>{trip.title}</h5>
                                <p>od {trip.startingPrice}€</p>
                              </li>
                            </Link>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </ul>
              )}
              <div
                className="mobile_nav_dropdown_wrapper"
                onClick={() =>
                  setToggleDropdown((prev) => (prev === "third" ? "" : "third"))
                }
              >
                <h3>Leto 2025</h3>
                {toggleDropdown === "third" ? (
                  <img src={arrow} alt="arrow" />
                ) : (
                  <img src={arrow_down} alt="arrow" />
                )}{" "}
              </div>
              {toggleDropdown === "third" && (
                <ul className="mobile_nav_dropdown_content">
                  {Object.keys(data.leto_2025).map((categoryKey) => (
                    <div
                      key={categoryKey}
                      className="mobile_nav_dropdown_category"
                    >
                      <h2>{categoryKey.replaceAll("_", " ")}</h2>{" "}
                      <ul className="">
                        {data.leto_2025[categoryKey].map((trip, index) => (
                          <Link to="/Trip" state={{ trip: { trip } }}>
                            <li key={index}>
                              <h5>{trip.title}</h5>
                              <p>od {trip.startingPrice}€</p>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ul>
              )}
            </div>
            <div className="mobile_nav_dropdown_contact">
              <div className="mobile_nav_dropdown_contact_heading">
                Poslovnice Kontakti
              </div>
              <ul className="mobile_nav_dropdown_contact_content">
                <div>
                  <h2>Radno vreme:</h2>
                  <h5>Pon-Pet 10-19h, Sub 10-16h</h5>
                  <p>
                    <strong>011 7450 444 /</strong> centrala <br></br> Dostupni
                    smo i na<br></br>
                    <span className="viber">Viber</span> i
                    <span className="whatsApp"> WhatsApp</span>
                  </p>
                  <strong>Balkanska 27, Beograd</strong>
                </div>
                <div className="contact_links">
                  <div className="contact_links_wrapper">
                    <a href="/">O nama</a>
                    <img src={arrow_right} alt="arrow" />
                  </div>
                  <div className="contact_links_wrapper">
                    <a href="/">Kontakt</a>
                    <img src={arrow_right} alt="arrow" />
                  </div>
                  <div className="contact_links_wrapper">
                    <a href="/">Provera duga</a>
                    <img src={arrow_right} alt="arrow" />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default navbar;
