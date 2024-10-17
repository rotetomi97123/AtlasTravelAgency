import React from "react";
import earth from "../assets/earth.svg";
import pin from "../assets/pin.svg";
import timer from "../assets/sand-timer.svg";
import map from "../assets/open-map.svg";

const akcija = () => {
  return (
    <div className="akcija_wrapper">
      <div className="akcija_wrapper_content">
        <img src={earth} alt="earth" />
        <div className="akcija_wrapper_content_div">
          <h1>FIRST MINUTE AKCIJA - Doček Nove godine!</h1>
          <p>
            Prag, Krakov, Milano, Atina, Istanbul, Budamešta ili Beč? <br></br>
            Koju destinaciju ti biraš?
          </p>
        </div>
      </div>
      <div className="akcija_boxes">
        <div className="akcija_boxes_div">
          <img src={timer} alt="icon" />
          <p>Ranom prijavom birate najbolje sobe po najboljim cenama.</p>
        </div>
        <div className="akcija_boxes_div">
          <img src={map} alt="icon" />
          <p>
            Izaberi jednu od sedam najtraženijih destinacija za{" "}
            <span>doček Nove godine 2025.</span>
          </p>
        </div>
        <div className="akcija_boxes_div">
          <img src={pin} alt="icon" />
          <p>
            <span>#dočekzapamćenje</span> - jedino mesto za legitimno dobro
            putovanje!
          </p>
        </div>
      </div>
    </div>
  );
};

export default akcija;
