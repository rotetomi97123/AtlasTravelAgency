import React, { useEffect, useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/arrow_black.svg";
import checkMark from "../assets/checkmark.svg";

const Ponude = () => {
  const countdownTime = 2 * 24 * 60 * 60; // 2 days in seconds
  const [timeLeft, setTimeLeft] = useState(countdownTime);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when the countdown reaches zero

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Decrease time left by 1 second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [timeLeft]);

  // Format the time into days, hours, minutes, and seconds
  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  const [isActive, setIsActive] = useState("left");
  const [tripCategory, setTripCategory] = useState("nova_godina_2025");

  return (
    <div className="ponude_wrapper">
      <div>
        <div className="ponude_title_container">
          <div className="ponude_title_wrapper">
            <h1>Aktuelne Atlas ponude</h1>
            <img src={ArrowRight} alt="arrowRight" />
          </div>
          <div className="ponude_title_buttons">
            <p
              style={{
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                background: `${isActive === "left" ? "#2f2e5b" : "white"}`,
                color: `${isActive === "left" ? "white" : "#2f2e5b"}`,
              }}
              onClick={() => {
                setIsActive("left");
                setTripCategory("nova_godina_2025");
              }}
            >
              Putovanje za sve generacije{" "}
              <img
                src={checkMark}
                alt="checkmark"
                style={{ marginLeft: "8px" }}
              />
            </p>
            <p
              style={{
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                background: `${isActive != "left" ? "#2f2e5b" : "white"}`,
                color: `${isActive != "left" ? "white" : "#2f2e5b"}`,
              }}
              onClick={() => {
                setIsActive("right");
                setTripCategory("letovanje_2025");
              }}
            >
              Putovanje za mlade
              <img
                src={checkMark}
                alt="checkmark"
                style={{ marginLeft: "8px" }}
              />
            </p>
          </div>
        </div>
        <div className="ponude_wrapper_div">
          {data.putovanje_za_sve[tripCategory].map((trip, index) => (
            <div
              key={`${trip}-${index}`}
              className="ponude_content"
              style={{ position: "relative" }}
            >
              <Link to="/Trip" state={{ trip: { trip } }}>
                <div
                  className="trip"
                  style={{
                    backgroundImage: `url(${trip.bannerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.7)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                />
                <div
                  className="ponude_content_img"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <h3>{trip.title}</h3>
                  <div className="trip_ad">
                    <p className="trip_ad_red">First minute</p>
                    <p className="trip_ad_blue">Putovanje za mlade</p>
                  </div>
                </div>
              </Link>
              <div className="ponude_content_text">
                <p className="ponude_content_text_p">
                  Cena od
                  <div>
                    <span className="ponude_content_text_popust">
                      {trip.popust} EUR
                    </span>
                    <span className="ponude_content_text_price">
                      {trip.startingPrice} EUR
                    </span>
                  </div>
                </p>
                <h4>
                  Polasci: <span>29.12</span>
                </h4>
                <p>Ponuda važi još:</p>
                <div className="countdown-timer">
                  <h1 className="countdown-display">
                    <div className="time-unit">
                      <div className="time-value">{days}</div>
                      <div className="time-label">Dana</div>
                    </div>
                    <div className="time-unit">
                      <div className="time-value">{hours}</div>
                      <div className="time-label">Sati</div>
                    </div>
                    <div className="time-unit">
                      <div className="time-value">{minutes}</div>
                      <div className="time-label">Min</div>
                    </div>
                    <div className="time-unit">
                      <div className="time-value">{seconds}</div>
                      <div className="time-label">Sec</div>
                    </div>
                  </h1>
                  {timeLeft <= 0 && (
                    <h2 className="timer-finished">Time's up!</h2>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ponude;
