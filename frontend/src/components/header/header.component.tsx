import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
/**
 * Header: A functional component representing a header in React with Tailwind CSS.
 *
 * @returns {JSX.Element} - The JSX element representing the header.
 */
const Header: React.FC = () => {
  return (
    <header className="flex justify-between bg-gray-800 text-white py-4 px-6">
      <Link to="/">
        <h1 className="text-2xl font-bold">My Header</h1>
      </Link>
      <div>
        <Link to="/login">
          <Button variant="contained">Signin</Button>
        </Link>
        <Link to="/signup" className="ml-3">
          <Button variant="outlined">Signup</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
