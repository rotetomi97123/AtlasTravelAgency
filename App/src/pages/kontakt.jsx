import React from "react";
import Navbar from "../components/navbar";
import Garancija from "../components/garancija";
import Footer from "../components/footer";
import Form from "../components/form";
import Kontakt_pitanja from "../components/kontakt_pitanja";
import kontakt_bg from "../assets/kontakt.jpg";

const kontakt = () => {
  return (
    <>
      <Navbar />
      <div className="kontakt_wrapper">
        <div className="kontakt_div1">
          <p className="trip_header">
            Početna {">"} <span>Kontakt</span>
          </p>
          <h1>Kontakt</h1>
          <div>
            <h2>Kontakt centar</h2>
            <p>011 00000 00 kontakt@atlas.travel</p>
          </div>
          <div>
            <h2>Poslovna saradnja</h2>
            <p>partnerstvo@atlas.travel</p>
          </div>
          <div>
            <h2>Karijera</h2>
            <p>posao@atlas.travel</p>
          </div>
          <div>
            <h2>Organizacija putovanja za grupe</h2>
            <p>grupe@atlas.travel</p>
          </div>
          <div>
            <h2>Reklamacije</h2>
            <p>reklamacije@atlas.travel</p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${kontakt_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "16px",
          }}
        >
          <div className="kontakt_div2">
            <h1>Kontaktirajte nas</h1>
            <p>Upišite svoje podatke i kontaktirajte nas putem ove forme</p>
            <div>
              <input type="text" placeholder="Ime i prezime" />
              <input type="text" placeholder="Kontakt telefon" />
            </div>
            <div>
              <input type="email" placeholder="Kontakt e-mail" />
              <select>
                <option value="">Izaberite temu</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <textarea type="text" placeholder="Vaša poruka" />
            <div className="kontakt_checkbox">
              <input type="checkbox" />
              <p>Prihvatam Uslove korišćenja i Politiku privatnosti</p>
            </div>
            <button>Pošalji upit</button>
          </div>
        </div>
      </div>
      <Kontakt_pitanja />

      <Form />
      <Garancija />
      <Footer />
    </>
  );
};

export default kontakt;
