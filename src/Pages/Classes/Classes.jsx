import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useClasses from "../../hooks/useClasses";
import useIsStudent from "../../hooks/useIsStudent";

const Classes = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const { user } = useAuth();
  const allClasses = useClasses();
  const isStudent = useIsStudent();

  const [takenClass, setTakenClass] = useState([]);

  const updateTakenClass = () => {
    if (user)
      fetch(`http://localhost:5000/userInfo/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTakenClass(data.takenClass);
        });
  };

  useEffect(() => {
    updateTakenClass();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    setPopularClasses(allClasses);
  }, [allClasses]);

  const handleSelectClass = (aClass) => {
    if (user) {
      fetch(
        `http://localhost:5000/addClass?classId=${aClass?._id}&userEmail=${user?.email}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Class is selected");
            updateTakenClass();
          }
        });
    }
  };

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
                <button
                  onClick={() => handleSelectClass(aClass)}
                  disabled={
                    !isStudent ||
                    (takenClass && takenClass.includes(aClass._id))
                  }
                  className="btn btn-sm btn-warning"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
