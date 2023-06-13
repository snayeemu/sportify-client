import { useEffect, useState } from "react";

const useInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allInstructors")
      .then((res) => res.json())
      .then((allInstructors) => {
        setInstructor(allInstructors);
      });
  }, []);
  return instructor;
};

export default useInstructor;
