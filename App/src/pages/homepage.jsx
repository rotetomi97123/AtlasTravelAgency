import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Form from "../components/form";
import Garancija from "../components/garancija";
import Footer from "../components/footer";
import Akcija from "../components/akcija";
import Docek from "../components/docek";
import Ponude from "../components/ponude";

const homepage = () => {
  return (
    <div className="app_container">
      <Navbar />
      <Hero />
      <Akcija />
      <Docek />
      <Ponude />
      <Form />
      <Garancija />
      <Footer />
    </div>
  );
};

export default homepage;
