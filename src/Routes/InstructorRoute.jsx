import useAuth from "../hooks/useAuth";

import { Navigate, useLocation } from "react-router-dom";
import useIsInstructor from "../hooks/useIsInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [aUser, isAUserLoading] = useIsInstructor();
  const location = useLocation();
  if (loading || isAUserLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && aUser?.isInstructor) return children;

  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
