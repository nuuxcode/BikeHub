import { Heading, Box, Center, Flex, Select } from "@chakra-ui/react";
import { Reveal } from "../../motion/reveal.component";
import { useEffect, useRef, useState } from "react";
import axios from "../../../apis/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import CardBike from "./cardBike.component";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const SwiperBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [parks, setParks] = useState([]);
  const [selectedParkId, setSelectedParkId] = useState("all");
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);
  const [activeSlideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    axios
      .get("/parks/open")
      .then((response) => {
        setParks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching parks:", error);
      });
  }, []);

  useEffect(() => {
    let url = "/bikes/status/available/20";
    if (selectedParkId !== "all") {
      url = `/bikes/park/${selectedParkId}/available`;
    }

    axios
      .get(url)
      .then((response) => {
        setBikes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bikes:", error);
      });
  }, [selectedParkId]);

  const handleParkChange = (event:any) => {
    const parkId = event.target.value;
    setSelectedParkId(parkId);
  };
  console.log("--- ",swiperRef.current?.isEnd)
  return (
    <Box
      id="weOffer"
      minHeight={"80vh"}
      className="relative flex flex-col items-center justify-center gap-4 my-4"
      gap={4}
    >
      <Box
        className="absolute w-3/5 h-full top-0 right-0 bg-teal-100 opacity-25"
        clipPath={"circle(60% at 80% 13%)"}
      />
      <Box
        className="absolute w-1/6 h-full bottom-1 left-1 bg-teal-100 opacity-25"
        clipPath={"circle(25% at 54% 74%)"}
      />

      <Center mt={100} justifyContent={"center"} flexDirection={"column"}>
        <Reveal>
          <Heading as="h3" size={{ base: "sm", md: "xl" }} className="capitalize">
            What we offer
          </Heading>
        </Reveal>
        <Reveal>
          <Heading
            as="h1"
            size={{ base: "xl", md: "3xl" }}
            className="py-4"
            color={"orange.500"}
          >
            Explore Our Bike Range
          </Heading>
        </Reveal>
      </Center>

      <Flex mt={20} alignItems="center">
        <Box>
          <Select
            value={selectedParkId}
            onChange={handleParkChange}
            width="fit-content"
            variant="filled"
            borderColor="green.500"
            boxShadow="lg"
            sx={{
              option: {
                _hover: {
                  backgroundColor: 'green.500',
                  color: 'white',
                },
              },
            }}
          >
            <option value="all">All Parks</option>
            {parks.map((park:any) => (
              <option key={park.id} value={park.id}>
                {park.name}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>

      <Box mt={5} className="w-4/5">
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
          onAfterInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setSlideIndex(swiper.activeIndex);
            setIsSwiperInitialized(true);
          }}
          onBeforeInit={(swiper:any) => {
            swiperRef.current = swiper;
            setIsSwiperInitialized(false);
          }}
          className="mySwiper"
        >
          {bikes.map((bike, i) => (
            <SwiperSlide key={i} className="bg-transparent">
              <CardBike bike={bike} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Flex gap={4} className="mt-4 justify-center">
          <HiArrowLeft
            className={`cursor-pointer font-bold transform hover:scale-125 transition-transform ${activeSlideIndex === 0 || swiperRef.current?.isBeginning ? 'text-gray-500' : 'text-green-500'}`}
            size={24}
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <HiArrowRight
            className={`cursor-pointer font-bold transform hover:scale-125 transition-transform ${isSwiperInitialized && swiperRef.current?.isEnd ? 'text-gray-500' : 'text-green-500'}`}
            size={24}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default SwiperBikes;
