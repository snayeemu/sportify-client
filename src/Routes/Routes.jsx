import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Classes from "../Pages/Classes/Classes";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import ManageClass from "../Pages/Dashboard/AdminDashboard/ManageClass/ManageClass";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AddClass from "../Pages/Dashboard/UserDashboard/InstructorDashboard/AddClass/AddClass";
import EnrolledClasses from "../Pages/Dashboard/UserDashboard/InstructorDashboard/InstructorDashboard/EnrolledClasses/EnrolledClasses";
import InstructorDashboard from "../Pages/Dashboard/UserDashboard/InstructorDashboard/InstructorDashboard/InstructorDashboard";
import MyClass from "../Pages/Dashboard/UserDashboard/InstructorDashboard/MyClass/MyClass";
import Payment from "../Pages/Dashboard/UserDashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymetHistory/PaymentHistory";
import StudentDashboard from "../Pages/Dashboard/UserDashboard/StudentDashboard";
import TakenClasses from "../Pages/Dashboard/UserDashboard/TakenClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminRoutes from "./AdminRoutes";
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
          {
            path: "/dashboard/user/enrolledClasses",
            element: <EnrolledClasses></EnrolledClasses>,
          },
          {
            path: "/dashboard/user/paymentHistory",
            element: <PaymentHistory></PaymentHistory>,
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
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoutes>
            <AdminDashboard></AdminDashboard>
          </AdminRoutes>
        ),
        children: [
          {
            path: "/dashboard/admin",
            element: <ManageClass></ManageClass>,
          },
          {
            path: "dashboard/manageUsers",
            element: <ManageUsers></ManageUsers>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
