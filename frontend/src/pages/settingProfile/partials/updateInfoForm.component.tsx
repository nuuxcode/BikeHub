import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  FormErrorMessage,
  Flex,
  InputGroup,
  useToast,
  InputLeftElement,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { useAuth } from "../../../hooks/useAuth";
import axios from "../../../apis/axios";

interface RegisterCredentials {
  name: string | undefined;
  email: string;
  birthdate: any;
  phone?: string;
}

const UpdateInfoPers = () => {
  const { user, login } = useAuth();
  const [data, setData] = useState<RegisterCredentials>({
    name: user ? user.name : "",
    email: user ? user.email : "",
    birthdate: user ? new Date(user.birthdate).toISOString().split("T")[0] : "",
    phone: user ? user.phone : "",
  });
  const [errEmail, setErrEmail] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const toast = useToast({ position: "top" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles validation input field.
   *
   */
  const validation = () => {
    if (data.email === "") {
      setErrEmail(true);
      console.log("email empty");
    } else {
      setErrEmail(false);
    }
    if (data.name === "") {
      setErrName(true);
      console.log("name empty");
    } else {
      setErrName(false);
    }
  };

  /**
   * Handles the form submission event.
   *
   * @param event - The form submission event object.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(event, "submit");
    validation();
    setErrMsg("");
    setIsSubmitting(true);
    try {
      data.birthdate = new Date(data.birthdate)
      const response = await axios.put(`users/user/${user?.id}`, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response);
      console.log(JSON.stringify(response?.data));
      setErrMsg("");
      toast({
        title: "Information updated.",
        description: "Your information has been successfully updated.",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
      const newBirthdate = new Date(response?.data?.birthdate).toISOString().split("T")[0];
      login({
        id: response?.data.id,
        name: response?.data?.name,
        email: response?.data?.email,
        birthdate: newBirthdate,
        phone: response?.data?.phone,
        image: response?.data?.image,
      });
      setData({ ...data, birthdate: newBirthdate });
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

export default UpdateInfoPers;
