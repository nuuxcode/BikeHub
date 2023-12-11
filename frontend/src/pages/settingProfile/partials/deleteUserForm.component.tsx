import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "../../../apis/axios";
import { useAuth } from "../../../hooks/useAuth";

interface DeleteUserFormProps {
  className?: string;
}

const DeleteUserForm: React.FC<DeleteUserFormProps> = ({
  className = "",
}) => {
  const { user, logout } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const toast = useToast({ position: "top" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrPassword("");

    try {
      const response = await axios.delete(`/users/delete/${user?.id}`, { data: { password }, withCredentials: true, });
      // Handle success response
      console.log(response);
      toast({
        title: "Account deleted",
        description: "Your account has been deleted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      logout();
    } catch (error: any) {
      console.log(error);
      let errorMessage = error?.response?.data?.message;
      if (typeof errorMessage === "string") {
        errorMessage = error?.response?.data?.message;
      } else {
        errorMessage = error?.response?.data?.message.join(", ");
      }
      toast({
        title: "Error",
        description: errorMessage || "Something went wrong.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <section className={`p-5 space-y-6 ${className}`}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>
        <p className="mt-1 text-sm text-gray-600">
          Once your account is deleted, all of its resources and data will be permanently deleted.
          Before deleting your account, please download any data or information that you wish to retain.
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <FormControl id="password" isInvalid={errPassword !== ""}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              isInvalid={errPassword !== ""}
              errorBorderColor="crimson"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() =>
                  setShowPassword((showPassword) => !showPassword)
                }
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errPassword && (
            <FormErrorMessage>{errPassword}</FormErrorMessage>
          )}
        </FormControl>

        <Button type="submit" colorScheme="red" mt={4}>
          Delete Account
        </Button>
      </form>
    </section>
  );
};

export default DeleteUserForm;
