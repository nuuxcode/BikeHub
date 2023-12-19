import { Avatar, Box, Heading, Text } from "@chakra-ui/react";
import { Rental } from "../Profile.page";
import bikeImg from "../../../assets/images/bikes/bike1.jpg";
import moment from "moment";
import { useEffect } from "react";

const RentalCard = ({
  rental,
  onclickRent,
}: {
  key: number;
  rental: Rental;
  onclickRent: (rental: Rental) => void;
}) => {
  useEffect(() => {
    moment.locale("en", {
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "1s",
        ss: "%ss",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1M",
        MM: "%dM",
        y: "1Y",
        yy: "%dY",
      },
    });
  }, []);

  return (
    <Box
      className="flex items-center justify-between rounded-lg p-2"
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
      onClick={() => onclickRent(rental)}
    >
      <Avatar
        borderRadius={"lg"}
        size={"md"}
        src={rental?.Bike?.image || bikeImg}
      />
      <Box justifySelf={"start"}>
        <Heading as="h2" fontSize={18} fontWeight={"bold"}>
          {rental.Bike?.model}
        </Heading>
        <Text fontSize={12} fontWeight={"medium"} color={"gray"}>
          {rental.Bike?.Park?.name}
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
        <Text>{moment(rental.updated_at).fromNow()}</Text>
        {/* <Text>3h</Text> */}
        {/* <Text>ago</Text> */}
      </Box>
    </Box>
  );
};

export default RentalCard;
