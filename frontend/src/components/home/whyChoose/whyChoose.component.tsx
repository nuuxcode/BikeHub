import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { IoTimeOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { MdDirectionsBike } from "react-icons/md";
import { Reveal } from "../../motion/reveal.component";
import { IconType } from "react-icons";

import BikeImage from "../../../assets/images/bikes/bikeChoose.jpg";

type CardChooseProps = {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
};
const CardChoose = ({ id, title, description, Icon }: CardChooseProps) => {
  return (
    <Box
      key={id}
      className="group flex items-center justify-center bg-white rounded-lg px-8 py-4 gap-4 transition-all duration-300 ease-in-out cursor-pointer"
      width={{ base: "80%", md: "400px" }}
      height={{ base: "auto", md: "150px" }}
      shadow={
        "0px 0px 25px -5px rgba(0, 0, 0, 0.1), 0px 7px 10px -5px rgba(0, 0, 0, 0.04)"
      }
      _hover={{
        color: "white",
        bg: "teal.400",
        shadow: "2xl",
        transform: "scale(1.05)",
        transition: "all 0.3s ease-in-out",
      }}
    //   _groupHover={{ color: "white" }}
    >
      <Box
        // width={{ base: "50px", md: "80px" }}
        className="flex items-center justify-center rounded-full  bg-teal-200 p-3"
        _groupHover={{ bg: "teal.300", transition: "all 0.3s ease-in-out" }}
      >
        <Icon className="text-teal-500 sm:text-3xl text-xl  group-hover:text-white" />
      </Box>
      <Box
        className="flex flex-col items-start justify-center gap-2"
        _groupHover={{ color: "white", transition: "all 0.3s ease-in-out" }}
      >
        <Reveal>
          <Heading
            as="h2"
            size={{ base: "14px", md: "18px" }}
            // fontSize={"18px"}
            className="capitalize"
          >
            {title}
          </Heading>
        </Reveal>
        <Reveal>
          <Text
            className="text-gray-500 sm:text-sm text-xs font-normal"
            _groupHover={{ color: "white", transition: "all 0.3s ease-in-out" }}
          >
            {description}
          </Text>
        </Reveal>
      </Box>
    </Box>
  );
};

const WhyChoose = () => {
  const data = [
    {
      id: 1,
      title: "Community Vibes",
      description:
        "When you choose BikeHub, you join a community of like-minded cyclists. Share your favorite routes, discover new ones, and be part of a movement that celebrates the joy of biking.",
      icon: IoTimeOutline,
    },
    {
      id: 2,
      title: "Pay as You Ride",
      description:
        "No need to commit to long-term contracts. With BikeHub, you pay for the ride when you need it. Tailor your biking experience to your schedule and your wallet.",
      icon: CiWallet,
    },
    {
      id: 3,
      title: "Easy Rentals",
      description:
        "With the BikeHub app, renting a bike is as easy as a few taps. Find your ride, unlock, and roll out. We've streamlined the process so you can focus on the joy of riding.",
      icon: MdDirectionsBike,
    },
  ];
  return (
    <Box
      id="chooseUs"
      className="relative flex flex-col  justify-center items-center gap-12 my-5 py-5 "
    //   height="90vh"
    >
      <Box
        className="absolute w-2/5 h-full top-1 right-12 bg-teal-50 -z-10"
        clipPath={"polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)"}
      />
      <Reveal>
        <Heading
          as="h2"
          size={{ base: "sm", md: "xl" }}
          className=" mb-3 capitalize"
          mt={100}
        >
          why choose BikeHub 🚴‍♂️✨
        </Heading>
      </Reveal>
      <Reveal>
        <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px" mb={2}>
          🚲 Dive into urban adventures on stylish, eco-friendly bikes.
        </Text>
        <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px" mb={2}>
          ⚙️ Easy Rentals: Swift and smart with our user-friendly app.
        </Text>
        <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px" mb={2}>
          🌍 Eco-Friendly: Ride green, reduce your carbon footprint.
        </Text>
        <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px" mb={2}>
          🤝 Community Vibes: Join a cyclist family!
        </Text>
        <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px">
          Choose BikeHub – Where Every Ride is an Adventure!🚴‍♀️
        </Text>
      </Reveal>
      <Box className=" w-full flex md:flex-row flex-col justify-evenly gap-5 ">
        <Box className="flex-1 text-center">
          <Image
            src={BikeImage}
            mx={"auto"}
            width={{ base: "80%", md: "100%" }}
            mt={10}
          />
        </Box>
        <Box className="flex flex-1 flex-col gap-4 md:justify-start items-center">
          {data.map((item) => (
            <CardChoose
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              Icon={item.icon}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChoose;
