import { useEffect } from "react";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const SignOut = ({ redirect = "/" }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  useEffect(() => {
    logout();
    navigate(redirect);
  }, [navigate, logout]);
  return null;
};

export default SignOut;