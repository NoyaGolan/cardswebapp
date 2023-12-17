<<<<<<< HEAD
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

=======
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

>>>>>>> 4775264fcc18031bd413e02ab09d06451cbf08af
export default SignOut;