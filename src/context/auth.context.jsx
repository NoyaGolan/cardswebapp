<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from "react";
import usersService from "../services/userService";

const fn_error_context_must_be_used = () => {
  throw new Error("must use authContext provider for consumer to work");
};
export const authContext = createContext({
  user: null,
  login: fn_error_context_must_be_used,
  logout: fn_error_context_must_be_used,
  signUp: fn_error_context_must_be_used,
});
authContext.displayName = "auth";
export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("savedUser");
  const [user, setUser] = useState(!storedUser ? null : JSON.parse(storedUser));
  const [checked, setChecked] = useState("false");
  const [search, setSearch] = useState("");
  useEffect(() => {
    refreshUser();
  }, []);
  const refreshUser = async () => setUser(await usersService.getUser());

  const login = async (credentials) => {
    const response = await usersService.login(credentials);

    refreshUser();

    return response;
  };

  const logout = () => {
    usersService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider
      value={{
        user,
        login,
        logout,
        checked,
        setChecked,
        search,
        setSearch,
        signUp: usersService.createUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
=======
import { createContext, useContext, useEffect, useState } from "react";
import usersService from "../services/userService";

const fn_error_context_must_be_used = () => {
  throw new Error("must use authContext provider for consumer to work");
};
export const authContext = createContext({
  user: null,
  login: fn_error_context_must_be_used,
  logout: fn_error_context_must_be_used,
  signUp: fn_error_context_must_be_used,
});
authContext.displayName = "auth";
export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("savedUser");
  const [user, setUser] = useState(!storedUser ? null : JSON.parse(storedUser));
  const [checked, setChecked] = useState("false");
  const [search, setSearch] = useState("");
  useEffect(() => {
    refreshUser();
  }, []);
  const refreshUser = async () => setUser(await usersService.getUser());

  const login = async (credentials) => {
    const response = await usersService.login(credentials);

    refreshUser();

    return response;
  };

  const logout = () => {
    usersService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider
      value={{
        user,
        login,
        logout,
        checked,
        setChecked,
        search,
        setSearch,
        signUp: usersService.createUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
>>>>>>> 4775264fcc18031bd413e02ab09d06451cbf08af
export const useAuth = () => useContext(authContext);