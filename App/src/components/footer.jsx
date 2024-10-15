import React from "react";

const footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_wrapper">
        <p>
          Poslovno ime:<span> FG Travel Group</span>
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
      </div>
      <div className="footer_wrapper">
        <div>
          <h2>FG Travel Group</h2>
          <p>Lorem, ipsum dolor sit .</p>
          <p>Lorem, ipsum dolor sit .</p>
          <p>Lorem, ipsum dolor sit .</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default footer;
