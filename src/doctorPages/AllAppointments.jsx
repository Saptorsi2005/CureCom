import React from "react";
import Sidebar from "../DoctorComponent/Sidebar"; // Import Sidebar
import { assets } from "../assets/assets";

const appointments = [
  {
    id: 1,
    name: "Richard James",
    age: 28,
    dateTime: "24th July, 2024, 10-AM",
    image: assets.profile,
  },
  {
    id: 2,
    name: "Richard James",
    age: 28,
    dateTime: "24th July, 2024, 10-AM",
    image: assets.profile,
  },
];

const AllAppointments = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">All Appointments</h2>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600 text-sm">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Patient</th>
                  <th className="p-4 text-center">Age</th>
                  <th className="p-4 text-center">Date & Time</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={appointment.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4 flex items-center space-x-3">
                      <img src={appointment.image} alt={appointment.name} className="w-10 h-10 rounded-full object-cover" />
                      <span className="text-gray-700">{appointment.name}</span>
                    </td>
                    <td className="p-4 text-center">{appointment.age}</td>
                    <td className="p-4 text-center">{appointment.dateTime}</td>
                    <td className="p-4 text-center">
                      <button className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition">
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Floating Add Button */}
        <button className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition">
          ➕
        </button>
      </div>
    </div>
  );
};

export default AllAppointments;