import { useEffect, useState } from "react";
import useInstructor from "../../hooks/useInstructor";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  const allInstructors = useInstructor();

  useEffect(() => {
    setPopularInstructors(allInstructors);
  }, [allInstructors]);

  return (
    <div className="my-40">
      <h2 className="text-4xl">Our Instructors</h2>
      <div className="md:grid grid-cols-3 gap-4 justify-between my-8">
        {popularInstructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card bg-black text-white bg-opacity-80 w-96  shadow-xl"
          >
            <figure>
              <img src={instructor.image} alt="Shoes" />
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
