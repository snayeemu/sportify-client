import { useEffect, useState } from "react";
import useInstructor from "../../../hooks/useInstructor";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  const allInstructors = useInstructor();

  useEffect(() => {
    const popularInstructors = allInstructors.slice(0, 6);
    setPopularInstructors(popularInstructors);
  }, [allInstructors]);

  return (
    <div className="my-40">
      <h2 className="text-4xl ms-5 xl:ms-0">Top Instructors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 my-8 dark">
        {popularInstructors.map((instructor) => (
          <div
            key={instructor._id}
            className="w-[70%] md:w-[100%] md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-slate-700 mx-auto dark:hover:bg-slate-800 hover:shadow-2xl hover:scale-[0.98] duration-500"
          >
            <img
              className="rounded-t-lg h-[300px] w-full  "
              src={instructor.image}
              alt="instructor"
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {instructor.name}
              </h5>

              <p className="font-normal text-gray-700 dark:text-gray-400">
                Email: {instructor.email}
              </p>

              <div className="flex justify-center gap-2">
                <div className="flex flex-col-reverse  gap-1 ">
                  <FaFacebook className="text-2xl mx-auto cursor-pointer peer relative z-10 text-blue-700 hover:scale-95" />

                  <p
                    className={`bg-gray-950 font-bold ps-1 text-xs  px-2 py-1 rounded-xl invisible relative top-4 scale-50 peer-hover:scale-100 peer-hover:visible peer-hover:top-0 duration-300 `}
                  >
                    Facebook
                  </p>
                </div>

                <div className="flex flex-col-reverse  gap-1 ">
                  <FaTwitter className="text-2xl mx-auto cursor-pointer peer relative z-10 text-blue-400 hover:scale-95" />

                  <p
                    className={`bg-gray-950 font-bold ps-1 text-xs  px-2 py-1 rounded-xl invisible relative top-4 scale-50 peer-hover:scale-100 peer-hover:visible peer-hover:top-0 duration-300 `}
                  >
                    Twitter
                  </p>
                </div>

                <div className="flex flex-col-reverse  gap-1 ">
                  <FaInstagram className="text-2xl mx-auto cursor-pointer peer relative z-10 text-red-700 hover:scale-95" />

                  <p
                    className={`bg-gray-950 font-bold ps-1 text-xs  px-2 py-1 rounded-xl invisible relative top-4 scale-50 peer-hover:scale-100  peer-hover:visible peer-hover:top-0 duration-300 `}
                  >
                    Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
