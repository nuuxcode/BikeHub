import React from "react";
import RegisterForm from "../../components/auth/registerForm/registerForm.component";
import signupImage from "../../assets/images/signupImage.png";
import logoImage from "../../assets/images/logov2.png";
import { Image } from "@chakra-ui/react";

const SignupPage: React.FC = () => {
  let GoogleLogin: string | undefined;
  if (import.meta.env.VITE_MODE === "prod") {
    GoogleLogin = import.meta.env.VITE_BACK_END_PROD as string;
  }
  if (import.meta.env.VITE_MODE === "dev") {
    GoogleLogin = import.meta.env.VITE_BACK_END_DEV as string;
  }
  if (import.meta.env.VITE_MODE === "local") {
    GoogleLogin = import.meta.env.VITE_BACK_END_LOCAL as string;
  }

  return (
    <div className="min-h-[90%] flex justify-center items-center ">
      <div className="max-w-screen-lg bg-gray-50 m-5 shadow-xl rounded-2xl flex justify-between items-center max-sm:flex-col">
        <div className="w-4/6 max-sm:w-full flex flex-col items-center gap-5">
          <Image src={logoImage} width={"25%"} />

          {/* <h1 className="text-2xl font-bold text-gray-700">Sign up</h1> */}
          <p className="text-sm font-normal text-gray-500">
            Enter your details to create your account.
          </p>
          <a
            href={`${GoogleLogin}auth/google`}
            className=" w-4/5 flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="px-4 py-3">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
              Sign up with Google
            </h1>
          </a>
          <div className="mt-4 w-4/5 flex items-center justify-between">
            <span className="border-b w-1/3 lg:w-1/3"></span>
            <p className="text-xs text-center text-gray-500 uppercase">or</p>
            <span className="border-b w-1/3 lg:w-1/3"></span>
          </div>
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
