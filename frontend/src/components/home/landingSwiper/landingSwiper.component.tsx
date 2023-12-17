import CardSlider from "./cardSlider.component";
import bannerImage1 from "../../../assets/images/landing/bannerBike.jpg";
import bannerImage2 from "../../../assets/images/landing/banner5.jpg";
import bannerImage3 from "../../../assets/images/landing/banner6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { Box } from "@chakra-ui/react";

const LandingSwiper = () => {
  const data = [
    {
      img: bannerImage1,
      title: "Explore the City, One Ride at a Time",
      sousTitle: "Starting from 2$ per hour",
      text1: "Discover hidden gems and scenic routes ", //
      text2: "As you pedal through the heart of the city.",
      id: 1,
    },
    {
      img: bannerImage2,
      title: "Feel the Wind, Embrace the Ride",
      sousTitle: "Starting from 15$ per day",
      text1: "Experience the thrill of riding with our ", //
      text2: "Premium bikes designed for speed and comfort.",
      id: 2,
    },
    {
      img: bannerImage3,
      title: "Unlock the Joy of Riding",
      sousTitle: "Starting from 50$ per month",
      text1: "Elevate your mood and boost your energy", //
      text2: "With every ride on our joyful bicycles.",
      id: 3,
    },
  ];
  return (
    <Box height={"80vh"}>
      <Swiper
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map(({ img, text1, text2, title, sousTitle, id }) => (
          <SwiperSlide key={id}>
            {({ isActive }) =>
              isActive && (
                <CardSlider
                  img={img}
                  text1={text1}
                  text2={text2}
                  title={title}
                  sousTitle={sousTitle}
                ></CardSlider>
              )
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default LandingSwiper;
