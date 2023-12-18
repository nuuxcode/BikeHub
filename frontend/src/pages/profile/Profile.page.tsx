import {
  Avatar,
  Box,
  Flex,
  Heading,
  Spinner,
  // Icon,
  Text,
} from "@chakra-ui/react";
import MiniCalendar from "../../components/calender/MniCalender";
import RentDetails from "./partials/RentDetails";
import { useEffect, useState } from "react";
import axios from "../../apis/axios";
import { useAuth } from "../../hooks/useAuth";
import Rental from "./partials/RentalCard";

export type Rental = {
  id: number;
  price: number;
  status: string;
  start_time: string;
  end_time: string;
  qrcode: string;
  created_at: string;
  updated_at: string;
  User: {
    id: number;
    name: string;
    email: string;
    image: string;
    phone: string;
    birthdate: string;
  };
  Bike: {
    model: string;
    image: string;
    status: string;
    location: string;
    Park: {
      id: number;
      name: string;
      location: string;
      image: string;
    };
  };
};
const Profile = () => {
  const [rentals, setrentals] = useState<Rental[]>([]);
  const [currRental, setcurrRental] = useState<Rental | null>(null); // rentals[0]
  const [isLoaded, setIsLoaded] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`/rentals/user/${user?.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setrentals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rentals:", error);
      });
  }, []);
  useEffect(() => {
    setcurrRental(rentals[0]);
    setIsLoaded(false);
  }, [rentals]);

  const handleRentalClick = (rental: Rental) => {
    setcurrRental(rental);
  };
  return (
    <Box className=" mx-auto px-4 py-12 sm:px-16" minHeight={"80vh"}>
      <Flex flexWrap={"wrap"} justifyContent={"space-between"}>
        <Box
          className=" flex flex-col gap-5 md:flex-row lg:flex-col lg:justify-between"
          w={{ base: "full", md: "full", lg: "300px" }}
        >
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
              src={user?.image}
              name={user?.name}
              size={"xl"}
              className="mx-auto -mt-10 border-4 border-white"
            ></Avatar>
            <Heading
              as="h2"
              fontSize={18}
              fontWeight={"bold"}
              className=" font my-3 text-center capitalize"
            >
              {user?.name}
            </Heading>

            <Flex justifyContent={"space-evenly"} my={6}>
              <Box
                className="flex flex-col items-center justify-center"
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
          <MiniCalendar selectRange={false} />
        </Box>

        <Box
          minHeight={"80vh"}
          minW={{ base: "full", lg: "600px" }}
          shadow={"lg"}
          p={5}
          borderRadius={"2xl"}
        >
          {rentals.length > 0 ? (
            <RentDetails rent={currRental} />
          ) : (
            <Box className="flex h-full items-center justify-center">
              <Text fontSize={18} fontWeight={"bold"} color={"gray"}>
                No history yet
              </Text>
            </Box>
          )}
        </Box>

        <Box
          width={{ base: "full", md: "350px" }}
          h={"fit-content"}
          shadow={"lg"}
          borderRadius={"2xl"}
          p={3}
        >
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
          <Box overflow={"auto"} height={"600px"}>
            {isLoaded ? (
              <Box className="flex h-full items-center justify-center">
                <Spinner size="xl" />
              </Box>
            ) : rentals.length > 0 ? (
              rentals.map((rental) => (
                <Rental
                  key={rental.id}
                  rental={rental}
                  onclickRent={handleRentalClick}
                />
              ))
            ) : (
              <Box className="flex h-full items-center justify-center">
                <Text fontSize={18} fontWeight={"bold"} color={"gray"}>
                  No history yet
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
