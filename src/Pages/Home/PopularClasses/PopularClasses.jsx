import { useEffect, useState } from "react";
import useClasses from "../../../hooks/useClasses";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const allClasses = useClasses();
  console.log(allClasses);

  useEffect(() => {
    if (allClasses) {
      const popularClasses = allClasses.slice(0, 6);
      setPopularClasses(popularClasses);
    }
  }, [allClasses]);

  return (
    <div className="my-40">
      <h2 className="text-4xl ms-5 xl:ms-0">Popular Classes</h2>
      <div className="flex flex-wrap  gap-4 justify-center my-8">
        {popularClasses.map((aClass) => (
          <div
            key={aClass._idp}
            className="card bg-black text-white bg-opacity-80 w-96  shadow-xl"
          >
            <figure>
              <img src={aClass.classImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{aClass.className}</h2>
              <p>Enrolled Student: {aClass.studentEnrolled}</p>
              <p>
                {"Instructor"}: {aClass.instructorName}
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
