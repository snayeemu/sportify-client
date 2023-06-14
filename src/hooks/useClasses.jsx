import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClasses = () => {
  const { loading } = useAuth();

  const {
    data: classes = [],
    isLoading: classLoading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allClasses");
      return res.json();
    },
  });

  return [classes, refetch, classLoading];
};

export default useClasses;
