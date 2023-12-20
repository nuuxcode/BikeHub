import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  FormErrorMessage,
  Flex,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "../../../apis/axios";
import { useAuth } from "../../../hooks/useAuth";

interface RegisterCredentials {
  oldPassword: string;
  newPassword: string;
}

const UpdatePassword = () => {
  const { user } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast({ position: "top" });
  const [data, setData] = useState<RegisterCredentials>({
    oldPassword: "",
    newPassword: "",
  });
  const [errPassword, setErrPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Handles validation input field.
   *
   */
  const validation = () => {
    if (data.oldPassword === "") {
      setErrPassword(true);
      console.log("old Password empty");
    } else {
      setErrPassword(false);
    }
    if (data.newPassword === "") {
      setErrPassword(true);
      console.log("new Password empty");
    } else {
      setErrPassword(false);
    }
    if (
      data.newPassword === confirmPassword &&
      confirmPassword !== "" &&
      data.newPassword !== ""
    ) {
      setErrPassword(false);
    } else {
      setErrPassword(true);
    }
  };

  /**
   * Handles the form submission event.
   *
   * @param event - The form submission event object.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event, "submit");
    validation();
    setErrMsg("");
    setIsSubmitting(true);
    try {
      const response = await axios.put(`users/user/${user?.id}`, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response);
      console.log(JSON.stringify(response?.data));
      setErrMsg("");
      toast({
        title: "Password updated.",
        description: "Your password has been successfully updated.",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
      setErrPassword(false);
    } catch (error: any) {
      console.log(error);
      let errorMessage = error?.response?.data?.message;
      if (typeof errorMessage === 'string')
        errorMessage = error?.response?.data?.message;
      else
        errorMessage = error?.response?.data?.message.join(", ");

      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      if (!error?.response) {
        setErrMsg("Something went wrong. Please try again later.");
      } else if (error.response?.status === 400) {
        setErrMsg(errorMessage);
      } else if (error.response?.status === 401) {
        setErrMsg(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-4/5 py-5">
      <FormControl isInvalid={errMsg != ""}>
        {errMsg && (
          <FormErrorMessage justifyContent={"center"}>
            {errMsg}
          </FormErrorMessage>
        )}
      </FormControl>
      <Flex gap={4} className="max-sm:flex-col">
        <FormControl id="oldPassword" isInvalid={errPassword}>
          <FormLabel>Old Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              value={data.oldPassword}
              onChange={(e) => {
                setData({ ...data, oldPassword: e.target.value });
              }}
              placeholder="Old Password"
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>error Password</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap={4} className="max-sm:flex-col">
        <FormControl id="password" isInvalid={errPassword}>
          <FormLabel>New Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              value={data.newPassword}
              onChange={(e) => {
                setData({ ...data, newPassword: e.target.value });
              }}
              placeholder="New Password"
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>error Password</FormErrorMessage>
        </FormControl>
        <FormControl id="confirmPassword" isInvalid={errPassword}>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>error Confirm Password</FormErrorMessage>
        </FormControl>
      </Flex>
      <Stack spacing={2} align={"center"}>
        <Button
          width={{ base: "100%", md: "200px" }}
          color={"white"}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Save Change
        </Button>
      </Stack>
    </form>
  );
};

export default UpdatePassword;
