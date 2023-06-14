import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [adminDisable, setAdminDisable] = useState([]);
  const [instructorDisable, setInstructorDisable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleMakeInstructor = (email, index) => {
    fetch(`http://localhost:5000/makeInstructor?email=${email}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructorDisable([...instructorDisable, index]);
      });
  };

  const handleMakeAdmin = (email, index) => {
    fetch(`http://localhost:5000/makeAdmin?email=${email}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdminDisable([...adminDisable, index]);
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Number</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Instructor</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr key={user?._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{user?.name}</div>
                  </div>
                </div>
              </td>
              <td>
                <button
                  onClick={() => handleMakeInstructor(user?.email, index)}
                  disabled={
                    user?.isInstructor || instructorDisable.includes(index)
                  }
                  className="btn btn-warning btn-sm"
                >
                  Make Instructor
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleMakeAdmin(user?.email, index)}
                  disabled={user?.isAdmin || adminDisable.includes(index)}
                  className="btn btn-success btn-sm"
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
