import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
 
  useEffect(() => {
    axios.get("/blogs.json").then((res) => {
        setBlogs(res.data)
    });
  }, []);

   
  return (
    <div className="h-screen">
      <div className="overflow-x-auto w-11/12 mx-auto mt-18">
        <table className="table">
          {/* head */}
          <thead className="text-center text-lg text-black bg-accent">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {blogs.map((blog, idx) => (
              <tr key={idx} className="bg-base-200 ">
                <th>{blog.title}</th>
                <td>{blog.author.name}</td>
                <td>{blog.date}</td>
                <td className="flex items-center justify-center gap-3">
                  <button className="btn btn-secondary">View</button>
                  <button className="btn btn-primary  text-white">Edit</button>
                  <button className="btn bg-red-500 text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBlogs;
