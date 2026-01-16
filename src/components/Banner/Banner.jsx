import React from "react";
import { NavLink } from "react-router";
import bannerImage from "../../assets/blogs/blog-0.png";
import author from "../../assets/author.png";

function Banner() {
  const blogList = (
    <>
      <li className="px-3 py-1 text-sm md:text-base rounded-full bg-accent">
        <NavLink>Home</NavLink>
      </li>
      <li className="px-3 py-1 text-sm md:text-base rounded-full bg-accent">
        <NavLink>Add New Blog</NavLink>
      </li>
      <li className="px-3 py-1 text-sm md:text-base rounded-full bg-accent">
        <NavLink>Manage Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="my-6 px-3 md:px-0">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Meta Blog
      </h2>

      <ul className="flex flex-wrap justify-center gap-3 md:gap-5 my-3 text-[#3B3C4A]">
        {blogList}
      </ul>

      <div
        className="my-4 w-full h-72 md:h-[450px] md:w-11/12 mx-auto bg-center bg-cover bg-no-repeat rounded-md"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="flex flex-col h-full justify-end p-4 sm:p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent rounded-lg">
          <div className="space-y-3 max-w-xl">
            <button className="text-white text-sm md:text-base px-4 py-1 bg-secondary rounded-md">
              Technology
            </button>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
              The Impact of Technology on the
              <span className="hidden sm:inline">
                <br />
              </span>
              Workplace: How Technology is Changing
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-white">
              <img
                src={author}
                alt="author"
                className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full"
              />
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
