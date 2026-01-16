import axios from "axios";
import React, { useState } from "react";
import BlogsCard from "../../components/BlogsCard/BlogsCard";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  axios.get("/blogs.json").then((data) => setBlogs(data.data));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 gap-6 container mx-auto">
      {blogs.map((blog) => (
        <BlogsCard blog={blog}></BlogsCard>
      ))}
    </div>
  );
}

export default Blogs;
