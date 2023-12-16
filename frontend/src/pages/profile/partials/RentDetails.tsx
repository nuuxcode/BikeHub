import {
  Box,
  Flex,
  Heading,
  Tag,
  TagLabel,
  // Icon,
  Text,
} from "@chakra-ui/react";
import bikeImg from "../../../assets/images/bikes/bike1.jpg";
import qrCode from "../../../assets/images/bikes/qr-code.png";
import { Rental } from "../Profile.page";

enum Status {
  completed = "green",
  ongoing = "blue",
  lost = "red",
}

const RentDetails = ({ rent }: { rent: Rental }) => {
  return (
    <div>
      <header className="flex justify-between pr-5">
        <Heading
          as="h1"
          fontSize={20}
          fontWeight={"bold"}
          color={"teal.700"}
          pl={2}
          mb={6}
        >
          Current Rent
        </Heading>
        <Tag
          h={"fit-content"}
          // size={"ms"}
          p={2}
          borderRadius="lg"
          variant="solid"
          colorScheme={Status[rent?.status as keyof typeof Status]}
        >
          <TagLabel className=" capitalize">ongoing</TagLabel>
        </Tag>
      </header>

      <Flex gap={6} flexDirection={"column"}>
        <Box className="w-full flex flex-row justify-around gap-4">
          <Box
            className="w-40 h-40 rounded-lg"
            position={"relative"}
            bgImage={bikeImg}
            bgColor={"gray.100"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            shadow={"md"}
          ></Box>
          <Box
            className="w-40 h-40  rounded-lg"
            position={"relative"}
            bgImage={qrCode}
            bgColor={"gray.100"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            shadow={"md"}
          ></Box>
        </Box>

        <Flex
          className="flex-1 w-full"
          flexDirection={"column"}
          shadow={"md"}
          bg={"gray.50"}
          p={4}
          rounded={"lg"}
        >
          <Heading
            w={"fit-content"}
            py={2}
            marginTop={3}
            marginBottom={3}
            as="h3"
            size={{ base: "xs", md: "sm" }}
            className="capitalize"
            borderBottom={"2px solid gray"}
          >
            User Information
          </Heading>
          <Box className="flex gap-2  flex-col sm:flex-row">
            <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
              <Text className="text-gray-800 font-medium">Full Name: </Text>
              <Text className="text-gray-500 font-medium">Ayoub El Gharbi</Text>
            </Flex>

            <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
              <Text className="text-gray-800 font-medium">Age:</Text>
              <Text className="text-gray-500 font-medium">26</Text>
            </Flex>
          </Box>
          <Box className="flex gap-2  flex-col sm:flex-row">
            <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
              <Text className="text-gray-800 font-medium">Email:</Text>
              <Text className="text-gray-500 font-medium">ayoub@test.com</Text>
            </Flex>
            <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
              <Text className="text-gray-800 font-medium">Phone Number:</Text>
              <Text className="text-gray-500 font-medium">
                {/* ${bike.price}/hour */}
                6-666-665-666
              </Text>
            </Flex>
          </Box>
          <Heading
            w={"fit-content"}
            py={2}
            marginTop={8}
            marginBottom={3}
            as="h3"
            size={{ base: "xs", md: "sm" }}
            className="capitalize"
            borderBottom={"2px solid gray"}
          >
            Rent Information
          </Heading>
          <Box className="flex gap-2  flex-col sm:flex-row">
            <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
              <Text className="text-gray-800 font-medium">Bike Model: </Text>
              <Text className="text-gray-500 font-medium">Cross</Text>
            </Flex>

            <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
              <Text className="text-gray-800 font-medium">Location:</Text>
              <Text className="text-gray-500 font-medium">Msalah, Tanger</Text>
            </Flex>
          </Box>
          <Box className="flex gap-2  flex-col sm:flex-row">
            <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
              <Text className="text-gray-800 font-medium">Pick-up Time:</Text>
              <Text className="text-gray-500 font-medium">
                2021-05-05 07:00
              </Text>
            </Flex>
            <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
              <Text className="text-gray-800 font-medium">Return Time:</Text>
              <Text className="text-gray-500 font-medium">
                {/* ${bike.price}/hour */}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default RentDetails;
