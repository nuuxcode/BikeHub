import React from "react";
import LandingSwiper from "../components/home/landingSwiper/landingSwiper.component";
import HowToRent from "../components/home/howToRent/howToRent.component";
import SwiperBikes from "../components/home/bikes/swiperBikes.component";

const HomePage: React.FC = () => {
  return (
    <>
      <LandingSwiper />
      <HowToRent />
      <SwiperBikes />
    </>
  );
};

export default HomePage;
