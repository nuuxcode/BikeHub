import {
  Avatar,
  Box,
  Flex,
  Heading,
  // Icon,
  Text,
} from "@chakra-ui/react";
import bikeImg from "../../assets/images/bikes/bike1.jpg";
import MiniCalendar from "../../components/calender/MniCalender";
import RentDetails from "./partials/RentDetails";
import { useEffect, useState } from "react";
import axios from "../../apis/axios";

export type Rental = {
  id: number;
  price: number;
  status: string;
  bike: {
    name: string;
    location: string;
  };
};
const Profile = () => {
  const [rentals, setrentals] = useState<Rental[]>([]);

  useEffect(() => {
    axios
      .get(`/rentals/user/8`)
      .then((response) => {
        setrentals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rentals:", error);
      });
  }, []);
  return (
    <Box className="container mx-auto px-4 sm:px-16 py-12" minHeight={"80vh"}>
      <Flex justifyContent={"space-between"}>
        <Box w="300px">
          <Box
            className="flex flex-col shadow-xl"
            borderRadius={"2xl"}
            shadow={"lg"}
            p={2}
            width="full"
            height="350px"
          >
            <Box
              w="100%"
              h="100px"
              bgGradient={"linear(to-r, teal.500, teal.300)"}
              borderRadius={"md"}
            ></Box>
            <Avatar
              src={
                "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              size={"xl"}
              className="-mt-10 mx-auto border-4 border-white"
            ></Avatar>
            <Heading
              as="h2"
              fontSize={18}
              fontWeight={"bold"}
              className=" capitalize text-center my-3 font"
            >
              ayoub El Gharbi
            </Heading>

            <Flex justifyContent={"space-evenly"} my={6}>
              <Box
                className="flex flex-col justify-center items-center"
                w={"70px"}
                h={"70px"}
                textAlign={"center"}
                border={"4px solid teal"}
                borderRadius={"full"}
              >
                <Heading as="h2" fontSize={24} fontWeight={"bold"}>
                  {rentals.length}
                </Heading>
                <Text fontSize={12} fontWeight={"medium"} color={"gray"}>
                  Rents
                </Text>
              </Box>
            </Flex>
          </Box>
          <MiniCalendar minW="100%" selectRange={false} />
        </Box>
        <Box
          minHeight={"80vh"}
          width="45%"
          shadow={"lg"}
          p={5}
          borderRadius={"2xl"}
        >
          <RentDetails rent={rentals[1]} />
        </Box>
        <Box width="350px" shadow={"lg"} borderRadius={"2xl"} p={3}>
          <Heading
            as="h1"
            fontSize={20}
            fontWeight={"bold"}
            color={"teal.700"}
            pl={2}
            mb={6}
          >
            Rentals
          </Heading>
          <hr className="mb-2" />
          {rentals.length > 0 ? (
            rentals.map((rental) => (
              <Box
                className="flex justify-between items-center p-2 rounded-lg"
                _hover={{
                  bg: "gray.50",
                  cursor: "pointer",
                  shadow: "xl",
                  transition: "all 0.2s ease-in-out",
                }}
                _focus={{
                  bg: "gray.50",
                  cursor: "pointer",
                  shadow: "xl",
                }}
              >
                <Avatar borderRadius={"lg"} size={"md"} src={bikeImg} />
                <Box justifySelf={"start"}>
                  <Heading as="h2" fontSize={18} fontWeight={"bold"}>
                    {rental.bike?.name}
                  </Heading>
                  <Text fontSize={12} fontWeight={"medium"} color={"gray"}>
                    {rental.bike?.location}
                  </Text>
                </Box>
                <Box
                  fontWeight={"bold"}
                  fontSize={18}
                  textAlign={"center"}
                  color={"orange"}
                >
                  <Text>${rental?.price}</Text>
                  {/* <Text></Text> */}
                </Box>
                <Box color={"gray"} fontSize={"small"} fontWeight={"medium"}>
                  <Text>3h</Text>
                  <Text>ago</Text>
                </Box>
              </Box>
            ))
          ) : (
            <Box className="flex justify-center items-center h-full">
              <Text fontSize={18} fontWeight={"bold"} color={"gray"}>
                No history yet
              </Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
