import React, { useEffect } from "react";
import RegisterForm from "../../components/auth/registerForm/registerForm.component";
import signupImage from "../../assets/images/signupImage.png";
import logoImage from "../../assets/images/logov2.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Image } from "@chakra-ui/react";

const SignupPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.accessToken) {
      navigate("/");
    }
  });
  return (
    <div className="min-h-[90%] flex justify-center items-center ">
      <div className="max-w-screen-lg bg-gray-50 m-5 shadow-xl rounded-2xl flex justify-between items-center max-sm:flex-col">
        <div className="w-4/6 max-sm:w-full flex flex-col items-center gap-5">
          <Image src={logoImage} width={"25%"} />

          {/* <h1 className="text-2xl font-bold text-gray-700">Sign up</h1> */}
          <p className="text-sm font-normal text-gray-500">
            Enter your details to create your account.
          </p>

          <RegisterForm />
        </div>
        <div className="w-2/6 max-sm:w-5/6 h-[540px] max-sm:h-[400px] flex items-center self-end max-sm:self-center bg-gradient-to-t from-teal-200 to-teal-700 rounded-2xl m-4 ">
          <img src={signupImage} alt="bike" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
