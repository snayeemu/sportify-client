import { useEffect, useState } from "react";
import useInstructor from "../../hooks/useInstructor";

const Instructor = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  const allInstructors = useInstructor();

  useEffect(() => {
    setPopularInstructors(allInstructors);
  }, [allInstructors]);

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
    <div className="my-40">
      <h2 className="text-4xl text-white">Our Instructors</h2>
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
                className="rounded-t-lg h-[300px] w-full  px-14 "
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

export default Instructor;
