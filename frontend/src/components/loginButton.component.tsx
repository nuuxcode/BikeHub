import { Button } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

interface AuthData {
  accessToken: string;
}

const LogoutButton: React.FC<{
  auth: AuthData | null;
}> = ({ auth }) => {
  const handleLogout = async () => {
    try {
      if (auth?.accessToken) {
        await axios.post("/logout", null, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
          withCredentials: true,
        });
      }
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      className="ml-3"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
