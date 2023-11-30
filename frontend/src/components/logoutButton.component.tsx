import { Button } from "@chakra-ui/react";
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
    <Button width={"full"} onClick={handleLogout}>
      {children}
    </Button>
  );
}

export default LogoutButton;
