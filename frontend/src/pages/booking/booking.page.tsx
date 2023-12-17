import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
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
import { useParams } from "react-router-dom";
import axios from "../../apis/axios";
import { useAuth } from "../../hooks/useAuth";

import { DateTimeRangePicker } from 'react-datetime-range-super-picker';
import 'react-datetime-range-super-picker/dist/index.css'
import { useToast } from "@chakra-ui/react";

enum Status {
  available = "green",
  maintenance = "blue",
  rented = "red",
}

const BookingPage = () => {
  const toast = useToast({ position: "top" });
  const { user } = useAuth();
  const { id } = useParams();
  const [bike, setBike] = useState({
    id: 0,
    model: "",
    status: "",
    location: "",
    price: 0.0,
    image: "",
    Park: {
      name: ""
    }
  });
  const [data, setData] = useState({
    user_id: user?.id,
    bike_id: Number(id),
    start_time: "",
    end_time: "",
    status: "",
    price: 0.0,
    qrcode: "",
    payment_id: "",
    order_id: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [TotalPrice, setTotalPrice] = useState(0.0);
  // const [errPickUp, setErrPickUp] = useState(false);
  // const [errReturnTime, setErrReturnTime] = useState(false);
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
    axios.get(`/bikes/bike/${id}`).then((response) => {
      setBike(response.data);
    }).catch((error) => {
      console.error("Error fetching rentals:", error);
    });
  }, []);




  // const validation = () => {
  //   if (data.end_time === "") { setErrReturnTime(true); } else { setErrReturnTime(false); }
  //   if (data.start_time === "") { setErrPickUp(true); } else { setErrPickUp(false); }
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    //validation();
    console.log("data", data);
    try {
      data.status = "rented";
      data.start_time = new Date(data.start_time).toISOString();
      data.end_time = new Date(data.end_time).toISOString();
      const response = await axios.post(
        "/rentals/rental",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("response:", response); errMsg
      console.log(JSON.stringify(response?.data));
      setTotalPrice(0.0);
      setData({
        user_id: user?.id,
        bike_id: Number(id),
        start_time: "",
        end_time: "",
        status: "",
        price: 0.0,
        qrcode: "",
        payment_id: "",
        order_id: ""
      });
      toast({
        title: "Successfully created!",
        description: "Thank you for your booking.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setActiveStep(2);
    } catch (error: any) {
      console.log(error);
      let errorMessage = error?.response?.data?.message;
      if (typeof errorMessage === "string")
        errorMessage = error?.response?.data?.message;
      else errorMessage = error?.response?.data?.message.join(", ");

      if (!error?.response) {
        setErrMsg("Something went wrong. Please try again later.");
      } else if (error.response?.status === 400) {
        console.log("error:", errorMessage);
        setErrMsg(errorMessage);
      } else if (error.response?.status === 401) {
        console.log("error:", errorMessage);
        setErrMsg(errorMessage);
      }
      toast({
        title: "Error",
        description: errorMessage || "Something went wrong.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
    setIsSubmitting(false);
  };

  function calculateTimeDifference(pickUp: string, returnTime: string): number {
    const pickUpTime = new Date(pickUp);
    const returnTimeObj = new Date(returnTime);
    const timeDifference = returnTimeObj.getTime() - pickUpTime.getTime();
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    if (hoursDifference < 0 || isNaN(hoursDifference)) { return 0; }
    return hoursDifference;
  }
  const [from_date, setFromDate] = useState(new Date())
  const [to_date, setToDate] = useState(new Date())

  const handleFromDateUpdate = ({ date }: any) => {
    console.log("date from", date.date)
    setFromDate(date.date)
  }
  useEffect(() => {
    setData(prevData => ({ ...prevData, start_time: from_date.toISOString() }));
    setTotalPrice(calculateTimeDifference(from_date.toISOString(), to_date.toISOString()) * bike.price);
  }, [from_date]);

  const handleToDateUpdate = ({ date }: any) => {
    console.log("date to", date.date)
    setToDate(date.date)
  }
  useEffect(() => {
    setData(prevData => ({ ...prevData, end_time: to_date.toISOString() }));
    setTotalPrice(calculateTimeDifference(from_date.toISOString(), to_date.toISOString()) * bike.price);
  }, [to_date]);
  return (
    <div>
      <Box
        className="w-full h-20 flex flew-row justify-center items-center bg-ima"
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
        <Box className="flex gap-3 px-2 py-3">
          <Text className="font-bold text-2xl text-teal-700">{bike.model}</Text>
          <Tag
            size={"lg"}
            borderRadius="lg"
            variant="solid"
            colorScheme={Status[bike.status as keyof typeof Status]}
          >
            <TagLabel>{bike.status}</TagLabel>
          </Tag>
          <Tag
            size={"lg"}
            borderRadius="lg"
            variant="solid"
            colorScheme={Status[bike.status as keyof typeof Status]}
          >
            <TagLabel>{bike.Park.name}</TagLabel>
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
              bgImage={bike.image}
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
                    ${bike.price}/hour
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

        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <Flex direction={["column", "row"]} display="flex" alignItems="center" justifyContent="center" >
          <Box border="1px" borderColor="gray.200" boxShadow="lg" p={4} rounded="md" display="flex" flexDirection="column">
            <Flex gap={4} className="max-sm:flex-col" justifyContent="center">
              <DateTimeRangePicker
                from_date={from_date}
                to_date={to_date}
                format="yyyy-MM-dd HH:mm"
                timeFormat="HH:mm"
                dateFormat="yyyy-MM-dd"
                weekStartsOn={1}
                colors={{
                  "primary_color": "#C6ECD8",
                  "primary_highlight_color": "#266F48",
                  "secondary_highlight_color": "#38A169",
                  "primary_font_color": "#000000",
                  "light_font_color": "#FFFFFF",
                  "secondary_color": "#78D1A3"
                }}
                onFromDateTimeUpdate={handleFromDateUpdate}
                onToDateTimeUpdate={handleToDateUpdate}
              />
            </Flex>
          </Box>
          <Box border="1px" borderColor="gray.200" boxShadow="lg" p={4} rounded="md" display="flex" flexDirection="column" justifyContent="center" width={["100%", "20%"]} height={"100%"} ml={100} mt={[4, 0]}
          >
            <Text fontSize="lg" fontWeight="bold">
              Total Price:
              <span className="text-orange-500 ml-2">
                ${TotalPrice.toFixed(2)}
              </span>
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Duration of Rent:
              <span className="text-orange-500 ml-2">
                {data.start_time && data.end_time ? `${calculateTimeDifference(data.start_time, data.end_time).toFixed(2)} hours` : 'N/A'}
              </span>
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Start Date:
              <span className="text-orange-500 ml-2">
                {data.start_time ? new Date(data.start_time).toLocaleString() : 'N/A'}
              </span>
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              End Date:
              <span className="text-orange-500 ml-2">
                {data.end_time ? new Date(data.end_time).toLocaleString() : 'N/A'}
              </span>
            </Text>
            <Box mt={4} display="flex" justifyContent="center">
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
          </Box>
        </Flex>
      </form>
    </div>
  );
};

export default BookingPage;
