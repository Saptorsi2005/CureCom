import React from "react";
import { FaUserMd, FaCalendarCheck, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";

const Dashboard = () => {
    const navigate = useNavigate();
    const appointments = [
        { id: 1, name: "Dr. Richard James", date: "24th July, 2024" },
        { id: 2, name: "Dr. Richard James", date: "24th July, 2024" },
        { id: 3, name: "Dr. Richard James", date: "24th July, 2024" },
        { id: 4, name: "Dr. Richard James", date: "24th July, 2024" },
        { id: 5, name: "Dr. Richard James", date: "24th July, 2024" },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white p-5 border-r">
                <h1 className="text-2xl font-bold text-green-600">CureCom</h1>
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">Admin</span>
                <nav className="mt-5">
                    <ul>
                        <li className="p-2 bg-gray-200 rounded mb-2">Dashboard</li>
                        <button onClick={() => navigate('/allappointments')} className="btn-primary">
                            All Appointments
                        </button>            
                        <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Add Doctor</li>
                        <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Doctors List</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div className="bg-white p-5 rounded-lg shadow flex items-center space-x-3">
                            <FaUserMd className="text-blue-600 text-2xl" />
                            <div>
                                <p className="text-xl font-bold">14</p>
                                <p className="text-sm">Doctors</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow flex items-center space-x-3">
                            <FaCalendarCheck className="text-blue-600 text-2xl" />
                            <div>
                                <p className="text-xl font-bold">2</p>
                                <p className="text-sm">Appointments</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow flex items-center space-x-3">
                            <FaUsers className="text-blue-600 text-2xl" />
                            <div>
                                <p className="text-xl font-bold">5</p>
                                <p className="text-sm">Patients</p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded">Logout</button>
                </div>

                {/* Latest Appointments */}
                <div className="mt-6 bg-white p-5 rounded-lg shadow">
                    <h2 className="text-lg font-bold">Latest Appointment</h2>
                    <ul className="mt-4">
                        {appointments.map((appointment) => (
                            <li
                                key={appointment.id}
                                className="flex justify-between items-center p-3 border-b last:border-b-0"
                            >
                                <div className="flex items-center space-x-3">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="doctor"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium">{appointment.name}</p>
                                        <p className="text-sm text-gray-500">Booking on {appointment.date}</p>
                                    </div>
                                </div>
                                <button className="text-red-500">&#10006;</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
