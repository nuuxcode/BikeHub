import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import notFoundImage from "../../assets/images/404.png";
import { Link } from "react-router-dom";

/**
 * NotFoundPage: A React component representing the 404 error page.
 */
const NotFoundPage: React.FC = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        bgImage={notFoundImage}
        width={"550px"}
        height={"450px"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
      ></Box>
      <Text fontSize="3xl" fontWeight="bold" color={"darkcyan"} mt={4}>
        Error 404: Page Not Found
      </Text>
      <Text mt={2}>
        We're sorry, but the page you are looking for does not exist.
      </Text>

      <Link to="/">
        <Button colorScheme="teal" variant="solid" mt={5}>
          Back Home
        </Button>
      </Link>
    </Flex>
  );
};

export default NotFoundPage;
