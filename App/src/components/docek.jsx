import React from "react";
import docek_banner from "../assets/docek_banner.png";

const docek = () => {
  return (
    <div className="docek_wrapper">
      <img src={docek_banner} alt="banner" />
      <div className="docek_wrapper_content">
        <h1>#dočekzapamćenje već od 130 EUR!</h1>
        <p>
          Nova godina se bliži, a najbolji planovi se prave unapred! Prag,
          Krakov, Milano, Atina, Istanbul, Budimpešta ili Beč – koji je tvoj
          izbor za nezaboravni početak 2025. godine?<br></br>
          <br></br> Iskoristi VESELI VIKEND i uštedi 100€ PO SOBI na sve
          novogodišnje aranžmane!
        </p>
        <button>Pogledajte ponudu</button>
      </div>
    </div>
  );
};

export default docek;
