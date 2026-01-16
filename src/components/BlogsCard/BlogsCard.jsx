import React from "react";

function BlogsCard({ blog }) {
  const { title, description, image, author, date } = blog;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">
          Technology
        </span>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 leading-snug mb-3">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5">
          {description.slice(0, 100)}...
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={author.image}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">
              {author.name}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsCard;
