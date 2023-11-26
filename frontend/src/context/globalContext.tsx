import React, { useState } from "react";

const BASE_URL = "http://34.175.134.108:3300/api/v1/";

const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        auth,
        setAuth,
        BASE_URL,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
