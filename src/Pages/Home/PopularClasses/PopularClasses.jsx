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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {popularClasses.map((aClass, index) => (
          // <div
          //   key={aClass._id}
          //   className="card bg-black text-white bg-opacity-80 w-96  shadow-xl"
          // >
          //   <figure>
          //     <img src={aClass.classImage} alt="Shoes" />
          //   </figure>
          //   <div className="card-body">
          //     <h2 className="card-title">{aClass.className}</h2>
          //     <p>Enrolled Student: {aClass.studentEnrolled}</p>
          //     <p>
          //       {"Instructor"}: {aClass.instructorName}
          //     </p>
          //     <div className="card-actions justify-end">
          //       {/* <button className="btn btn-primary">Buy Now</button> */}
          //     </div>
          //   </div>
          // </div>
          <div key={aClass._id}>
            <div className="w-[95%] md:w-full m-auto relative h-[400px] border">
              <img
                src={aClass.classImage}
                alt={`class-image-${index}`}
                className="h-full w-full"
              />
              <div className="absolute left-[35%] bottom-3 z-1">
                <h2 className="card-title">{aClass.className}</h2>
                <p>Enrolled Student: {aClass.studentEnrolled}</p>{" "}
                <p>
                  {"Instructor"}: {aClass.instructorName}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
