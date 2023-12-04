import { useEffect, useState } from "react";
import { User } from "../hooks/useUser";
// import { useAuth } from "../hooks/useAuth";
import { createContext, ReactNode } from "react";

import authService from "../services/authService";
interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const checkAuthentication = async () => {
    const { isAuthenticated, user } = await authService.checkAuthentication();

    if (!isAuthenticated) {
    } else {
      setUser(user ?? null);
    }
  };
  useEffect(() => {
    checkAuthentication();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
