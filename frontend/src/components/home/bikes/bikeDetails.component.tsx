import { useState } from "react";
import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  // useDisclosure,
  Flex,
  Box,
  Text,
  Heading,
  TagLabel,
  Tag,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Bike } from "./cardBike.component";
import bikeImage from "../../../assets/images/bikes/bike1.jpg";
import { TbManualGearbox } from "react-icons/tb";
import { MdSpeed } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdDoneAll } from "react-icons/md";

type Model = {
  isOpen: boolean;
  onClose: () => void;
  bike: Bike;
};
enum Status {
  available = "green",
  maintenance = "blue",
  rented = "red",
}

const BikeDetails = ({ isOpen, onClose, bike }: Model) => {
  const [data, setData] = useState({
    pickUp: "",
    return: "",
  });
  const [TotalPrice, setTotalPrice] = useState(0.0);

  const [errPickUp, setErrPickUp] = useState(false);
  const [errReturnTime, setErrReturnTime] = useState(false);
  // const [errData, setErrData] = useState({
  //   pickUp: false,
  //   returnTime: false,
  // });
  /**
   * Calculates the difference in hours between two given times.
   *
   * @param pickUp - The pick-up time in ISO 8601 format.
   * @param returnTime - The return time in ISO 8601 format.
   *
   * @returns {number} - The difference in hours between the two times.
   */
  function calculateTimeDifference(pickUp: string, returnTime: string): number {
    const pickUpTime = new Date(pickUp);
    const returnTimeObj = new Date(returnTime);

    // Calculate the time difference in milliseconds
    const timeDifference = returnTimeObj.getTime() - pickUpTime.getTime();

    // Convert the time difference to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    if (hoursDifference < 0 || isNaN(hoursDifference)) {
      setTotalPrice(0);
      return 0;
    }
    setTotalPrice(hoursDifference * bike.price_tier);
    return hoursDifference;
  }

  const handleSubmit = () => {
    if (data.return === "") {
      setErrReturnTime(true);
    } else {
      setErrReturnTime(false);
    }
    if (data.pickUp === "") {
      setErrPickUp(true);
    } else {
      setErrPickUp(false);
    }
    console.log("submit");
    console.log(data);
  };
  return (
    <>
      <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="flex gap-3 items-center">
            <Text className="font-bold text-teal-700">{bike.model}</Text>
            <Tag
              size={"md"}
              borderRadius="lg"
              variant="solid"
              colorScheme={Status[bike.status as keyof typeof Status]}
            >
              <TagLabel>{bike.status}</TagLabel>
            </Tag>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              gap={6}
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Box
                className="md:w-5/12 w-full h-80 rounded-lg"
                position={"relative"}
                bgImage={bikeImage}
                bgColor={"gray.100"}
                bgPosition={"center"}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
                shadow={"md"}
              ></Box>
              <Flex
                className="flex-1 w-full"
                flexDirection={"column"}
                shadow={"md"}
                bg={"gray.50"}
                p={4}
                rounded={"lg"}
              >
                <Box className="flex gap-2  flex-col sm:flex-row">
                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <IoPersonOutline size={26} color="orange" />
                    <Text className="text-gray-800 font-medium">
                      Minimal driver age:{" "}
                    </Text>
                    <Text className="text-gray-500 font-medium">15</Text>
                  </Flex>

                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <TbManualGearbox size={26} color="orange" />
                    <Text className="text-gray-800 font-medium">Gearbox:</Text>
                    <Text className="text-gray-500 font-medium">2</Text>
                  </Flex>
                </Box>
                <Box className="flex gap-2  flex-col sm:flex-row">
                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <MdSpeed size={26} color="orange" />
                    <Text className="text-gray-800 font-medium">Mileage:</Text>
                    <Text className="text-gray-500 font-medium">Unlimited</Text>
                  </Flex>
                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <AiOutlineDollarCircle size={26} color="orange" />
                    <Text className="text-gray-800 font-medium">
                      Price from:
                    </Text>
                    <Text className="text-gray-500 font-medium">
                      ${bike.price_tier}/hour
                    </Text>
                  </Flex>
                </Box>
                <Box className="flex gap-2  flex-col sm:flex-row">
                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <MdOutlineAirlineSeatReclineNormal
                      size={26}
                      color="orange"
                    />
                    <Text className="text-gray-800 font-medium">
                      Max passengers:
                    </Text>
                    <Text className="text-gray-500 font-medium">2</Text>
                  </Flex>
                </Box>
                <Heading
                  w={"fit-content"}
                  py={2}
                  marginTop={8}
                  as="h3"
                  size={{ base: "xs", md: "sm" }}
                  className="capitalize"
                  borderBottom={"2px solid gray"}
                >
                  ADDITIONAL INFORMATION
                </Heading>
                <Box className="flex gap-2 flex-col sm:flex-row">
                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <MdDoneAll size={18} color="teal" />
                    <Text className="text-gray-800 font-medium">
                      Marin Alloy
                    </Text>
                  </Flex>
                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <MdDoneAll size={18} color="teal" />
                    <Text className="text-gray-800 font-medium">
                      Safety Helmet
                    </Text>
                  </Flex>
                </Box>
                <Box className="flex gap-2 flex-col sm:flex-row">
                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <MdDoneAll size={18} color="teal" />
                    <Text className="text-gray-800 font-medium">
                      SunRace 11-Speed Cassette
                    </Text>
                  </Flex>
                  <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                    <MdDoneAll size={18} color="teal" />
                    <Text className="text-gray-800 font-medium">
                      Tubeless Compatible
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Box className="mt-6 py-4">
              {/* <FormControl isInvalid={}>
                {errMsg && (
                  <FormErrorMessage justifyContent={"center"}>
                    {errMsg}
                  </FormErrorMessage>
                )}
              </FormControl> */}
              <Flex gap={4} className="max-sm:flex-col">
                <FormControl id="pickUp" isInvalid={errPickUp}>
                  <FormLabel>Pick Up Time</FormLabel>
                  <Input
                    type="datetime-local"
                    value={data.pickUp}
                    onChange={(e) => {
                      setData({ ...data, pickUp: e.target.value });
                      calculateTimeDifference(e.target.value, data.return);
                    }}
                    placeholder="Pick Up Time"
                  />
                  <FormErrorMessage>
                    Pick Up Time should not be empty
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="return" isInvalid={errReturnTime}>
                  <FormLabel>Return time</FormLabel>
                  <Input
                    value={data.return}
                    onChange={(e) => {
                      setData({ ...data, return: e.target.value });
                      calculateTimeDifference(data.pickUp, e.target.value);
                    }}
                    placeholder="Return time"
                    type="datetime-local"
                  />
                  <FormErrorMessage>
                    Return time should not be empty
                  </FormErrorMessage>
                </FormControl>
              </Flex>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={"space-between"}>
            <Text fontSize="lg" fontWeight="bold">
              Total Price: ${TotalPrice.toFixed(2)}
            </Text>
            <Box>
              <Button onClick={onClose} variant={"outline"} colorScheme="teal">
                Close
              </Button>
              <Button
                ml={4}
                onClick={handleSubmit}
                variant={"solid"}
                colorScheme="teal"
              >
                Submit
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BikeDetails;
