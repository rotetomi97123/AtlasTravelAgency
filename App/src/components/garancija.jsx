import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

const garancija = () => {
  return (
    <div className="garancija_wrapper">
      <div className="garancija_wrapper_div">
        <h1>Garancija putovanja</h1>
        <h4>
          Naše poslovanje je u potpunosti usklađeno sa Zakonom o turizmu
          Republike Srbije i uvek u službi putnika.
        </h4>
      </div>
      <div className="garancija_wrapper_div">
        <div className="garancija_wrapper_div_content">
          <img src={icon1} alt="icon1" />
          <span>
            <h2>APR</h2>
            <p>Registrovano privredno društvo</p>
          </span>
        </div>
        <div className="garancija_wrapper_div_content">
          <img src={icon3} alt="icon1" />
          <span>
            <h2>NBS</h2>
            <p>Registrovano privredno društvo</p>
          </span>
        </div>
      </div>
      <div className="garancija_wrapper_div">
        <div className="garancija_wrapper_div_content">
          <img src={icon2} alt="icon1" />
          <span>
            <h2>Licenca</h2>
            <p>
              Licenca organizator turističkog putovanja OTP 109/2021, kategorija
              A
            </p>
          </span>
        </div>
        <div className="garancija_wrapper_div_content">
          <img src={icon4} alt="icon1" />
          <span>
            <h2>Garancija putovanja</h2>
            <p>250.000 EUR</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default garancija;
