import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Form from "../components/form";
import Garancija from "../components/garancija";
import Footer from "../components/footer";

const homepage = () => {
  return (
    <div className="app_container">
      <Navbar />
      <Hero />
      <Form />
      <Garancija />
      <Footer />
    </div>
  );
};

export default homepage;
