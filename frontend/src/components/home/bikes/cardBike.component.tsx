import { useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Reveal } from "../../motion/reveal.component";
import bikeImage from "../../../assets/images/bikes/bike1.jpg";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";

type Bike = {
  id: number;
  model: string;
  status: string;
  lock: boolean;
  location: string;
  price_tier: string | number;
  park_id: number;
};

const CardBike = ({ bike }: { bike: Bike }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Flex
      width={{ base: "100%", sm: "265px" }}
      bg={"white"}
      direction="column"
      justifyContent="space-between"
      className="p-3 border rounded-lg"
      gap={1}
    >
      <Box
        className="w-full h-40 rounded-lg"
        position={"relative"}
        bgImage={bikeImage}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <FaHeart
          onClick={() => setLiked(!liked)}
          className={`text-gray-600 absolute top-2 right-2 w-5 h-5 cursor-pointer ${
            liked &&
            "text-red-500 berder-red-600 text-opacity-100 drop-shadow-lg"
          }`}
        />
      </Box>
      <Reveal>
        <Heading as="h1" size="md" fontWeight={500} className="capitalize">
          {bike.model}
        </Heading>
      </Reveal>
      <Reveal>
        <Text fontWeight={500} className="text-xs text-gray-500 font-medium ">
          Best choice for women
        </Text>
      </Reveal>
      <Reveal width="full" delay={0.25}>
        <Flex justifyContent={"space-between"} mb={3}>
          <Heading as="h3" size="md" fontWeight={500} color={"gray.700"}>
            ${bike.price_tier}/hour
          </Heading>
          <Flex
            rounded={"md"}
            gap={2}
            alignItems={"center"}
            px={2}
            py={0.5}
            bgColor={"orange.100"}
            color={"orange.400"}
            fontWeight={"semibold"}
          >
            <FaStar />
            <Text>4.0</Text>
          </Flex>
        </Flex>
      </Reveal>
      <hr />
      <Flex my={2}>
        <Flex className="w-1/2 gap-2">
          <MdPeopleOutline size={26} color="orange" />
          <Text className="text-gray-500 font-medium">: 2</Text>
        </Flex>
        <Flex className="w-1/2 gap-2">
          <IoSpeedometerOutline size={26} color="orange" />
          <Text className="text-gray-500 font-medium">: 35/h</Text>
        </Flex>
      </Flex>
      <Button colorScheme="teal" size="sm">
        <Reveal>
          <Text>More Detail</Text>
        </Reveal>
      </Button>
    </Flex>
  );
};

export default CardBike;