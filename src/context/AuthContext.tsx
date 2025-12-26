import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
  userName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("userName") || ""
  );

  const login = (name: string) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);
    setIsLoggedIn(true);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const status = localStorage.getItem("isLoggedIn") === "true";
      const name = localStorage.getItem("userName") || "";
      setIsLoggedIn(status);
      setUserName(name);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
