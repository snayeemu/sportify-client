import { useEffect, useState } from "react";

const useClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-two-delta.vercel.app/allClasses")
      .then((res) => res.json())
      .then((allClasses) => {
        setClasses(allClasses);
      });
  }, []);
  return classes;
};

export default useClasses;
