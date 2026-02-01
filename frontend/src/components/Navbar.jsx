import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[90px] bg-[#0f0e0e] shadow-lg shadow-black/20 flex items-center justify-between px-4">
        {/* Logo on left */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[70px] w-[180px] object-cover hover:opacity-90 transition duration-300"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative group ${isActive ? "text-[#3a7afe]" : "text-white"}`
            }
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-[#3a7afe] transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/about"
            className="relative group text-white"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-[#3a7afe] transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/services"
            className="relative group text-white"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-[#3a7afe] transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/contact"
            className="relative group text-white"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-[#3a7afe] transition-all duration-300"></span>
          </NavLink>
        </div>

        <button onClick={() => {
          const isConfirm = confirm("Are you sure you want to logout?");
          if (isConfirm) {
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            window.location.reload();
          }
        }} className="logout-button bg-red-500 text-white px-6 py-2 rounded-md font-semibold transition-all hover:bg-red-800">
          Logout
        </button>

      </nav>

    </>
  );
};

export default Navbar;