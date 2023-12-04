import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  HStack,
  Image,
  Link as A,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  Center,
  MenuDivider,
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
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center text-gray-700 py-2 px-12 shadow-lg">
      <Link to="/">
        <Image src={logoImage} width={"150px"} />
      </Link>

      <HStack as="nav" spacing="5">
        {headerItems.map((item, i) => (
          <A key={i}>
            <Button variant="nav" _hover={{ bg: "teal.50" }}>
              {item.label}
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
                    to="/UserSettings"
                    className="w-full rounded-md hover:bg-teal-50 focus:bg-teal-50 text-center py-2"
                  >
                    <Text fontWeight={500} fontSize={16}>
                      UserSettings
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
