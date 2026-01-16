import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);