import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useIsInstructor from "../../../hooks/useIsAdminOrInstructor";
import useIsStudent from "../../../hooks/useIsStudent";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut, setFirstLogin } = useContext(AuthContext);
  const isUser = useIsStudent();
  const [aUser] = useIsInstructor();
  const [isSmallDeviceNavbarOpen, setIsSmallDeviceNavbarOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        setFirstLogin(false);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const navOpt = (
    <>
      <li>
        <Link onClick={() => setIsSmallDeviceNavbarOpen(false)} to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setIsSmallDeviceNavbarOpen(false)}
          to={"/instructors"}
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link onClick={() => setIsSmallDeviceNavbarOpen(false)} to={"/classes"}>
          Classes
        </Link>
      </li>

      {user ? (
        <>
          {isUser && (
            <li>
              <Link
                onClick={() => setIsSmallDeviceNavbarOpen(false)}
                to={"/dashboard/user"}
              >
                Student-Dashboard
              </Link>
            </li>
          )}
          {aUser?.isInstructor && (
            <li>
              <Link
                onClick={() => setIsSmallDeviceNavbarOpen(false)}
                to={"/dashboard/instructor"}
              >
                Instructor-Dashboard
              </Link>
            </li>
          )}
          {aUser?.isAdmin && (
            <li>
              <Link
                onClick={() => setIsSmallDeviceNavbarOpen(false)}
                to={"/dashboard/admin"}
              >
                Admin-Dashboard
              </Link>
            </li>
          )}
          <li>
            <img className="btn" src={user?.photoURL} alt="" />
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
            <Link
              onClick={() => setIsSmallDeviceNavbarOpen(false)}
              to={"/login"}
            >
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar z-20 bg-opacity-90 bg-zinc-900 white lg:justify-between font-bold text-3xl  sticky top-0">
        <div className="navbar-start ">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-slate-200 hover:bg-slate-900"
              onClick={() => setIsSmallDeviceNavbarOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  "
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
            {isSmallDeviceNavbarOpen && (
              <ul
                tabIndex={0}
                className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex gap-5`}
              >
                {navOpt}
              </ul>
            )}
          </div>
          <a className="btn btn-ghost normal-case text-xl text-yellow-600">
            <Link to={"/"}><span>
              Sport<span className="text-red-600">ify</span>
            </span></Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">{navOpt}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
