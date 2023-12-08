import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login.page";
import SignupPage from "../pages/auth/signup.page";
import HomePage from "../pages/home.page";
import NotFoundPage from "../pages/error/notFound.page";
import SettingProfile from "../pages/settingProfile/settingProfile.page";
import Protected from "../components/protectedRoutes/Protected";
import UnAuthorized from "../components/protectedRoutes/UnAuthorized";

const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/setting-profile"
        element={
          <Protected>
            <SettingProfile />
          </Protected>
        }
      />
      <Route
        path="login"
        element={
          <UnAuthorized>
            <LoginPage />
          </UnAuthorized>
        }
      />
      <Route
        path="signup"
        element={
          <UnAuthorized>
            <SignupPage />
          </UnAuthorized>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};

export { Routes };
