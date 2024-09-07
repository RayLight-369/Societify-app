import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useUser = () => useContext(AuthContext);

const IsAuthenticated = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("user") || localStorage.getItem("user") || false
  );
  const [user, setUser] = useState(
    (sessionStorage.getItem("user") &&
      JSON.parse(sessionStorage.getItem("user"))) ||
      (localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user"))) ||
      null
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default IsAuthenticated;
