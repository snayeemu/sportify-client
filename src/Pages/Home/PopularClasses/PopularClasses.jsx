import { useEffect, useState } from "react";
import useClasses from "../../../hooks/useClasses";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const allClasses = useClasses();
  console.log(allClasses);

  useEffect(() => {
    if (allClasses) {
      const popularClasses = allClasses.slice(0, 6);
      setPopularClasses(popularClasses);
      setIsLoading(false);
    }
  }, [allClasses]);
  console.log(popularClasses);

  if (isLoading) {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="my-40">
      <h2 className="text-4xl m-5 xl:ms-0">Popular Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 dark">
        {popularClasses.map((aClass) => (
          <div
            key={aClass._id}
            className="w-[90%] md:w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-slate-700 mx-auto dark:hover:bg-slate-800 hover:shadow-2xl hover:scale-[0.98] hover:-rotate-2 duration-500"
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
