import React, { useState } from "react";
import Sidebar from "../DoctorComponent/Sidebar";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden ${sidebarOpen ? "block" : "hidden"}`} onClick={() => setSidebarOpen(false)}></div>
      <div className={`fixed inset-y-0 left-0 z-50 transform bg-white w-64 p-4 transition-transform md:static md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 bg-gray-50 min-h-screen">
        {/* Mobile Sidebar Toggle Button */}
        <button className="md:hidden p-2 bg-gray-200 rounded-md mb-4" onClick={() => setSidebarOpen(true)}>
          <span className="text-2xl">☰</span> {/* Menu Icon */}
        </button>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
            <span className="text-blue-500 text-3xl">🏥</span> {/* Hospital Icon */}
            <div>
              <p className="text-gray-500">Doctors</p>
              <p className="text-xl font-bold">14</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
            <span className="text-blue-500 text-3xl">📅</span> {/* Calendar Icon */}
            <div>
              <p className="text-gray-500">Appointments</p>
              <p className="text-xl font-bold">2</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
            <span className="text-blue-500 text-3xl">👥</span> {/* Users Icon */}
            <div>
              <p className="text-gray-500">Patients</p>
              <p className="text-xl font-bold">5</p>
            </div>
          </div>
        </div>

        {/* Latest Appointments */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <span className="text-blue-500 text-xl">📅</span> {/* Calendar Icon */}
            <span>Latest Appointment</span>
          </h2>
          <ul className="mt-4 space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={assets.profile} alt="Doctor" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-gray-700 font-semibold">Dr. Richard James</p>
                    <p className="text-gray-500 text-sm">Booking on 24th February, 202</p>
                  </div>
                </div>
                <button className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition">
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;