import { Center, Flex, Heading, Text } from "@chakra-ui/react";
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
      text: "Pick the location and the needed rent date.",
      after: true,
      delay: 1,
      id: 1,
    },
    {
      icon: MdOutlineElectricBike,
      title: "Choose A Bike",
      text: "Select a bicycle using our catalogues.",
      after: true,
      delay: 2,
      id: 2,
    },
    {
      icon: FaRoute,
      title: "Enjoy Your Ride",
      text: "Explore new sights and places with comfort.",
      after: true,
      delay: 3,
      id: 3,
    },
    {
      icon: FaMapLocationDot,
      title: "Return The Bike",
      text: "Leave the bike at one of our offices.",
      after: false,
      delay: 4,
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
      height={"85vh"}
    >
      <Center flexDirection={"column"} gap={4}>
        <Reveal>
          <Heading as="h3" size="md" className="capitalize">
            How to rent
          </Heading>
        </Reveal>
        <Reveal>
          <Heading as="h1" size="3xl" className="py-4" color={"orange.500"}>
            Simple and easy steps to rent
          </Heading>
        </Reveal>
        <Reveal>
          <Text className="text-md font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            eos maxime?
          </Text>
        </Reveal>
        <Reveal>
          <Text className="text-md font-medium text-gray-500">
            Ab id ullam quis consequuntur nesciunt blanditiis.
          </Text>
        </Reveal>
      </Center>
      <Flex>
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
