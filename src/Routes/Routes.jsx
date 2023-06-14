import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Classes from "../Pages/Classes/Classes";
import StudentDashboard from "../Pages/Dashboard/UserDashboard/StudentDashboard";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "dashboard/user",
        element: (
          <StudentRoute>
            <StudentDashboard></StudentDashboard>
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
