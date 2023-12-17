import { useRef, useState } from "react";
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
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "— Sarah Smith, Commuter Extraordinaire",
      tag: "@sarahsmith",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "BikeHub has redefined my biking experience! The bikes are not just means of transport; they're gateways to adventure. The seamless rental process and quality bikes keep me coming back. BikeHub, you've turned my daily commute into a joyride!",
    },
    {
      id: 2,
      name: "— Michael Johnson, Cycling Enthusiast",
      tag: "@michaeljohnson",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      review:
        "I've tried numerous bike rental services, but BikeHub stands out for its commitment to excellence. The bikes are well-maintained, and the customer service is unmatched. Whether it's a weekend getaway or a daily ride to work, BikeHub is my go-to choice.",
    },
    {
      id: 3,
      name: "— Alex Turner, Adventure Seeker",
      tag: "@alexturner",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      review:
        "As an avid cyclist, finding BikeHub was a game-changer. The variety of bikes caters to all preferences, and the ease of renting makes planning spontaneous rides a breeze. Thank you, BikeHub, for turning my biking dreams into a reality!",
    },
    {
      id: 4,
      name: "— Meriem, Fitness Enthusiast",
      tag: "@meriem",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      review:
        "BikeHub has nailed the perfect combination of convenience and quality. Renting a bike has never been this easy, and the bikes themselves are in top-notch condition. Kudos to BikeHub for providing a hassle-free biking experience!",
    },
  ];

  return (
    <Flex
      id="clients"
      height={"70vh"}
      className="relative md:flex-row flex-col items-center justify-end gap-4"
    >
      <Box
        className="absolute w-3/6 h-full top-1 right-1 bg-teal-100 opacity-25"
        clipPath={"polygon(100% 0, 41% 0, 100% 89%)"}
      />
      <Box
        className="absolute w-2/5 h-full top-0 left-0 bg-teal-100 opacity-25"
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
            What Our Clients Say
          </Heading>
        </Reveal>
        <Reveal>
          <Text className="text-gray-500 sm:text-base text-sm font-medium sm:text-start text-center">
            Discovering the Joy of Riding with BikeHub
          </Text>
        </Reveal>
        <Flex gap={3} alignSelf={{ base: "center", md: "start" }} zIndex={99}>
          <div
            className="cursor-pointer"
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <HiArrowLeft
              className={`cursor-pointer font-bold transform hover:scale-125 transition-transform ${activeSlideIndex === 0 ? 'text-gray-500' : 'text-green-500'}`}
              size={28}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
          >
            <HiArrowRight
              className={`cursor-pointer font-bold transform hover:scale-125 transition-transform ${activeSlideIndex === reviews.length - 1 ? 'text-gray-500' : 'text-green-500'}`}
              size={28}
            />
          </div>
        </Flex>
      </Center>
      <Box className="sm:w-2/3  w-11/12">
        <Swiper
          slidesPerView={1}
          spaceBetween={18}
          onSlideChange={(swiper) => {
            setActiveSlideIndex(swiper.activeIndex);
          }}
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
