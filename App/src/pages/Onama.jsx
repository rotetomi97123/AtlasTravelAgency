import React from "react";
import Navbar from "../components/navbar";
import onamaVideo from "../assets/onama.mp4";
import Footer from "../components/footer";
import Form from "../components/form";
import Garancija from "../components/garancija";

const Onama = () => {
  return (
    <>
      <div className="onama_container">
        <Navbar />
        <div className="onama_wrapper">
          <div>
            <p className="trip_header">
              Početna {">"} <span>O nama</span>
            </p>
            <h1>O nama</h1>
            <p>
              Upoznajte Atlas Travel Group,
              <span>
                licenciranu turističku agenciju organizatora putovanja
              </span>
              , osnovanu 2009. godine. Atlas Travel Group je deo najbrže rastuće
              turističke grupacije u regionu,
              <span>Atlas Travel Group,</span>
              koja posluje u 7 zemalja, kroz 13 poslovnica i široku mrežu
              subagenata i saradnika.
            </p>
          </div>
          <div>
            <video width="600" controls>
              <source src={onamaVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="Onama_turizam">
          <div className="Onama_turizam_div1">
            <h1>Turizam</h1>
            <p>
              Atlas Travel aktivno sarađuje sa malim, srednjim i velikim
              kompanijama u realizaciji turističkih projekata svih nivoa
              kompleksnosti. Pored toga, Atlas Travel realizuje
              <span>klasična turistička putovanja za sve generacije</span>
              za desetine hiljada putnika, kao što su letovanja, zimovanja,
              doček nove godine u evropskim metropolama.<br></br> <br></br>{" "}
              Atlas Travel kao najveći turistički brend za mlade na ovim
              prostorima potpisuje brojna party i omladinska putovanja, đačke i
              studentske ekskurzije, letovanja i zimovanja. Danas je Atlas
              Traveldokazano apsolutni lider u omladinskom turizmu,
              najzahtevnijoj grani turizma prema rečima stručnjaka.
            </p>
            <h3>
              U Atlas Travel turističkoj agenciji, znamo da u životu svake osobe
              bitan deo zauzimaju putovanja i zbog toga naš tim godinama vredno
              radi na tome da ona budu profesionalno organizovana i osmišljena
              do najsitnijih detalja. Baš ti detalji se pamte i prepričavaju, a
              vremenom postaju najlepše uspomene.
              <span>
                Pozitivne uspomene desetina hiljada putnika, naša su najveća
                referenca u turizmu.{" "}
              </span>
            </h3>
            <p>
              <span>Turistička agencija Atlas Travel</span>
              posluje kao članica turističke grupacije Atlas Travel Group, kroz
              svoje poslovnice, kroz franšizne poslovnice (Niš i Novi Sad) i
              zastupnike u Makedoniji, Rumuniji, Crnoj Gori, Bosni i
              Hercegovini, Hrvatskoj i Bugarskoj.<br></br> <br></br>Zajedno sa
              turističkom agencijom Atlas Travel, od 2022. godine u grupaciji
              posluje i Travel Master, turistička agencija specijalizovana za
              individualna putovanja.
            </p>
            <h3>
              Posedujemo sve potrebne licence turoperatera
              <span>– organizatora turističkih putovanja</span>
              Republike Srbije, prema svim važećim domaćim i inostranim Zakonima
              i propisima, uz odgovarajuće garancije putovanja. Članovi smo
              Privredne komore Srbije i Privredne komore Beograda. Od osnivanja
              <span>
                nikada nismo bili u blokadi što potvrđuju i evidencije Narodne
                banke
              </span>
              Srbije.{" "}
            </h3>
          </div>
          <div className="Onama_turizam_div2">
            <div>
              <h2>2009</h2>
              <p>Organizovano prvo party putovanje za preko 3000 mladih.</p>
            </div>
            <div>
              <h2>2010</h2>
              <p>
                Novi turistički proizvodi u ponudi (letovanje, zimovanje,
                studentske ekskurzije)
              </p>
            </div>
            <div>
              <h2>2011</h2>
              <p>
                Nova poslovnica i otvorene nove destinacije (Španija, Italija,
                Turska)
              </p>
            </div>
            <div>
              <h2>2016</h2>
              <p>
                Realizovano preko 15.000 turističkih aranžmana. Ostvarena
                saradnja sa nekoliko opština na projektima realizacije maturskih
                letovanja.
              </p>
            </div>
            <div>
              <h2>2020</h2>
              <p>
                Kupovina prvog autobusa i pokretanje novih turističkih proizvoda
                i destinacija.
              </p>
            </div>
            <div>
              <h2>Danas</h2>
              <p>
                Preko 30.000 putnika godišnje koristi Atlas Travel Group usluge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Garancija />
      <Footer />
    </>
  );
};

export default Onama;
