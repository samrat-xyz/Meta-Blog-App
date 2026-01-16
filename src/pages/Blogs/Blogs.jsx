import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "../../components/BlogsCard/BlogsCard";
import Loading from "../../components/Loading/Loading";

function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);

  const [showBlogs,setShowBlogs] = useState(6)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/blogs.json")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const moreBlogs = () =>{
    setShowBlogs((prev)=>prev+3)
  }

  if (loading) {
    return <Loading />;
  }

  return (
   <div>
     <div className="my-6 grid grid-cols-1 md:grid-cols-3 w-11/12 gap-6 container mx-auto p-3">
      {filteredBlogs.slice(0,showBlogs).map((blog) => (
        <BlogsCard key={blog.id} blog={blog} />
      ))}
      
    </div>

    <div>
      {
        showBlogs < filteredBlogs.length && <div className="flex items-center justify-center  w-full mb-9">
          <button onClick={moreBlogs} className="btn btn-secondary r">View More</button>
        </div>
      }
    </div>
   </div>
  );
}

export default Blogs;
