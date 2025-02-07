import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".mobile-menu")) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 px-6">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-40 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 font-medium uppercase text-gray-700">
        {["/", "/doctors", "/about", "/contact"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary transition"
            }
          >
            <li>{path.replace("/", "") || "Home"}</li>
          </NavLink>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {token ? (
          <div
            className="relative flex items-center gap-2 cursor-pointer group"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
            <img className="w-3" src={assets.dropdown_icon} alt="Dropdown" />

            {/* Dropdown Menu */}
            <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-4 w-48 text-gray-700 text-base font-medium hidden group-hover:block z-50">
              <p
                onClick={() => navigate("/my-profile")}
                className="hover:text-primary cursor-pointer py-2"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate("/my-appointments")}
                className="hover:text-primary cursor-pointer py-2"
              >
                My Appointments
              </p>
              <p
                onClick={() => setToken(false)}
                className="hover:text-red-500 cursor-pointer py-2"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium hidden md:block hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(true);
          }}
          className="w-7 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />

        {/* Mobile Navigation */}
        <div
          className={`${
            showMenu ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transition-transform duration-300 transform mobile-menu z-50 p-6`}
        >
          <div className="flex items-center justify-between">
            <img className="w-32" src={assets.logo} alt="Logo" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close"
            />
          </div>

          <ul className="flex flex-col items-start gap-4 mt-8 text-lg font-medium text-gray-700">
            {["/", "/doctors", "/about", "/contact"].map((path, index) => (
              <NavLink key={index} to={path} onClick={() => setShowMenu(false)}>
                <li className="px-4 py-2 rounded hover:bg-gray-100 w-full text-left">
                  {path.replace("/", "") || "Home"}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
