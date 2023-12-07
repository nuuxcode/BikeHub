import { Center } from "@chakra-ui/react";
import React from "react";
import axios from "../apis/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function LogoutButton({ children }: { children: React.ReactNode }) {
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
    <Center
      className="bg-gray-100 font-medium text-base rounded-lg py-2 hover:bg-gray-300 cursor-pointer"
      width={"full"}
      onClick={handleLogout}
    >
      {children}
    </Center>
  );
}

export default LogoutButton;
