import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  HStack,
  Image,
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
} from "@chakra-ui/react";
import { TbLogout } from "react-icons/tb";
import LogoutButton from "../logoutButton.component";
import { useAuth } from "../../hooks/useAuth";
import logoImage from "../../assets/images/logov2.png";

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

  return (
    <header className="flex justify-between items-center text-gray-700 py-2 px-12 shadow-lg">
      <Link to="/">
        <Image src={logoImage} width={"150px"} />
      </Link>

      <HStack as="nav" spacing="8">
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
          <A key={i} href={item.path}>
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
        {!user?.accessToken ? (
          <>
            <Link to="/login">
              <Button colorScheme="teal" variant="solid">
                Signin
              </Button>
            </Link>
            <Link to="/signup" className="ml-3">
              <Button colorScheme="teal" variant="outline">
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
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList zIndex={99}>
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
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
                    to="/setting-profile"
                    className="w-full rounded-md hover:bg-teal-50 focus:bg-teal-50 text-center py-2"
                  >
                    <Text fontWeight={500} fontSize={16}>
                      Setting Profile
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
    </header>
  );
};

export default Header;
