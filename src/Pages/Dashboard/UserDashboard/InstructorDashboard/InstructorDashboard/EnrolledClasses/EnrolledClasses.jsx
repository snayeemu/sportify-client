import { useEffect, useState } from "react";
import useAuth from "../../../../../../hooks/useAuth";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [enrolledClass, setEnrolledClass] = useState([]);

  useEffect(() => {
    if (user)
      fetch(
        `https://summer-camp-server-two-delta.vercel.app/classes/${user.email}`
      )
        .then((res) => res.json())
        .then((classes) => {
          setEnrolledClass(classes);
        });
  }, [user]);

  return (
    <div className="my-40">
      <h2 className="text-4xl">Enrolled Classes</h2>
      <div className="md:grid grid-cols-3 gap-4 justify-between my-8">
        {enrolledClass.map((aClass) => (
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

export default EnrolledClasses;
