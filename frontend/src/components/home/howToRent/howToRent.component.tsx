import { Center, Flex, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Reveal } from "../../motion/reveal.component";
import {
  FaMagnifyingGlassLocation,
  FaMapLocationDot,
  FaRoute,
} from "react-icons/fa6";

import { MdOutlineElectricBike } from "react-icons/md";
import CardSteps from "./cardSteps.component";

const HowToRent: React.FC = () => {
  const dataSteps = [
    {
      icon: FaMagnifyingGlassLocation,
      title: "Location",
      text: "Pick the location and the date.",
      after: true,
      delay: 0.5,
      id: 1,
    },
    {
      icon: MdOutlineElectricBike,
      title: "Choose A Bike",
      text: "Select the bike you like.",
      after: true,
      delay: 1.0,
      id: 2,
    },
    {
      icon: FaRoute,
      title: "Enjoy Your Ride",
      text: "Explore new sights and places with comfort.",
      after: true,
      delay: 1.5,
      id: 3,
    },
    {
      icon: FaMapLocationDot,
      title: "Return The Bike",
      text: "Leave the bike at one of our parks.",
      after: false,
      delay: 2,
      id: 4,
    },
  ];
  return (
    <Flex
      id="howToRent"
      justifyContent={"space-around"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={6}
      py={"30px"}
      minHeight={"80vh"}
      className="relative"
    >
      <Center flexDirection={"column"} gap={4}>
        <Box
          className="absolute w-full h-full top-0 left-0 bg-teal-100 opacity-25 -z-10"
          clipPath={"circle(30.2% at 10% 50%)"}
        />
        <Box
          className="absolute w-full h-full top-0 left-0 bg-teal-100 opacity-25 -z-10"
          clipPath={"circle(30.2% at 50% 10%)"}
        />
        <Box
          className="absolute w-full h-full top-0 left-0 bg-teal-100 opacity-25 -z-10"
          clipPath={"circle(20.2% at 90% 5%)"}
        />
        <Reveal>
          <Heading
            as="h3"
            size={{ base: "sm", md: "2xl" }}
            className="capitalize text-center"
          >
            How to rent
          </Heading>
        </Reveal>
        <Reveal>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            className="py-4 text-center"
            color={"orange.500"}
          >
            Simple & Easy Steps
          </Heading>
        </Reveal>
        <Reveal>
          <Text
            className="font-medium text-gray-500 text-center"
            fontSize={{ base: "xs", md: "md" }}
          >
            Choose Location, Bike & Enjoy Your Ride
          </Text>
        </Reveal>
        <Reveal>
          <Text
            className="text-md font-medium text-gray-500 text-center"
            fontSize={{ base: "xs", md: "md" }}
          >
            When you finish, return the bike to one of our parking stations.
          </Text>
        </Reveal>
      </Center>
      <Flex flexDirection={{ base: "column", md: "row" }} gap={4} justifyContent="space-between">
        {dataSteps.map(({ icon, title, text, id, after, delay }) => (
          <CardSteps
            key={id}
            Icon={icon}
            title={title}
            text={text}
            after={after}
            delay={delay}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default HowToRent;
