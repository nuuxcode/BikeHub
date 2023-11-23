import React, { useContext } from "react";
import GlobalContext from "../context/globalContext.tsx";
import { Box, Flex, Text } from "@chakra-ui/react";

const HomePage: React.FC = () => {
  const { auth } = useContext(GlobalContext);
  return (
    <Flex
      height={"full"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      <Text>Home page</Text>
      <Box>
        <Text>{auth?.email}</Text>
      </Box>
    </Flex>
  );
};

export default HomePage;
