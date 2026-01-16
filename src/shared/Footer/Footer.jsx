import React from "react";

export default function Footer() {
  return (
    <footer className="bg-accent pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Email :</span> info@meta.net
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Phone :</span> 880 123 456 789
            </p>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">About</li>
              <li className="hover:text-primary cursor-pointer">Blog</li>
              <li className="hover:text-primary cursor-pointer">Archived</li>
              <li className="hover:text-primary cursor-pointer">Author</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Sports</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Weekly Newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get blog articles and offers via email
            </p>

            <div className="relative mb-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                ✉️
              </span>
            </div>

            <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Meta Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
