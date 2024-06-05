import { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";

const AddClass = () => {
  const { user: loggedInUser } = useAuth();
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const aClass = {
      className: className,
      classImage: classImage,
      price: price,
      availableSeat: availableSeats,
      studentEnrolled: 0,
      instructorName: loggedInUser.displayName,
      email: loggedInUser?.email,
      status: "pending",
    };

    fetch("https://summer-camp-server-two-delta.vercel.app/addClass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Inserted");
        }
      });
  };

  return (
    <div className="flex justify-center my-8">
      <form className="max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-white">Add a Class</h2>
        <div className="mb-4">
          <label htmlFor="className" className="block text-white">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="classImage" className="block text-white">
            Class Image
          </label>
          <input
            type="text"
            id="classImage"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={classImage}
            onChange={(e) => setClassImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorName" className="block text-white">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={loggedInUser.displayName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block text-white">
            Instructor Email
          </label>
          <input
            type="email"
            id="instructorEmail"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={loggedInUser.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block text-white">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={availableSeats}
            onChange={(e) => setAvailableSeats(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-white">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
