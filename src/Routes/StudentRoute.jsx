import useAuth from "../hooks/useAuth";
import useIsStudent from "../hooks/useIsStudent";
import { Navigate, useLocation } from "react-router-dom";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const isStudent = useIsStudent();
  const location = useLocation();

  if (loading) {
    console.log(loading);
    return <progress className="progress w-56"></progress>;
  }
  if (user && isStudent) return children;

  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
