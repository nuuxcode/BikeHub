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
  InputLeftElement,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { useAuth } from "../../../hooks/useAuth";
interface RegisterCredentials {
  name: string | undefined;
  email: string;
}

const UpdateInfoPers = () => {
  const { user } = useAuth();
  const [data, setData] = useState<RegisterCredentials>({
    name: user ? user.name : "",
    email: user ? user.email : "",
  });
  const [errEmail, setErrEmail] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

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
  };

  /**
   * Handles the form submission event.
   *
   * @param event - The form submission event object.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event, "submit");
    validation();
    setErrMsg("");
    setIsSubmitting(true);
    setInterval(() => {
      setIsSubmitting(false);
    }, 3000);
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
