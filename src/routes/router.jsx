import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AddBlog from "../pages/AddBlog/AddBlog";
import ManageBlogs from "../pages/ManageBlogs/ManageBlogs";

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
      },
      {
        path:'/add-blog',
        element:<AddBlog></AddBlog>
      },
      {
        path:'/manage-blogs',
        element:<ManageBlogs></ManageBlogs>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
    ]
  },
]);