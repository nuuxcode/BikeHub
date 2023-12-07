import React from "react";
import { Center, VStack, Heading, Box, Text, Button, Divider } from "@chakra-ui/react";

const ProfilePage: React.FC = () => {
  // You can fetch the user's rental history from the server using API calls or use mock data for demonstration purposes
  const rentalHistory = [
    {
      id: 1,
      bikeName: "Bike 1",
      startTime: "2023-11-01T10:00:00Z",
      endTime: "2023-11-01T12:00:00Z",
      status: "Completed",
      price: 10.0
    },
    {
      id: 2,
      bikeName: "Bike 2",
      startTime: "2023-11-02T14:00:00Z",
      endTime: "2023-11-02T16:00:00Z",
      status: "Completed",
      price: 15.0
    },
    // Add more rental history items here
  ];

  const handleSettingsChange = () => {
    // Implement the logic to handle user settings change here
  };

  return (
    <Center>
      <VStack spacing={4} align="start">
        <Heading size="lg">Profile</Heading>

        <Box>
          <Heading size="md">Rental History</Heading>
          <Divider mt={2} mb={4} />

          {rentalHistory.map((rental) => (
            <Box key={rental.id} p={4} borderWidth={1} borderRadius="md">
              <Text>
                Bike: {rental.bikeName} | Duration: {rental.startTime} - {rental.endTime}
              </Text>
              <Text>Status: {rental.status}</Text>
              <Text>Price: ${rental.price}</Text>
            </Box>
          ))}
        </Box>

        <Box>
          <Heading size="md">Settings</Heading>
          <Divider mt={2} mb={4} />

          {/* Add your user settings form or any other settings components here */}
          {/* Example: */}
          <Button colorScheme="blue" onClick={handleSettingsChange}>
            Change Settings
          </Button>
        </Box>
      </VStack>
    </Center>
  );
};

export default ProfilePage;
