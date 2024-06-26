import { Outlet, Link } from "react-router-dom";

const StudentDashboard = () => {
  

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar ">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link to="/dashboard/user" className="btn btn-warning text-white">
              Student Dashboard
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal ">
              {/* Navbar menu content here */}
              <li>
              {/* https://drive.google.com/file/d/1NMyj1Th0b4a77iNV2hR769_QEryTnW2S/view?usp=sharing */}
                <a
                  href="https://drive.google.com/drive/folders/1NE7DBQx1fkeo-eIedAfFYWfkjWrDRgg3?usp=sharing"
                  className={`text-secondary font-poppins  cursor-pointer text-[18px] font-medium py-4`}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  download
                >
                  Get Certificate
                </a>
              </li>
              <li>
                <Link
                  to={"/dashboard/user/enrolledClasses"}
                  className="text-white btn btn-primary py-4 mr-3"
                >
                  My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/user/paymentHistory"}
                  className="text-white btn btn-primary"
                >
                  Payment History
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
