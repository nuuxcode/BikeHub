import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Tag,
  TagLabel,
  Text,
  Toast,
  useSteps,
} from "@chakra-ui/react";
import { TbManualGearbox } from "react-icons/tb";
import { MdSpeed } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdDoneAll } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import bannerImg from "../../assets/images/bikes/bookingBanner.jpg";
import bikeImage from "../../assets/images/bikes/bike1.jpg";
import { useParams } from "react-router-dom";
import axios from "../../apis/axios";
import { useAuth } from "../../hooks/useAuth";

enum Status {
  available = "green",
  maintenance = "blue",
  rented = "red",
}

const BookingPage = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [bike, setBike] = useState({
    id: 0,
    model: "",
    price_tier: 0.0,
    status: "",
    location: "",
  });
  const [data, setData] = useState({
    user_id: user?.id,
    bike_id: id,
    start_time: "",
    end_time: "",
    status: "ongoing",
    price: 0.0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [TotalPrice, setTotalPrice] = useState(0.0);

  const [errPickUp, setErrPickUp] = useState(false);
  const [errReturnTime, setErrReturnTime] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const steps = [
    { title: "Choose your bike" },
    { title: "Enter your details" },
    { title: "Payment and Confirmation" },
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  useEffect(() => {
    axios
      .get(`/bikes/bike/${id}`)
      .then((response) => {
        setBike(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rentals:", error);
      });
  }, []);

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

  const validation = () => {
    if (data.end_time === "") {
      setErrReturnTime(true);
    } else {
      setErrReturnTime(false);
    }
    if (data.start_time === "") {
      setErrPickUp(true);
    } else {
      setErrPickUp(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    validation();
    console.log(data);
    try {
      const response = await axios.post(
        "/rentals/rental",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      console.log(JSON.stringify(response?.data));
      setData({
        user_id: "",
        bike_id: "",
        start_time: "",
        end_time: "",
        status: "",
        price: 0.0,
      });
      Toast({
        title: "Successfully created!",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error: any) {
      console.log(error);
      let errorMessage = error?.response?.data?.message;
      if (typeof errorMessage === "string")
        errorMessage = error?.response?.data?.message;
      else errorMessage = error?.response?.data?.message.join(", ");

      if (!error?.response) {
        setErrMsg("Something went wrong. Please try again later.");
      } else if (error.response?.status === 400) {
        setErrMsg(errorMessage);
      } else if (error.response?.status === 401) {
        setErrMsg(errorMessage);
      }
      Toast({
        title: "Error",
        description: errMsg,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
    setIsSubmitting(false);
  };

  return (
    <div>
      <Box
        className="w-full h-72 flex flew-row justify-center items-center bg-ima"
        position={"relative"}
        // bgImage={`linear(to-t, gray.700,green.50,url(${bannerImg}) )`}
        background={`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bannerImg})`}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        shadow={"md"}
      >
        <Stepper
          size="lg"
          colorScheme="teal"
          color={"white"}
          index={activeStep}
          w="80%"
        >
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <Box className="flex flex-col justify-center items-center gap-1">
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber className="text-teal-300" />}
                  />
                </StepIndicator>

                <StepStatus
                  complete={
                    <StepTitle className=" text-lg text-teal-300 font-bold">
                      {step.title}
                    </StepTitle>
                  }
                  incomplete={
                    <StepTitle className=" text-lg  font-bold">
                      {step.title}
                    </StepTitle>
                  }
                  active={
                    <StepTitle className=" text-lg text-teal-300 font-bold">
                      {step.title}
                    </StepTitle>
                  }
                />
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box w={"80%"} ml={"auto"} mr={"auto"} my={12}>
        <Box className="flex gap-3 items-center justify-between px-2 py-3">
          <Text className="font-bold text-2xl text-teal-700">{bike.model}</Text>
          <Tag
            size={"lg"}
            borderRadius="lg"
            variant="solid"
            colorScheme={Status[bike.status as keyof typeof Status]}
          >
            <TagLabel>{bike.status}</TagLabel>
          </Tag>
        </Box>
        <Box>
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
                  <Text className="text-gray-800 font-medium">Price from:</Text>
                  <Text className="text-gray-500 font-medium">
                    ${bike.price_tier}/hour
                  </Text>
                </Flex>
              </Box>
              <Box className="flex gap-2  flex-col sm:flex-row">
                <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                  <MdOutlineAirlineSeatReclineNormal size={26} color="orange" />
                  <Text className="text-gray-800 font-medium">
                    Max passengers:
                  </Text>
                  <Text className="text-gray-500 font-medium">2</Text>
                </Flex>
                <Flex className="sm:w-1/2 w-full gap-2 border-b py-2">
                  <IoLocationOutline size={26} color="orange" />
                  <Text className="text-gray-800 font-medium">Location:</Text>
                  <Text className="text-gray-500 font-medium">
                    {bike.location}
                  </Text>
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
                  <Text className="text-gray-800 font-medium">Marin Alloy</Text>
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
          <form onSubmit={handleSubmit}>
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
                    value={data.start_time}
                    onChange={(e) => {
                      setData({ ...data, start_time: e.target.value });
                      calculateTimeDifference(e.target.value, data.end_time);
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
                    value={data.end_time}
                    onChange={(e) => {
                      setData({ ...data, end_time: e.target.value });
                      calculateTimeDifference(data.start_time, e.target.value);
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
            <Flex justifyContent={"space-between"}>
              <Text fontSize="lg" fontWeight="bold">
                Total Price:
                <span className="text-orange-500 ml-2">
                  ${TotalPrice.toFixed(2)}
                </span>
              </Text>
              <Box>
                <Button
                  ml={4}
                  variant={"solid"}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default BookingPage;
