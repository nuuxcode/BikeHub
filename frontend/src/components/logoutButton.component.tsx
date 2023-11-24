import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import axios from "../apis/axios";
import GlobalContext from "../context/globalContext";
import { useNavigate } from "react-router-dom";

interface AuthData {
  accessToken: string;
}

const LogoutButton: React.FC<{
  auth: AuthData | null;
}> = ({ auth }) => {
  const { setAuth } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (auth?.accessToken) {
        await axios.post("/auth/logout", null, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
          withCredentials: true,
        });
      }
      navigate("/login");
      console.log("Logout successful");
      setAuth({});
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
