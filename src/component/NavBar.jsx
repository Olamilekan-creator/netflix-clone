import React from "react";
import Logo from "../asset/download.png";
function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-col md:flex-row gap-6">
      <img src={Logo} alt="logo" className="w-[12rem]" />

      {/* Menu List */}
      <div className="text-white space-x-6 font-semibold">
        <a href="#" className="hover:text-red-500">
          Home
        </a>
        <a href="#" className="hover:text-red-500">
          TV Shows
        </a>
        <a href="#" className="hover:text-red-500">
          Movies
        </a>
        <a href="#" className="hover:text-red-500">
          Latest
        </a>
        <a href="#" className="hover:text-red-500">
          My List
        </a>
      </div>

      {/* Search Box */}
      <div className="text-white relative flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 placeholder-white rounded-md border border-white outline-none bg-opacity-20 backdrop-blur-md px-10"
        />
        <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2"></i>
      </div>
    </nav>
  );
}
export default NavBar;
