import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-4 md:px-10">
      {/* About Section */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        {/* About Image */}
        <img className="w-full md:max-w-[360px] rounded-lg shadow-md" src={assets.about_image} alt="About Us" />

        {/* About Content */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700">
          <p>
            Welcome to CureCom, your trusted healthcare platform. Our mission is to connect you with top-rated doctors and seamless online appointment scheduling, chat, audio and video calls with doctors, ensuring easy access to quality healthcare.
          </p>
          <p>
            Whether you're looking for specialized care or need a routine consultation, we provide a user-friendly, efficient, and personalized experience to cater to your needs.
          </p>

          <b className="text-gray-800 text-lg">Our Vision</b>
          <p>
            We envision a healthcare system that is accessible, transparent, and patient-focused. By leveraging technology, we aim to simplify medical appointments, reduce wait times, and provide accurate recommendations tailored to every user.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl my-6 text-center md:text-left">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-20">
        {/* Efficiency */}
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-4 text-gray-600 text-sm hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer rounded-lg shadow-md">
          <b className="text-lg">Efficiency</b>
          <p>Seamless appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Convenience */}
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-4 text-gray-600 text-sm hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer rounded-lg shadow-md">
          <b className="text-lg">Convenience</b>
          <p>Access a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Personalization */}
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-4 text-gray-600 text-sm hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer rounded-lg shadow-md">
          <b className="text-lg">Personalization</b>
          <p>Get tailored health recommendations and reminders.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
