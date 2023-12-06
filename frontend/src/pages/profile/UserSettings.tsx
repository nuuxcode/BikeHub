import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import axios from "../../apis/axios";

const UserSettings: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user") || "{}").id;

    // Basic form validation
    if (!name || !email) {
      setError("Name and email are required fields");
      return;
    }

    // Send updated name and email to the server
    try {
      const response = await axios.put(`/users/user/${userId}`, {
        name,
        email,
      }, {
        withCredentials: true,
      });

      setSuccessMessage(response.data.message);
      setError("");
    } catch (error) {
      setSuccessMessage("");
      setError("Error updating user settings");
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user") || "{}").id;

    // Basic form validation
    if (password !== confirmPassword) {
      setError2("Passwords do not match");
      return;
    }

    // Send updated password to the server
    try {
      const response = await axios.put(`/users/user/${userId}`, {
        oldpassword : oldPassword,
        newpassword: password,
      }, {
        withCredentials: true,
      });

      setSuccessMessage(response.data.message);
      setError2("");
    } catch (error) {
      setSuccessMessage("");
      setError2("Error updating user settings");
    }
  };

  return (
    <Stack
      spacing={4}
      maxWidth="800px"
      mx="auto"
      mt={8}
      p={6}
      rounded="md"
      shadow="md"
      bg={useColorModeValue("white", "gray.800")}
      direction={{ base: "column", sm: "row" }}
    >
      {/* Name and Email Form */}
      <VStack as="form" onSubmit={handleNameEmailSubmit} spacing={4} flex={1}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Update Name and Email
        </Text>
        <FormControl isInvalid={!!error}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!error}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          mt={6}
          width="100%"
          isLoading={false}
        >
          Save Name and Email
        </Button>
      </VStack>

      {/* Change Password Form */}
      <VStack as="form" onSubmit={handlePasswordSubmit} spacing={4} flex={1}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Change Password
        </Text>
        <FormControl isInvalid={!!error2}>
          <FormLabel htmlFor="oldPassword">Old Password</FormLabel>
          <Input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <FormErrorMessage>{error2}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!error2}>
          <FormLabel htmlFor="password">New Password</FormLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormErrorMessage>{error2}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!error2}>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormErrorMessage>{error2}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          mt={6}
          width="100%"
          isLoading={false}
        >
          Change Password
        </Button>
      </VStack>

      {successMessage && (
        <Box mt={4} color="green.500" fontWeight="bold">
          {successMessage}
        </Box>
      )}
    </Stack>
  );
};

export default UserSettings;
