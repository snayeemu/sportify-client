import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const ManageClass = () => {
  const { user } = useAuth();
  const [pendingClass, setPendingClass] = useState([]);
  const [disable, setDisable] = useState([]);
  useEffect(() => {
    if (user)
      fetch("http://localhost:5000/allClasses")
        .then((res) => res.json())
        .then((allClasses) => {
          const pendingClass = allClasses.filter(
            (aClass) => aClass?.status === "pending"
          );
          setPendingClass(pendingClass);
        });
  }, [user]);

  const handleApprove = (id, index) => {
    fetch(`http://localhost:5000/updateStatus?classId=${id}&status=approved`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0) alert('Approved')
        setDisable([...disable, index]);
      });
  };

  return (
    <div className="my-40">
      <h2 className="text-4xl">Popular Classes</h2>
      <div className="md:grid grid-cols-3 gap-4 justify-between my-8">
        {pendingClass.map((aClass, index) => (
          <div
            key={aClass._id}
            className="card bg-black text-white bg-opacity-80 w-96  shadow-xl"
          >
            <figure>
              <img src={aClass.classImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{aClass.className}</h2>
              <p>Enrolled Students: {aClass.studentEnrolled}</p>
              <p>Available Seats: {aClass.availableSeat}</p>
              <p>
                {"Instructor"}: {aClass.instructorName}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleApprove(aClass._id, index)}
                  className="btn btn-warning "
                  disabled={disable.includes(index)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-warning "
                  disabled={disable.includes(index)}
                >
                  Deny
                </button>
                <button className="btn btn-warning ">Send Feedback</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClass;
