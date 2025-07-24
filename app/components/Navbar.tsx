import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-[#161636] border-b border-[#2a2a50]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            CVForge
          </h1>
        </Link>

        {/* Upload Button */}
        <Link
          to="/upload"
          className="bg-[#161636] border-b border-[#2a2a50] text-white font-semibold px-4 py-2 rounded-xl shadow-md transition-all"
        >
          Upload Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
