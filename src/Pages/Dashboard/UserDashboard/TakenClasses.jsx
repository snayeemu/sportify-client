import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useClasses from "../../../hooks/useClasses";
import { Link } from "react-router-dom";

const TakenClasses = () => {
  const { user } = useAuth();
  const [takenClass, setTakenClass] = useState([]);
  const allClasses = useClasses();

  useEffect(() => {
    if (user)
      fetch(
        `https://summer-camp-server-two-delta.vercel.app/userInfo/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          const selectedClasses = data.takenClass;
          if (selectedClasses) {
            const takenClasses = allClasses.filter((aClass) =>
              selectedClasses.includes(aClass._id)
            );
            setTakenClass(takenClasses);
          }
        });
  }, [allClasses, user]);

  const updateTakenClass = () => {
    if (user)
      fetch(
        `https://summer-camp-server-two-delta.vercel.app/userInfo/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          const selectedClasses = data.takenClass;
          const takenClasses = allClasses.filter((aClass) =>
            selectedClasses.includes(aClass._id)
          );
          setTakenClass(takenClasses);
        });
  };

  const handleDelete = (aClass) => {
    if (user) {
      fetch(
        `https://summer-camp-server-two-delta.vercel.app/deleteClass?classId=${aClass?._id}&userEmail=${user?.email}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Class is deleted");
            updateTakenClass();
          }
        });
    }
  };

  return (
    <div>
      <div className="my-40 max-w-screen-xl mx-auto">
        <h2 className="text-4xl text-white ">My Selected Classes</h2>
        <div className="md:grid grid-cols-3 gap-4 justify-between my-8">
          {takenClass.map((aClass) => (
            <div
              key={aClass._id}
              className="card bg-black text-white bg-opacity-80 w-96  shadow-xl"
            >
              <figure>
                <img
                  className="rounded-t-lg h-[250px] w-full"
                  src={aClass.classImage}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{aClass.className}</h2>
                <p>Enrolled Student: {aClass.studentEnrolled}</p>
                <p>
                  {"Instructor"}: {aClass.instructorName}
                </p>
                <p>Available Seats: {aClass.availableSeat}</p>
                {aClass.classTime && <p>Time: {aClass.classTime}</p>}
                <p>Price: ${aClass.price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/dashboard/user/${aClass._id}`}>
                    <button className="btn btn-sm btn-warning hover:bg-green-600">
                      Pay
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(aClass)}
                    className="btn btn-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TakenClasses;
