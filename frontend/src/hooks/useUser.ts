import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export interface User {
  id: string;
  name: string;
  email: string;
  birthdate: string | Date;
  phone?: string;
  image?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem, removeItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    removeItem("user");
  };

  return { user, setUser, addUser, removeUser };
};
