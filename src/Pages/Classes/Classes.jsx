import { useEffect, useState } from "react";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const allClasses = useClasses();

  useEffect(() => {
    setPopularClasses(allClasses);
  }, [allClasses]);

  return (
    <div className="my-40">
      <h2 className="text-4xl">Our Classes</h2>
      <div className="md:grid grid-cols-3 gap-4 justify-between my-8">
        {popularClasses.map((aClass) => (
          <div
            key={aClass._id}
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
              <p>Available Seats: {aClass.availableSeat}</p>
              <p>Price: ${aClass.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-warning">Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
