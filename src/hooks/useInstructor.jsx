import { useEffect, useState } from "react";

const useInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-two-delta.vercel.app/allInstructors")
      .then((res) => res.json())
      .then((allInstructors) => {
        setInstructor(allInstructors);
      });
  }, []);
  return instructor;
};

export default useInstructor;
