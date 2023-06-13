import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const navOpt = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/instructions"}>Instructors</Link>
      </li>
      <li>
        <Link to={"/classes"}>Classes</Link>
      </li>
      <li>
        <Link to={"/secret"}>Secret</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <img className="btn  " src={user.photoURL} alt="" />
          </li>
          <li>
            <button className="btn btn-ghost" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar z-10 bg-opacity-90 bg-[#333439] text-white max-w-screen-xl lg:justify-between font-bold text-3xl">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOpt}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-yellow-600">
            <span>
              Sport<span className="text-red-600">ify</span>
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{navOpt}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
