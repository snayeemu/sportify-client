import useAuth from "../hooks/useAuth";

import { Navigate, useLocation } from "react-router-dom";
import useIsInstructor from "../hooks/useIsAdminOrInstructor";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [aUser, isAUserLoading] = useIsInstructor();
  const location = useLocation();
  if (loading || isAUserLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && aUser?.isAdmin) return children;

  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
