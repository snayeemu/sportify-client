import { useEffect, useState } from "react";
import useInstructor from "../../../hooks/useInstructor";

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
      <div className="flex flex-wrap gap-4 justify-center my-8">
        {popularInstructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card bg-black text-white bg-opacity-80 w-96  shadow-xl"
          >
            <figure>
              <img
                src={instructor.image}
                alt="Shoes"
                className="w-[50%] mt-4 rounded-xl "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
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

export default PopularInstructors;
