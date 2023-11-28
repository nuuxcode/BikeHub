import React from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import bannerImage from "../assets/images/bannerBike.jpg";

const HomePage: React.FC = () => {
  return (
    <Box
      backgroundImage={bannerImage}
      backgroundSize="cover"
      backgroundPosition="center"
      height="550px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        backgroundColor="rgba(255, 255, 255, 0.8)"
        padding="20px"
        borderRadius="md"
        display="flex"
        alignItems="center"
      >
        <Input placeholder="Search..." marginRight="10px" />
        <Button colorScheme="blue">Search</Button>
      </Box>
    </Box>
  );
};

export default HomePage;
