import { Heading, Box, Center, Flex } from "@chakra-ui/react";
import { Reveal } from "../../motion/reveal.component";
import { useEffect, useRef, useState } from "react";
import axios from "../../../apis/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../index.css";

// import required modules
import CardBike from "./cardBike.component";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const SwiperBikes = () => {
  const [bikes, setBikes] = useState<[]>([]);
  const swiperRef = useRef<SwiperCore>();

  useEffect(() => {
    axios
      .get("/bikes")
      .then((response) => {
        setBikes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bikes:", error);
      });
  }, []);
  return (
    <Box
      id="weOffer"
      height={"80vh"}
      className="relative flex flex-col items-center justify-center gap-4"
    >
      <Box
        className="absolute w-2/5 h-full top-0 right-0 bg-teal-50"
        clipPath={"circle(62.2% at 80% 13%)"}
      />
      <Box
        className="absolute w-1/6 h-full bottom-1 left-1 bg-teal-50"
        clipPath={"circle(25% at 54% 74%)"}
      />

      <Center justifyContent={"center"} flexDirection={"column"}>
        <Reveal>
          <Heading as="h3" size="md" className="capitalize">
            What we offer
          </Heading>
        </Reveal>
        <Reveal>
          <Heading as="h1" size="3xl" className="py-4" color={"orange.500"}>
            Explore Our Bike Range
          </Heading>
        </Reveal>
      </Center>
      <Box className="w-4/5">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={18}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          {bikes.map((bike, i) => {
            return (
              <SwiperSlide key={i} className="bg-transparent">
                <CardBike bike={bike} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Flex gap={3} alignSelf={"start"} zIndex={99} ml={"60px"}>
          <div
            className="cursor-pointer px-2 py-1 bg-gray-50 hover:bg-gray-200 rounded-lg"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <HiArrowLeft size={28} color={`teal`} />
          </div>
          <div
            className="cursor-pointer px-2 py-1 bg-gray-50 hover:bg-gray-200 rounded-lg"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <HiArrowRight size={28} color={"teal"} />
          </div>
        </Flex>
      </Box>
    </Box>
  );
};

export default SwiperBikes;
