import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allClasses")
      .then((res) => res.json())
      .then((allClasses) => {
        const popularClasses = allClasses.slice(0, 6);
        setPopularClasses(popularClasses);
      });
  }, []);
  console.log(popularClasses);

  return (
    <div className="md:grid grid-cols-3 gap-4 justify-between my-8">
      {popularClasses.map((aClass) => (
        <div key={aClass._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={aClass.classImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{aClass.className}</h2>
            <p>Enrolled Student: {aClass.studentEnrolled}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClasses;
