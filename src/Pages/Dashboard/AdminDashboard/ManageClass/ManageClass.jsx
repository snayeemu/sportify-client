import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const ManageClass = () => {
  const { user } = useAuth();
  const [pendingClass, setPendingClass] = useState([]);
  const [disable, setDisable] = useState([]);
  const [feedback, setFeedback] = useState("");
  useEffect(() => {
    if (user)
      fetch("https://summer-camp-server-two-delta.vercel.app/allClasses")
        .then((res) => res.json())
        .then((allClasses) => {
          const pendingClass = allClasses.filter(
            (aClass) => aClass?.status === "pending"
          );
          setPendingClass(pendingClass);
        });
  }, [user]);

  const handleApprove = (id, index) => {
    fetch(
      `https://summer-camp-server-two-delta.vercel.app/updateStatus?classId=${id}&status=approved`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) alert("Approved");
        setDisable([...disable, index]);
      });
  };

  const handleDeny = (id, index) => {
    fetch(
      `https://summer-camp-server-two-delta.vercel.app/updateStatus?classId=${id}&status=denied`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) alert("Denied");
        setDisable([...disable, index]);
      });
  };

  const handleFeedback = (aClass) => {
    const feedbackInfo = { feedback, id: aClass._id };
    fetch(`https://summer-camp-server-two-delta.vercel.app/feedback`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) alert("Sent");
      });
  };

  return (
    <div className="my-40 max-w-screen-xl mx-auto">
      <h2 className="text-4xl text-white ">Manage Classes</h2>
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
                  onClick={() => handleDeny(aClass._id, index)}
                  className="btn btn-warning "
                  disabled={disable.includes(index)}
                >
                  Deny
                </button>
                {/* Open the modal using ID.showModal() method */}
                <button
                  className="btn"
                  onClick={() => window.my_modal_5.showModal()}
                >
                  Send Feedback
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Feedback!</h3>
                    <textarea
                      onChange={(e) => setFeedback(e.target.value)}
                      className="border-yellow-500 ps-2"
                      name="feedback"
                      value={aClass?.feedback || feedback}
                      id=""
                      cols="60"
                      rows="10"
                    ></textarea>

                    <div className="modal-action">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </div>
                  </form>
                  <button
                    onClick={() => handleFeedback(aClass)}
                    className="btn btn-warning relative bottom-24"
                  >
                    Send
                  </button>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClass;
