import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalContext from "../../../context/globalContext";
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

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { auth } = useContext(GlobalContext);
  const navigate = useNavigate();

  //   const [email, setEmail] = useState("");
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

  useEffect(() => {
    if (auth?.accessToken) {
      navigate("/");
    }
  });

  /**
   * Handles the change event for the email input field.
   *
   * @param event - The change event object.
   */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: event.target.value });
  };

  /**
   * Handles the change event for the name input field.
   *
   * @param event - The change event object.
   */
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: event.target.value });
  };

  // /**
  //  * Handles the change event for the Date Of Birth input field.
  //  *
  //  * @param event - The change event object.
  //  */
  // const handleDateOfBirthChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setData({ ...data, dateOfBirth: event.target.value });
  // };

  // /**
  //  * Handles the change event for the Phone Number input field.
  //  *
  //  * @param event - The change event object.
  //  */
  // const handlePhoneNumberChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setData({ ...data, phoneNumber: event.target.value });
  // };

  /**
   * Handles the change event for the password input field.
   *
   * @param event - The change event object.
   */
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: event.target.value });
  };

  /**
   * Handles the change event for the confirm password input field.
   *
   * @param event - The change event object.
   */
  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  /**
   * Handles the form submission event.
   *
   * @param event - The form submission event object.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (data.password === "") {
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
    if (data.email === "") {
      setErrPassword(true);
      console.log("email empty");
    } else {
      setErrPassword(false);
    }

    if (data.password !== confirmPassword) {
      setErrPassword(true);
    } else {
      setErrPassword(false);
    }
    if (!errEmail && !errPassword && !errName && confirmPassword !== "") {
      try {
        // Make a POST request to your login endpoint
        const response = await axios.post("/auth/login", JSON.stringify(data), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        console.log(JSON.stringify(response?.data));
        setData({ email: "", password: "", name: "" });
        setErrMsg("");
        navigate("/login");
      } catch (error: any) {
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
    }
    console.log(data);
    console.log(errName, errEmail, errPassword);
    console.log(auth);
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
            onChange={handleNameChange}
            placeholder="Full Name"
          />
          <FormErrorMessage>Name is messing</FormErrorMessage>
        </FormControl>
        <FormControl id="email" isInvalid={errEmail}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={data.email}
            onChange={handleEmailChange}
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
            // onChange={handleDateOfBirthChange}
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
              // onChange={handlePhoneNumberChange}
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
              onChange={handlePasswordChange}
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
              onChange={handleConfirmPasswordChange}
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
