import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useIsInstructor = () => {
  const { user, loading } = useAuth();

  const { data: aUser = {}, isLoading: isAUserLoading } = useQuery({
    queryKey: ["checking user admin or instructor"],
    enabled: !loading,
    queryFn: async () => {
      let res;
      if (user) {
        res = await fetch(
          `https://summer-camp-server-two-delta.vercel.app/userInfo/${user.email}`
        );
      }
      return (res && res.json()) || false;
    },
  });

  return [aUser, isAUserLoading];
};

export default useIsInstructor;
