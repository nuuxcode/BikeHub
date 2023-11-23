import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import GlobalContext from "../../../context/globalContext";
import axios from "../../../apis/axios";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  FormErrorMessage,
  Text,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

interface LoginCredentials {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const { setAuth, auth } = useContext(GlobalContext);
  const [data, setData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (auth?.accessToken) {
      navigate("/");
    }
  });
  console.log(auth);

  /**
   * Handles the change event for the email input field.
   *
   * @param event - The change event object.
   */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: event.target.value });
  };

  /**
   * Handles the change event for the password input field.
   *
   * @param event - The change event object.
   */
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: event.target.value });
  };

  /**
   * Handles the form submission event.
   *
   * @param event - The form submission event object.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!data.email) {
      setErrPassword(true);
    } else {
      setErrPassword(false);
    }
    if (!data.password) {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }

    try {
      // Make a POST request to your login endpoint
      const response = await axios.post("/auth/login", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ ...data, roles, accessToken });
      setData({ email: "", password: "" });
      setErrMsg("");
      setIsSubmitting(false);
      navigate("/");
    } catch (error: any) {
      if (!error?.response) {
        setErrMsg("Something went wrong. Please try again later.");
      } else if (error.response?.status === 400) {
        setErrMsg(error.response.data?.message);
      } else if (error.response?.status === 401) {
        setErrMsg(error.response.data?.message);
      }
      console.log(data);
      console.log(errEmail, errPassword);
      console.log(auth);
      console.log(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // axios
  //   .post("/auth/login", JSON.stringify(data), {
  //     headers: { "Content-Type": "application/json" },
  //     withCredentials: true,
  //   })
  //   .then(function (response) {
  //     setIsSubmitting(false);
  //     console.log(JSON.stringify(response?.data));
  //     const accessToken = response?.data?.accessToken;
  //     const roles = response?.data?.roles;
  //     setAuth({ ...data, roles, accessToken });
  //     setData({ email: "", password: "" });
  //     setErrMsg("");
  //   })
  //   .catch(function (error) {
  //     setIsSubmitting(false);
  //     console.log(error?.response?.data.message);
  //     if (!error?.response) {
  //       setErrMsg("Something went wrong. Please try again later.");
  //     } else if (error.response?.status === 400) {
  //       setErrMsg(error.response.data?.message);
  //     } else if (error.response?.status === 401) {
  //       setErrMsg(error.response.data?.message);
  //     }
  //     console.log(data);
  //     console.log(errEmail, errPassword);
  //     console.log(auth);

  //     console.log(errMsg);
  //   });

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-4/5">
      <FormControl isInvalid={errMsg != ""}>
        {errMsg && (
          <FormErrorMessage justifyContent={"center"}>
            {errMsg[0]}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl id="email" isInvalid={errEmail}>
        <FormLabel>Email address</FormLabel>
        <Input
          isInvalid={errEmail}
          errorBorderColor="crimson"
          type="email"
          value={data.email}
          onChange={handleEmailChange}
        />
        <FormErrorMessage>email should not be empty</FormErrorMessage>
      </FormControl>
      <FormControl id="password" isInvalid={errPassword}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            isInvalid={errPassword}
            errorBorderColor="crimson"
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
        <FormErrorMessage>password should not be empty</FormErrorMessage>
      </FormControl>

      <Stack spacing={2}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"start"}
          justify={"space-between"}
        >
          <Checkbox>Remember me</Checkbox>
          <Link to="/login">
            <Text color={"blue.400"}>Forgot password?</Text>
          </Link>
        </Stack>
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          isLoading={isSubmitting}
          type="submit"
        >
          Sign in
        </Button>
      </Stack>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          to="/signup"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
