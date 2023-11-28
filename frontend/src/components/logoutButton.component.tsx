import { Button } from "@chakra-ui/react";
import React from "react";
import axios from "../apis/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LogoutButton: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (user?.accessToken) {
        await axios.post("/auth/logout", null, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
          withCredentials: true,
        });
      }
      navigate("/login");
      console.log("Logout successful");
      logout();
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
