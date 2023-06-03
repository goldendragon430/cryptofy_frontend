import React, { createContext, useContext, useState, useEffect } from "react";
import { BACKEND_URL } from "../../config";

export const AuthContext = createContext();
const failureMsg = "Something went wrong. Please try again.";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user), true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthed = () => {
    if (user) {
      if (!user.token) return false;
    } else {
      const data = checkLocalStorage();
      if (data) return true;
      return false;
    }
    return true;
  };
  const isAdmin = () => {
    if (user) {
      if (!user.token || user.role == 1) return false;
    } else {
      const data = checkLocalStorage();
      if (data) {
        if (data['role'] == 0)
            return true
      }
      return false;
    }
    return true;
  };

  const functions = {
    login,
    logout,
    isAuthed,
    isAdmin
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      if (user) {
        if (user.token == null) {
          logout();
        }
      } else {
        logout();
      }
    }, 1000);

    return () => clearInterval(timeout);
  }, [user]);
  const checkLocalStorage = () => {
    const auth = localStorage.getItem("user", true);
    if (auth) {
      const data = JSON.parse(auth);
      login(data);
      return data;
    }
    return null;
  };
  useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <AuthContext.Provider value={[user, functions]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authManager = useContext(AuthContext);
  return authManager || [{}, () => {}];
};
