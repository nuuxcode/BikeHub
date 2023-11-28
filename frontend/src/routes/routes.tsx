import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login.page";
import SignupPage from "../pages/auth/signup.page";
import HomePage from "../pages/home.page";
import Profile from "../pages/profile/profle.page";
import NotFoundPage from "../pages/error/notFound.page";
import PrivateRoutes from "../components/route/privateRoutes.component";

const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};

export { Routes };
