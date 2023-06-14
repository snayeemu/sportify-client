import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import useAuth from "./useAuth";

const useClasses = () => {
  const { loading } = useAuth();

  const {
    data: classes = [],
    isLoading: classLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allClasses");
      return res.json();
    },
  });
  const memoizedClasses = useMemo(() => classes, [classes]);

  return [memoizedClasses, refetch, classLoading];
};

export default useClasses;
