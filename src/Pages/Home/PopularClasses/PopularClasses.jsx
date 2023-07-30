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
  console.log(popularClasses);

  return (
    <div className="my-40">
      <h2 className="text-4xl m-5 xl:ms-0">Popular Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 dark">
        {popularClasses.map((aClass) => (
          <div
            key={aClass._id}
            className="w-[90%] md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-slate-700 mx-auto dark:hover:bg-slate-800 hover:shadow-2xl hover:scale-[0.98] hover:-rotate-2 duration-500"
          >
            <img
              className="rounded-t-lg h-[250px] w-full"
              src={aClass.classImage}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {aClass.className}
              </h5>

              <div className="flex justify-between">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Enrolled Student: {aClass.studentEnrolled}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {"Students"}: {aClass.studentEnrolled}
                </p>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {"Price"}: ${aClass.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
