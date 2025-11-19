import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-semibold text-black">
            CVForge
          </h1>
        </Link>

        {/* Upload Button */}
        <Link
          to="/upload"
          className="bg-[#fff] border-b text-black font-semibold px-4 py-2 rounded-sm shadow-md transition-all"
        >
          Upload Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
