import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 px-4" id="speciality">
      <h1 className="text-3xl font-semibold text-center">Find by Speciality</h1>
      <p className="sm:w-1/2 text-center text-gray-600 text-base">
        Browse our extensive list of trusted doctors and schedule your appointment hassle-free.
      </p>

      {/* Speciality List */}
      <div className="w-full flex sm:justify-center gap-6 pt-5 overflow-x-auto sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 px-4 sm:px-0 snap-x">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-sm font-medium text-gray-700 cursor-pointer flex-shrink-0 transition-transform transform hover:scale-110 duration-300 snap-center"
          >
            <div className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-shadow duration-300">
              <img className="w-16 sm:w-24" src={item.image} alt={item.speciality} />
            </div>
            <p className="mt-2">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
