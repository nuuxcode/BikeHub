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
      title: "favorite rentals service",
      sousTitle: "Starting from 3$ per hour",
      text1: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text2: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      id: 1,
    },
    {
      img: bannerImage2,
      title: "favorite rentals service",
      sousTitle: "Starting from 15$ per day",
      text1: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text2: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      id: 1,
    },
    {
      img: bannerImage3,
      title: "favorite rentals service",
      sousTitle: "Starting from 3$ per hour",
      text1: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text2: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      id: 1,
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
        {data.map(({ img, text1, text2, title, sousTitle }) => (
          <SwiperSlide>
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
