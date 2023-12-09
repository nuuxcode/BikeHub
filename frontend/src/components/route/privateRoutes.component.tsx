import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoutes: React.FC = () => {
  const { user } = useAuth();
  return <>{user?.id ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoutes;
