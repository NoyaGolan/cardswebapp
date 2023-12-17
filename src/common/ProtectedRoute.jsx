<<<<<<< HEAD
import { useAuth } from "../context/auth.context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, onlyBiz = false }) => {
  const { user } = useAuth();
  console.log(user);
  if (!user || (user && onlyBiz && !user.isBusiness)) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};
=======
import { useAuth } from "../context/auth.context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, onlyBiz = false }) => {
  const { user } = useAuth();
  console.log(user);
  if (!user || (user && onlyBiz && !user.isBusiness)) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};
>>>>>>> 4775264fcc18031bd413e02ab09d06451cbf08af
export default ProtectedRoute;