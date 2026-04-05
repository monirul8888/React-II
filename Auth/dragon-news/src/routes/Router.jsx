import { createBrowserRouter } from "react-router";
import Header from "../components/Header/Header";
import HomeLayout from "../layouts/HomeLayout";


const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout
  },
  {
    path: "/home",
    Component: HomeLayout
  },
  {
    path: "/nav",
    element: <h1>This is Navbar</h1>,
  },
  {
    path: "/auth",
    element: <h1>This is Auth</h1>,
  },
  {
    path: "/*",
    element: <h1>This is Error Page</h1>,
  },
]);

export default Router;


