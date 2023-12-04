import { Heading, Box, Center } from "@chakra-ui/react";
import { Reveal } from "../../motion/reveal.component";
import { useEffect, useState } from "react";
import axios from "../../../apis/axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../index.css";

// import required modules
import { Navigation } from "swiper/modules";
import CardBike from "./cardBike.component";

const SwiperBikes = () => {
  const [bikes, setBikes] = useState<[]>([]);

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
    <Box height={"80vh"} className="flex flex-col items-center gap-4">
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
      <Box className="w-4/5 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {bikes.map((bike, i) => {
            return (
              <SwiperSlide key={i}>
                <CardBike bike={bike} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default SwiperBikes;
