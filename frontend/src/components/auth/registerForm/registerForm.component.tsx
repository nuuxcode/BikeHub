import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  FormErrorMessage,
  Text,
  Flex,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import { PhoneIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "../../../apis/axios";
import { useAuth } from "../../../hooks/useAuth";
interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");

  const [data, setData] = useState<RegisterCredentials>({
    name: "",
    email: "",
    password: "",
  });
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Handles validation input field.
   *
   */
  const validation = () => {
    if (data.email === "") {
      setErrEmail(true);
      console.log("pass empty");
    } else {
      setErrEmail(false);
    }
    if (data.name === "") {
      setErrName(true);
      console.log("name empty");
    } else {
      setErrName(false);
    }
    if (data.password === "") {
      setErrPassword(true);
      console.log("email empty");
    } else {
      setErrPassword(false);
    }

    if (
      data.password === confirmPassword &&
      confirmPassword !== "" &&
      data.password !== ""
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
    setIsSubmitting(true);
    validation();

    try {
      // Make a POST request to your login endpoint
      const response = await axios.post("auth/register", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response);
      console.log(JSON.stringify(response?.data));
      setData({ email: "", password: "", name: "" });
      setErrMsg("");
      navigate("/login");
      toast.success("Successfully created!");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message[0]);

      if (!error?.response) {
        setErrMsg("Something went wrong. Please try again later.");
      } else if (error.response?.status === 400) {
        setErrMsg(error.response.data?.message);
      } else if (error.response?.status === 401) {
        setErrMsg(error.response.data?.message);
      }
    } finally {
      setIsSubmitting(false);
    }
    console.log(data);
    console.log(errName, errEmail, errPassword);
    console.log(user);
    console.log(errMsg);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-4/5">
      <FormControl isInvalid={errMsg != ""}>
        {errMsg && (
          <FormErrorMessage justifyContent={"center"}>
            {errMsg[0]}
          </FormErrorMessage>
        )}
      </FormControl>
      <Flex gap={4} className="max-sm:flex-col">
        <FormControl id="name" isInvalid={errName}>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            placeholder="Full Name"
          />
          <FormErrorMessage>Name is messing</FormErrorMessage>
        </FormControl>
        <FormControl id="email" isInvalid={errEmail}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            placeholder="Email"
          />
          <FormErrorMessage>email should not be empty</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap={4} className="max-sm:flex-col">
        <FormControl id="dateOfBirth">
          <FormLabel>Date Of Birth</FormLabel>
          <Input
            type="date"
            // value={data.dateOfBirth}
            //  onChange={(e) => {
            //   setData({ ...data, dateOfBirth: e.target.value });
            // }}
            placeholder="DD/MM/YYYY"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl id="phoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              // value={data.phoneNumber}
              // onChange={(e) => {
              //   setData({ ...data, phoneNumber: e.target.value });
              // }}
              placeholder="Phone Number"
            />
          </InputGroup>
          <FormErrorMessage>error Phone Number</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap={4} className="max-sm:flex-col">
        <FormControl id="password" isInvalid={errPassword}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              placeholder="Password"
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
        <Stack
          width={"full"}
          direction={{ base: "column", sm: "row" }}
          align={"start"}
          justify={"space-between"}
        >
          <Checkbox>Remember me</Checkbox>
          <Link to="/signup">
            <Text color={"blue.400"}>Forgot password?</Text>
          </Link>
        </Stack>
        <Button
          width={{ base: "100%", md: "200px" }}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          isLoading={isSubmitting}
          type="submit"
        >
          Sign up
        </Button>
        <p className="text-sm mt-2 font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </Stack>
    </form>
  );
};

export default LoginForm;
