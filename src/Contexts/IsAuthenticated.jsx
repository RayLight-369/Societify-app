import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useUser = () => useContext(AuthContext);

const IsAuthenticated = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default IsAuthenticated;
