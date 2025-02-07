import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between bg-blue-600 rounded-xl px-6 sm:px-10 lg:px-20 py-12 text-white">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col gap-5 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment<br />With Trusted Doctors
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-3 text-sm font-light">
          <img className="w-20 sm:w-24" src={assets.group_profiles} alt="Profiles" />
          <p className="max-w-sm">
            Simply browse through our extensive list of trusted doctors, 
            <br className="hidden sm:block" /> schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex justify-center sm:justify-start items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-md w-max mx-auto md:mx-0"
        >
          Book Appointment
          <img className="w-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center md:justify-end items-end mt-8 md:mt-0">
        <img className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-contain" src={assets.header_img} alt="Doctors" />
      </div>
    </div>
  );
};

export default Header;
