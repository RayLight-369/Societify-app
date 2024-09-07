import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useUser = () => useContext(AuthContext);

const IsAuthenticated = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default IsAuthenticated;
