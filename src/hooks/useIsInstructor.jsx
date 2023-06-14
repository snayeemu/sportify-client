import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useIsInstructor = () => {
  const { user, loading } = useAuth();

  const { data: aUser = {}, isLoading: isAUserLoading } = useQuery({
    queryKey: ["allUsers"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/userInfo/${user.email}`);
      return res.json();
    },
  });

  return [aUser, isAUserLoading];
};

export default useIsInstructor;
