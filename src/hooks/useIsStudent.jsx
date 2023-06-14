import useAuth from "./useAuth";

const useIsStudent = () => {
  const { user } = useAuth();
  if (user?.isInstructor || user?.isAdmin) return false;
  else return true;
};

export default useIsStudent;
