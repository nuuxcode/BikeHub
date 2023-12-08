import { useEffect, useState } from "react";
import { User } from "../hooks/useUser";
// import { useAuth } from "../hooks/useAuth";
import { createContext, ReactNode } from "react";
import axios from "../apis/axios";

import authService from "../services/authService";
interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const checkAuthentication = async () => {
    const { isAuthenticated, user } = await authService.checkAuthentication();

    if (isAuthenticated) {
      setUser(user ?? null);
    }
  };
  async function checkTokenExpired() {
    // check if client still have cookies, if not remove user local storage
    try {
      const response = await axios.get("/auth/check", {
        withCredentials: true,
      });
      console.log("Cookies Still on: ", response.status);
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized request:", error.response.status);
        localStorage.removeItem("user");
        setUser(null);
      } else {
        console.error("Error:", error);
      }
    }
    // Check if token is expired, if its remove it from local storage
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      const accessToken = user.accessToken;
      const tokenData = JSON.parse(atob(accessToken.split(".")[1]));
      const expirationTime = tokenData.exp * 1000;
      const timeToExpire = expirationTime - Date.now();
      const timeToExpireInDays = Math.floor(timeToExpire / 1000 / 60 / 60 / 24);
      const timeToExpireInHours = Math.floor(timeToExpire / 1000 / 60 / 60);
      const minutesLeft = Math.floor((timeToExpire / 1000 / 60) % 60);
      const secondLeft = Math.floor((timeToExpire / 1000) % 60);
      console.log(
        "token expire in D:H:M:S: ",
        timeToExpireInDays,
        timeToExpireInHours,
        minutesLeft,
        secondLeft
      );
      if (Date.now() > expirationTime) localStorage.removeItem("user");
    }
  }
  useEffect(() => {
    checkAuthentication();
    checkTokenExpired();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
