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
import moment from "moment";
import QRCodeComponent from "../../../components/qrcode/qrcode";

enum Status {
  completed = "green",
  ongoing = "blue",
  lost = "red",
}

const RentDetails = ({ rent }: { rent: Rental | null }) => {
  const handleDate = (date: string | undefined) => {
    return moment(date).format("MMM Do YY, h:mm a");
  };
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
          Rent Details
        </Heading>
        <Tag
          h={"fit-content"}
          // size={"ms"}
          p={2}
          borderRadius="lg"
          variant="solid"
          colorScheme={Status[rent?.status as keyof typeof Status]}
        >
          <TagLabel className=" capitalize">{rent?.status}</TagLabel>
        </Tag>
      </header>

      <Flex gap={6} flexDirection={"column"}>
        <Box className="flex w-full flex-row justify-around gap-4">
          <Box
            className="h-40 w-1/3 rounded-lg"
            position={"relative"}
            bgImage={rent?.Bike?.image || bikeImg}
            bgColor={"gray.100"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            shadow={"md"}
          ></Box>
          <Box
            className="h-40 w-40  rounded-lg"
            position={"relative"}
            // bgImage={rent?.qrcode || qrCode}
            bgColor={"gray.100"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            shadow={"md"}
          ><QRCodeComponent id={Number(rent?.id)} size={140} /></Box>

        </Box>

        <Flex
          className="w-full flex-1"
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
          <Box className="flex flex-col  gap-2 sm:flex-row">
            <Flex className="w-full flex-wrap gap-2 border-b py-2 sm:w-1/2">
              <Text className="font-medium text-gray-800">Full Name: </Text>
              <Text className="font-medium text-gray-500">
                {rent?.User?.name}
              </Text>
            </Flex>

            <Flex className="w-full gap-2 border-b py-2 sm:w-1/2">
              <Text className="font-medium text-gray-800">Age:</Text>
              <Text className="font-medium text-gray-500">
                {moment().diff(rent?.User?.birthdate, "years")}
              </Text>
            </Flex>
          </Box>
          <Box className="flex flex-col  gap-2 sm:flex-row">
            <Flex className="w-full gap-2 border-b py-2 sm:w-1/2">
              <Text className="font-medium text-gray-800">Email:</Text>
              <Text className="font-medium text-gray-500">
                {rent?.User?.email}
              </Text>
            </Flex>
            <Flex className="w-full gap-2 border-b py-2 sm:w-1/2">
              <Text className="font-medium text-gray-800">Phone Number:</Text>
              <Text className="font-medium text-gray-500">
                {rent?.User?.phone}
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
          <Box className="flex flex-col  gap-2 sm:flex-row">
            <Flex className="w-full gap-2 border-b py-2 sm:w-1/2">
              <Text className="font-medium text-gray-800">Bike Model: </Text>
              <Text className="font-medium text-gray-500">
                {rent?.Bike?.model}
              </Text>
            </Flex>

            <Flex className="w-full gap-2 border-b py-2 sm:w-1/2">
              <Text className="font-medium text-gray-800">Location:</Text>
              <Text className="font-medium text-gray-500">
                {rent?.Bike?.location}
              </Text>
            </Flex>
          </Box>
          <Box className="flex flex-col  gap-2 sm:flex-row">
            <Flex className="w-full gap-2 border-b py-2 sm:w-1/2">
              <Text className="font-medium text-gray-800">Pick-up Time:</Text>
              <Text className="font-medium text-gray-500">
                {handleDate(rent?.start_time)}
              </Text>
            </Flex>
            <Flex className="w-full gap-2 border-b py-2 sm:w-1/2">
              <Text className="font-medium text-gray-800">Return Time:</Text>
              <Text className="font-medium text-gray-500">
                {handleDate(rent?.end_time)}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default RentDetails;
