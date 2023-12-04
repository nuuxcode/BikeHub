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
} from "@chakra-ui/react";
import axios from "../../apis/axios";

const UserSettings: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // localstorage user : {"id":30,"name":"Mounssif BOUHLAOUI","email":"cv.bouhlaoui@gmail.com","accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsIm5hbWUiOiJNb3Vuc3NpZiBCT1VITEFPVUkiLCJlbWFpbCI6ImN2LmJvdWhsYW91aUBnbWFpbC5jb20iLCJwYXNzd29yZCI6bnVsbCwicm9sZSI6InVzZXIiLCJjcmVhdGVkX2F0IjoiMjAyMy0xMi0wNFQwNjo1MDo1OS45NjJaIiwidXBkYXRlZF9hdCI6IjIwMjMtMTItMDRUMDY6NTA6NTkuOTYyWiIsImlhdCI6MTcwMTY3MjY1OSwiZXhwIjoxNzAxNzU5MDU5fQ.fJaTXhVMgv9spUVpd1s_0J55j1vUbJvoWxgi2gmNhhI"}
    // get current user id from localstorage
    const userId = JSON.parse(localStorage.getItem("user") || "{}").id;
    console.log("userId", userId);
    // Basic form validation
    if (!name || !email) {
      setError("Name and email are required fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Send updated user settings to the server
    // http://localhost:3300/api/v1/users/user/30
    try {
      const response = await axios.post(`/api/v1/users/user/${userId}`, {
        name,
        email,
        password,
      });
      console.log("response", response);
      setSuccessMessage(response.data.message);
      setError("");
    } catch (error) {
      setSuccessMessage("");
      setError("Error updating user settings");
    }
  };

  return (
    <Stack
      spacing={4}
      maxWidth="400px"
      mx="auto"
      mt={8}
      p={6}
      rounded="md"
      shadow="md"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        User Settings
      </Text>
      <form onSubmit={handleFormSubmit}>
        {/* User settings form inputs */}
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

        <FormControl mt={4} isInvalid={!!error}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          mt={6}
          width="100%"
          isLoading={false}
        >
          Save Changes
        </Button>
      </form>

      {successMessage && (
        <Box mt={4} color="green.500" fontWeight="bold">
          {successMessage}
        </Box>
      )}
    </Stack>
  );
};

export default UserSettings;
