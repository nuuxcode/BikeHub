import React from "react";
import LandingSwiper from "../components/home/landingSwiper/landingSwiper.component";
import HowToRent from "../components/home/howToRent/howToRent.component";

const HomePage: React.FC = () => {
  return (
    <>
      <LandingSwiper />
      <HowToRent />
    </>
  );
};

export default HomePage;
