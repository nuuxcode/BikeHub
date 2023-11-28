import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import LogoutButton from "../logoutButton.component";
import { useAuth } from "../../hooks/useAuth";

/**
 * Header: A functional component representing a header in React with Tailwind CSS.
 *
 * @returns {JSX.Element} - The JSX element representing the header.
 */
const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <header className="flex justify-between bg-gray-800 text-white py-4 px-6">
      <Link to="/">
        <h1 className="text-2xl font-bold">My Header</h1>
      </Link>
      <div>
        {user?.accessToken ? (
          <>
            <Link to="/profile">
              <Button colorScheme="teal" variant="solid">
                Profile
              </Button>
            </Link>
            <LogoutButton />
          </>
        ) : (
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
        )}
      </div>
    </header>
  );
};

export default Header;
