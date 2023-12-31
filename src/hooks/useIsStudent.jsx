import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useIsStudent = () => {
  const { user } = useAuth();
  const [aUser, setAUser] = useState(false);
  useEffect(() => {
    if (user)
      fetch(
        `https://summer-camp-server-two-delta.vercel.app/userInfo/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setAUser(data));
  }, [user]);
  if (aUser?.isInstructor || aUser?.isAdmin) return false;
  else return true;
};

export default useIsStudent;
