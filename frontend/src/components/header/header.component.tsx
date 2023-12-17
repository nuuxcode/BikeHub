import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  HStack,
  Flex,
  Menu,
  Link as A,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  Center,
  MenuDivider,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  VStack,
  // DrawerHeader,
  DrawerCloseButton,
  // useColorMode,
} from "@chakra-ui/react";
import { TbLogout } from "react-icons/tb";
import LogoutButton from "../logoutButton.component";
import { useAuth } from "../../hooks/useAuth";
import logoImage from "../../assets/images/logov2.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useLocation } from 'react-router-dom';
/**
 * Header: A functional component representing a header in React with Tailwind CSS.
 *
 * @returns {JSX.Element} - The JSX element representing the header.
 */
const Header: React.FC = () => {
  const { user } = useAuth();
  const headerItems = [
    { label: "Choose us", path: "#chooseUs" },
    { label: "How To Rent", path: "#howToRent" },
    { label: "We Offer", path: "#weOffer" },
    { label: "Clients", path: "#clients" },
  ];
  const location = useLocation();
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="flex justify-between items-center text-gray-700 py-2 px-4 sm:px-12 shadow-lg">
      <Link to="/">
        <img src={logoImage} className="sm:w-36 w-24 max-w-none" />
      </Link>

      <HStack as="nav" spacing="8" display={{ base: "none", md: "flex" }}>
        <Link to="/">
          <Button
            paddingStart={0}
            paddingEnd={0}
            className="group hover:text-teal-500 focus:text-teal-500"
            variant="nav"
            _hover={{ transition: "all 0.3s ease-in-out" }}
            pos={"relative"}
          >
            Home
            <Box
              position={"absolute"}
              className="w-0 h-[2px] bg-teal-500 rounded-xl bottom-0 left-0"
              _groupFocus={{ width: "100%" }}
              _groupHover={{
                width: "100%",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Button>
        </Link>
        {headerItems.map((item, i) => (
          <A key={i} href={window.location.origin+"/"+item.path}>
            <Button
              paddingStart={0}
              paddingEnd={0}
              className="group hover:text-teal-500 focus:text-teal-500"
              variant="nav"
              _hover={{ transition: "all 0.3s ease-in-out" }}
              pos={"relative"}
            >
              {item.label}
              <Box
                position={"absolute"}
                className="w-0 h-[2px] bg-teal-500 rounded-xl bottom-0 left-0"
                _groupFocus={{ width: "100%" }}
                _groupHover={{
                  width: "100%",
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </Button>
          </A>
        ))}
      </HStack>

      <div>
        {!user?.id ? (
          <>
            <Link to="/login">
              <Button
                colorScheme="teal"
                variant={location.pathname === '/login' ? 'solid' : 'outline'}
                size={{ base: "sm", md: "md" }}
              >
                Signin
              </Button>
            </Link>
            <Link to="/signup" className="ml-3">
              <Button
                colorScheme="teal"
                variant={location.pathname === '/signup' ? 'solid' : 'outline'}
                size={{ base: "sm", md: "md" }}
              >
                Signup
              </Button>
            </Link>
          </>
        ) : (
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={user?.image}
                />
              </MenuButton>
              <MenuList zIndex={99}>
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={user?.image}
                  />
                </Center>
                <Center>
                  <Text
                    color="teal.400"
                    fontWeight={500}
                    fontSize={18}
                    className="my-1 capitalize"
                  >
                    {user?.name}
                  </Text>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem
                  justifyContent={"center"}
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  color="gray.700"
                  px="14px"
                >
                  <Link
                    to="/setting-profile/information"
                    className="w-full rounded-md hover:bg-teal-50 focus:bg-teal-50 text-center py-2"
                  >
                    <Text fontWeight={500} fontSize={16}>
                      Setting Profile
                    </Text>
                  </Link>
                </MenuItem>
                <MenuItem
                  justifyContent={"center"}
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  color="gray.700"
                  px="14px"
                >
                  <Link
                    to="/profile"
                    className="w-full rounded-md hover:bg-teal-50 focus:bg-teal-50 text-center py-2"
                  >
                    <Text fontWeight={500} fontSize={16}>
                      Profile
                    </Text>
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  color="red.400"
                  borderRadius="8px"
                  px="14px"
                >
                  <LogoutButton>
                    <TbLogout className="mr-2 text-red-500" />
                    <Text color="red.400">Logout</Text>
                  </LogoutButton>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </div>
      <IconButton
        size={"sm"}
        aria-label="Toggle navigation"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
      />
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack as="nav" spacing="8">
              <Link to="/">
                <Button
                  paddingStart={0}
                  paddingEnd={0}
                  className="group hover:text-teal-500 focus:text-teal-500"
                  variant="nav"
                  _hover={{ transition: "all 0.3s ease-in-out" }}
                  pos={"relative"}
                >
                  Home
                  <Box
                    position={"absolute"}
                    className="w-0 h-[2px] bg-teal-500 rounded-xl bottom-0 left-0"
                    _groupFocus={{ width: "100%" }}
                    _groupHover={{
                      width: "100%",
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                </Button>
              </Link>
              {headerItems.map((item, i) => (
                <A key={i} href={item.path} onClick={onClose}>
                  <Button
                    paddingStart={0}
                    paddingEnd={0}
                    className="group hover:text-teal-500 focus:text-teal-500"
                    variant="nav"
                    _hover={{ transition: "all 0.3s ease-in-out" }}
                    pos={"relative"}
                  >
                    {item.label}
                    <Box
                      position={"absolute"}
                      className="w-0 h-[2px] bg-teal-500 rounded-xl bottom-0 left-0"
                      _groupFocus={{ width: "100%" }}
                      _groupHover={{
                        width: "100%",
                        transition: "all 0.3s ease-in-out",
                      }}
                    />
                  </Button>
                </A>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
