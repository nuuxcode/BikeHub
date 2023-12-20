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
  useToast,
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
  birthdate: string;
  phone: string;
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast({ position: "top" });
  const [data, setData] = useState<RegisterCredentials>({
    name: "",
    email: "",
    password: "",
    birthdate: "",
    phone: "",
  });
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  //const [errBirthdate, setErrBirthdate] = useState(false);
  //const [errPhone, setErrPhone] = useState(false);
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
      data.birthdate = new Date(data.birthdate).toISOString();
      const response = await axios.post("auth/register", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response);
      console.log(JSON.stringify(response?.data));
      setData({ email: "", password: "", name: "", birthdate: "", phone: "" });
      setErrMsg("");
      navigate("/login");
      toast({
        title: "Account created.",
        description: "Your account has been successfully created.",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
    } catch (error: any) {
      console.log(error);
      let errorMessage = error?.response?.data?.message;
      if (typeof errorMessage === "string")
        errorMessage = error?.response?.data?.message;
      else errorMessage = error?.response?.data?.message.join(", ");
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
            {errMsg}
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
        <FormControl id="birthdate">
          <FormLabel>Date Of Birth</FormLabel>
          <Input
            type="date"
            value={data.birthdate}
            onChange={(e) => {
              setData({ ...data, birthdate: e.target.value });
            }}
            placeholder="DD/MM/YYYY"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              value={data.phone}
              onChange={(e) => {
                setData({ ...data, phone: e.target.value });
              }}
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
          <Checkbox colorScheme="teal">Remember me</Checkbox>
          <Link to="/signup">
            <Text color={"teal.400"}>Forgot password?</Text>
          </Link>
        </Stack>
        <Button
          width={{ base: "100%", md: "200px" }}
          color={"white"}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Sign up
        </Button>
        <p className="text-sm mt-2 font-light text-gray-500 dark:text-gray-400 mb-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-teal-600 hover:underline dark:text-teal-500"
          >
            Sign in
          </Link>
        </p>
      </Stack>
    </form>
  );
};

export default RegisterForm;
