import { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";

const MyClass = () => {
  const { user } = useAuth();
  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    if (user)
      fetch("http://localhost:5000/allClasses")
        .then((res) => res.json())
        .then((allClasses) => {
          const myClasses = allClasses.filter(
            (aClass) => aClass.email === user.email
          );
          setMyClasses(myClasses);
        });
  }, [user]);
  console.log(myClasses);

  return (
    <div className="my-40">
      <h2 className="text-4xl">Popular Classes</h2>
      <div className="md:grid grid-cols-3 gap-4 justify-between my-8">
        {myClasses.map((aClass) => (
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
                <button className="btn btn-warning hover:hidden">
                  Status: {aClass?.status ? `${aClass?.status}` : "Approved"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
