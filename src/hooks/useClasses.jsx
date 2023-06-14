import { useEffect, useState } from "react";

const useClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allClasses")
      .then((res) => res.json())
      .then((allClasses) => {
        setClasses(allClasses);
      });
  }, []);
  return classes;
};

export default useClasses;