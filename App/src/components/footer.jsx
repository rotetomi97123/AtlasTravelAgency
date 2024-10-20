import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import yt from "../assets/yt.svg";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_wrapper">
        <p>
          Poslovno ime:<span> Atlas Travel Group</span>
        </p>
        <p>
          PIB: <span>999999</span>{" "}
        </p>
        <p>Matični broj: 99999</p>
        <p>Tekući račun: 99999999 Unicredit Bank</p>
        <p>Licenca organizator turističkog putovanja</p>
      </div>
      <div className="footer_wrapper">
        <h2>
          <span>Izdvajamo</span>
        </h2>
        <p>Magazin</p>
        <p>Garancije putovanja</p>
        <p>Opšti uslovi putovanja</p>
        <p>Politika privatnosti i uslovi korišćenja</p>
        <p>
          Polise osiguranja od insolventnosti i<br></br> odgovornosti
        </p>
        <p>
          Opšti uslovi međunarodnog putnog <br></br>osiguranja
        </p>
        <p>Reklamacije putnika i kontrola kvaliteta</p>
      </div>
      <div className="footer_wrapper">
        <div className="footer_wrapper_last">
          <div>
            <h2>Atlas Travel Group</h2>
            <p>Vulkan Demo</p>
            <p>Baldurs gate 3 demo</p>
            <p>Gusto restaurantr</p>
          </div>
          <div>
            <div className="footer_wrapper_icons">
              <img src={facebook} alt="logo" />
              <img src={instagram} alt="logo" />
              <img src={tiktok} alt="logo" />
              <img src={yt} alt="logo" />
            </div>
            <Link to="/Onama">
              <p>O nama</p>
            </Link>
            <Link to="/Kontakt">
              <p>Kontakt</p>
            </Link>
          </div>
        </div>
        <div className="footer_description">
          Razvoj i dizajn: TothDev <br></br> © 2009 - 2024 / sva prava zadrzana
          © Atlas Travel Group <br></br> Cene su informativnog karaktera i
          menjaju se na dnevnom nivou.
        </div>
      </div>
    </div>
  );
};

export default footer;
