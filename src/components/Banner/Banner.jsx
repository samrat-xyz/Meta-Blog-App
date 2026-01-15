import React from "react";
import { NavLink } from "react-router";
import bannerImage from "../../assets/blogs/blog-0.png";
import author from "../../assets/author.png";
function Banner() {
  const blogList = (
    <>
      <li className="px-4 py-1 rounded-full bg-accent ">
        <NavLink>Home</NavLink>
      </li>
      <li className="px-4 py-1 rounded-full bg-accent">
        <NavLink>Add New Blog</NavLink>
      </li>
      <li className="px-4 py-1 rounded-full bg-accent">
        <NavLink>Manage Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="my-6">
      <h2 className="text-3xl font-semibold text-center">Meta Blog</h2>
      <ul className="flex flex-wrap justify-center gap-5 my-3 text-[#3B3C4A]">{blogList}</ul>

      <div
        className="my-4 h-80 md:h-[450px] w-full bg-center  bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="flex flex-col h-full  justify-end p-5">
          <div className="pl-18 space-y-4">
            <button className="text-white px-5 py-1 bg-secondary rounded-md">
                Technology
            </button>
            <p className="text-3xl font-bold text-white ">
              The Impact of Technology on the <br /> Workplace: How Technology
              is Changing
            </p>
            <div className="flex items-center gap-3 text-white">
              <img src={author} alt="" className="w-10 h-10 object-cover" />
              <p>Tracey Wilson</p>
              <p>August 20, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
