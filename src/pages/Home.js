import React from "react";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Advertise from "../components/layout/Advertise";
import Banner from "../components/layout/Banner";
import Bestseller from "../components/layout/Bestseller";
import Footer from "../components/layout/Footer";
import MiddleAddvertisement from "../components/layout/MiddleAddvertisement";
import Newarrival from "../components/layout/Newarrival";
import SpecialOffer from "../components/layout/SpecialOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <Newarrival />
      <Bestseller />
      <MiddleAddvertisement />
      <SpecialOffer />
      <Footer />
    </>
  );
};

export default Home;
