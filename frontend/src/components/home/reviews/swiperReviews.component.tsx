import { useRef } from "react";
import { Heading, Box, Center, Text, Flex } from "@chakra-ui/react";
import { Reveal } from "../../motion/reveal.component";
import CardReview from "./cardReview.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { Swiper as SwiperCore } from "swiper/types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../index.css";

// import required modules

const SwiperReviews = () => {
  const swiperRef = useRef<SwiperCore>();

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      tag: "@johndoe",
      avatar:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 2,
      name: "John Doe",
      tag: "@johndoe",
      avatar:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 3,
      name: "John Doe",
      tag: "@johndoe",
      avatar:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 4,
      name: "John Doe",
      tag: "@johndoe",
      avatar:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
  ];

  return (
    <Flex
      id="clients"
      height={"70vh"}
      className="relative md:flex-row flex-col items-center justify-end gap-4"
    >
      <Box
        className="absolute w-3/6 h-full top-1 right-1 bg-teal-50"
        clipPath={"polygon(100% 0, 41% 0, 100% 89%)"}
      />
      <Box
        className="absolute w-2/5 h-full top-0 left-0 bg-teal-50"
        clipPath={"circle(62.2% at 13% 80%)"}
      />

      <Center
        width={"300px"}
        justifyContent={"end"}
        alignItems={"center"}
        // alignItems={{ base: "start", md: "center" }}
        flexDirection={"column"}
        gap={4}
      >
        <Reveal>
          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            className="capitalizesl sm:text-start text-center"
          >
            What client say about us
          </Heading>
        </Reveal>
        <Reveal>
          <Text className="text-gray-500 sm:text-base text-sm font-medium sm:text-start text-center">
            proper busniess solution for your developing business
          </Text>
        </Reveal>
        <Flex gap={3} alignSelf={{ base: "center", md: "start" }} zIndex={99}>
          <div
            className="cursor-pointer"
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <HiArrowLeft size={28} color={`teal`} />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <HiArrowRight size={28} color={"teal"} />
          </div>
        </Flex>
      </Center>
      <Box className="sm:w-2/3  w-11/12">
        <Swiper
          slidesPerView={1}
          spaceBetween={18}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper py-5 px-[10px]"
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <CardReview review={review} isActive={isActive} />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Flex>
  );
};

export default SwiperReviews;
