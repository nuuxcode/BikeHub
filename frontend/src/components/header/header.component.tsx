import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import GlobalContext from "../../context/globalContext";
import LogoutButton from "../logoutButton.component";

/**
 * Header: A functional component representing a header in React with Tailwind CSS.
 *
 * @returns {JSX.Element} - The JSX element representing the header.
 */
const Header: React.FC = () => {
  const { auth } = useContext(GlobalContext);
  console.log(auth);

  return (
    <header className="flex justify-between bg-gray-800 text-white py-4 px-6">
      <Link to="/">
        <h1 className="text-2xl font-bold">My Header</h1>
      </Link>
      <div>
        {auth?.accessToken ? (
          <>
            <Link to="/">
              <Button colorScheme="teal" variant="solid">
                Profile
              </Button>
            </Link>
            <LogoutButton auth={auth} />
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
