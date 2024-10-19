import React, { useEffect, useState } from "react";
import data from "../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import arrow_down from "../assets/arrow_down.svg";
import { Link } from "react-router-dom";

const hero = () => {
  const [isActive, setIsActive] = useState("nova_godina_2025");

  const [slidesPerView, setSlidesPerView] = useState(3.4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3.4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const params = {
    slidesPerView: slidesPerView,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false, // Disable looping
  };
  return (
    <div className="hero_wrapper">
      <h1>Atlas turistička agencija</h1>
      <h6>Licencirani organizator, atraktivne destinacije, najbolje ponude!</h6>
      <div className="hero_catergories">
        <p
          style={
            isActive === "nova_godina_2025"
              ? { fontWeight: 600 }
              : { fontWeight: 200 }
          }
          onClick={() => setIsActive("nova_godina_2025")}
        >
          Nova godina 2025
        </p>
        <p
          style={
            isActive === "skijanje" ? { fontWeight: 600 } : { fontWeight: 200 }
          }
          onClick={() => setIsActive("skijanje")}
        >
          Skijanje 2025
        </p>
        <p
          style={
            isActive === "letovanje_2025"
              ? { fontWeight: 600 }
              : { fontWeight: 200 }
          }
          onClick={() => setIsActive("letovanje_2025")}
        >
          Leto 2025
        </p>
      </div>
      <Swiper {...params} className="hero_slider">
        <ul className="dropdown">
          <ul className="category_ul">
            {data.putovanje_za_sve[isActive].map((trip, index) => (
              <SwiperSlide key={`${trip}-${index}`} className="trip">
                <Link
                  to={`/trip/${encodeURIComponent(trip.title)}`}
                  key={trip.title}
                  state={{ trip }}
                >
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
                    }}
                  />
                  <div
                    className="trip_content"
                    style={{ position: "relative", zIndex: 2 }}
                  >
                    <h3>{trip.title}</h3>
                    <h4>{trip.short_description}</h4>
                    <p>cena od</p>
                    <div className="trip_content_price">
                      <p className="trip_content_price_popust">
                        {trip.popust} EUR
                      </p>
                      <p className="trip_content_price_real">
                        {trip.startingPrice} EUR
                      </p>
                    </div>
                  </div>
                  <div className="trip_ad">
                    {isActive === "nova_godina_2025" && (
                      <p className="trip_ad_red">First minute</p>
                    )}
                    <p className="trip_ad_blue">
                      {isActive === "skijanje"
                        ? "skijanje"
                        : "Putovanje za mlade"}
                    </p>
                  </div>
                  <div className="trip_polasci">
                    <p>Polasci</p>
                    <img src={arrow_down} alt="arrow" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </ul>
        </ul>
      </Swiper>
    </div>
  );
};

export default hero;
