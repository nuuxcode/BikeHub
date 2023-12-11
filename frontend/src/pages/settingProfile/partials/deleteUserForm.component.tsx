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
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
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
  const [errPassword, setErrPassword] = useState(false);
  const toast = useToast({ position: "top" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const [errMsg, setErrMsg] = useState("");

  const handleClick = async () => {
    setErrPassword(false);

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
        setErrMsg(errorMessage);
      } else {
        errorMessage = error?.response?.data?.message.join(", ");
        setErrMsg(errorMessage);
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
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </p>
      </header>

      <Button colorScheme="red" onClick={onOpen}>
        Delete Account
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <form>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Are you sure? You can't undo this action afterwards.
              </AlertDialogHeader>

              <AlertDialogBody>
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Please enter your password to confirm
                you would like to permanently delete your account.
              </AlertDialogBody>
              <AlertDialogBody>
                <FormControl id="password" isInvalid={errPassword}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      isInvalid={errMsg != ""}
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
                  <FormErrorMessage>
                    password should not be empty
                  </FormErrorMessage>
                </FormControl>
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleClick} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </section>
  );
};

export default DeleteUserForm;
