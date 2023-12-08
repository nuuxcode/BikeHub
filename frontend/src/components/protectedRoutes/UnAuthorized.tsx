import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: JSX.Element;
};
const UnAuthorized: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation().state;
  console.log(location);
  return !user ? (
    children
  ) : (
    <Navigate to={location?.from ? location.from : "/"} replace />
  );
};

export default UnAuthorized;
