import React from "react";
import { useForm } from "react-hook-form";

export default function AddBlog() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const blogData = {
      title: data.title,
      description: data.description,
      image: data.image,
      author: {
        name: data.authorName,
        image: data.authorImage,
      },
      date: new Date(),
    };

    console.log("Blog Data:", blogData);

    reset();
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add New Blog
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            placeholder="Blog title"
            {...register("title", { required: "Title is required" })}
            className="w-full input input-bordered"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            rows="4"
            placeholder="Blog description"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full textarea textarea-bordered"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Blog Image */}
        <div>
          <label className="block mb-1 font-medium">Blog Image URL</label>
          <input
            type="url"
            placeholder="https://image-url.com"
            {...register("image", { required: "Image URL is required" })}
            className="w-full input input-bordered"
          />
        </div>

        {/* Author Name */}
        <div>
          <label className="block mb-1 font-medium">Author Name</label>
          <input
            type="text"
            placeholder="Author name"
            {...register("authorName", {
              required: "Author name is required",
            })}
            className="w-full input input-bordered"
          />
        </div>

        {/* Author Image */}
        <div>
          <label className="block mb-1 font-medium">Author Image URL</label>
          <input
            type="url"
            placeholder="https://author-image.com"
            {...register("authorImage", {
              required: "Author image is required",
            })}
            className="w-full input input-bordered"
          />
        </div>

        

        {/* Submit Button */}
        <button className="btn btn-accent w-full">
          Add Blog
        </button>
      </form>
    </div>
  );
}
