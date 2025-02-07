import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 bg-gray-50">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={"/cchome.svg"} alt="CureCom Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Your trusted healthcare partner. We make it easier to find
            top-rated doctors, schedule appointments, and access expert medical
            advice through AI chatbot.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-900">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-green-600 cursor-pointer transition">Home</li>
            <li className="hover:text-green-600 cursor-pointer transition">About Us</li>
            <li className="hover:text-green-600 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-green-600 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-900">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="tel:+12345677890" className="hover:text-green-600 transition">
                +91-6968653423
              </a>
            </li>
            <li>
              <a href="mailto:care@curecom.com" className="hover:text-green-600 transition">
                care@curecom.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-700">
          &copy; 2025 CureCom - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
