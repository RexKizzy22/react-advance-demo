import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  loginHandler: (email, password) => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("loggedIn");

    if (isAuth === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it"s just a dummy/ demo anyways
    localStorage.setItem("loggedIn", "1");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthContext;
