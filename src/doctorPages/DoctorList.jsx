import React, { useState } from "react";
import Sidebar from "../DoctorComponent/Sidebar"; // Import Sidebar
import { assets } from "../assets/assets";

const doctorsList = [
  { id: 1, name: "Dr. John Smith", specialty: "Cardiologist", image: assets.profile2 },
  { id: 2, name: "Dr. Emily White", specialty: "Dermatologist", image: assets.profile2 },
  { id: 3, name: "Dr. Alex Johnson", specialty: "Neurologist", image: assets.profile2 },
  { id: 4, name: "Dr. Sarah Brown", specialty: "Pediatrician", image: assets.profile2 },
  { id: 5, name: "Dr. Daniel Wilson", specialty: "Orthopedic", image: assets.profile2 },
  { id: 6, name: "Dr. Olivia Davis", specialty: "General Physician", image: assets.profile2 },
];

const DoctorList = () => {
  const [search, setSearch] = useState("");

  // Filter doctors based on search input
  const filteredDoctors = doctorsList.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">All Doctors</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or specialty..."
          className="p-2 border border-gray-300 rounded-lg w-80 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Doctor List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center transition hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full object-cover mb-3 border" />
                <p className="text-gray-700 font-medium">{doctor.name}</p>
                <p className="text-gray-500 text-sm">{doctor.specialty}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;