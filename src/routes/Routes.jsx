import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CourseDetails from "../pages/CourseDetails";
import Enroll from "../pages/Enroll";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course-details",
        element: <CourseDetails />,
      },
      {
        path: "/enroll",
        element: <Enroll />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
