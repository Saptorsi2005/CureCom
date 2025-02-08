import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 px-4 md:mx-10">
      <h1 className="text-3xl font-semibold text-center">Top Doctors to Book</h1>
      <p className="sm:w-1/2 text-center text-gray-600 text-base">
        Browse through our list of trusted doctors and book an appointment easily.
      </p>

      {/* Doctor Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              className="w-full h-56 object-cover rounded-t-xl"
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-green-600 text-white px-12 py-3 rounded-full mt-10 hover:bg-green-700 transition-all duration-300 shadow-md"
      >
        View More
      </button>
    </div>
  );
};

export default RelatedDoctors;
