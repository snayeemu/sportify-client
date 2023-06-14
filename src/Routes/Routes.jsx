import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/Dashboard/UserDashboard/InstructorDashboard/AddClass/AddClass";
import InstructorDashboard from "../Pages/Dashboard/UserDashboard/InstructorDashboard/InstructorDashboard/InstructorDashboard";
import MyClass from "../Pages/Dashboard/UserDashboard/InstructorDashboard/MyClass/MyClass";
import Payment from "../Pages/Dashboard/UserDashboard/Payment/Payment";
import StudentDashboard from "../Pages/Dashboard/UserDashboard/StudentDashboard";
import TakenClasses from "../Pages/Dashboard/UserDashboard/TakenClasses";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import InstructorRoute from "./InstructorRoute";
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
        children: [
          {
            path: "/dashboard/user",
            element: <TakenClasses></TakenClasses>,
          },
          {
            path: "/dashboard/user/:id",
            element: <Payment></Payment>,
          },
        ],
      },
      {
        path: "dashboard/instructor",
        element: (
          <InstructorRoute>
            <InstructorDashboard></InstructorDashboard>
          </InstructorRoute>
        ),
        children: [
          {
            path: "/dashboard/instructor",
            element: <AddClass></AddClass>,
          },
          {
            path: "/dashboard/instructor/myClasses",
            element: <MyClass></MyClass>,
          },
        ],
      },
    ],
  },
]);

export default router;
