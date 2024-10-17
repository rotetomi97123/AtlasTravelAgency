import React from "react";
import thumbsUp from "../assets/thumbs-up.svg";
import sound from "../assets/sound.svg";
import notification from "../assets/notification-bell.svg";
import bookmark from "../assets/bookmark.svg";

const trip_akcija = () => {
  return (
    <div className="akcija_wrapper">
      <div className="akcija_wrapper_content">
        <img src={notification} alt="earth" />
        <div className="akcija_wrapper_content_div">
          <p>
            Plaćanje po <span>jedinstvenoj ceni</span> po osobi - SVE uključeno
            u cenu. Cene su bez <span>dodatnih troškova</span> sa plaćanjem po
            srednjem kursu NBS.
          </p>
        </div>
      </div>
      <div className="akcija_boxes">
        <div className="akcija_boxes_div">
          <img src={bookmark} alt="icon" />
          <p>Prva rata je u vrednosti od samo 2000-5000 dinara.</p>
        </div>
        <div className="akcija_boxes_div">
          <img src={thumbsUp} alt="icon" />
          <p>Online rezervacije i prijave su besplatne.</p>
        </div>
        <div className="akcija_boxes_div">
          <img src={sound} alt="icon" />
          <p>Najbolje novogodišnje žurke su ovde.</p>
        </div>
      </div>
    </div>
  );
};

export default trip_akcija;
