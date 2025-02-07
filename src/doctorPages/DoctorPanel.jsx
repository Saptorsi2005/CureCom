import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaUserMd, FaCalendarCheck, FaPlusCircle, FaList, FaBars } from "react-icons/fa";
import { Button, Card, CardContent } from "@/components/ui/card";

const Sidebar = ({ onSelect }) => {
  return (
    <div className="w-64 bg-white shadow-lg h-screen p-5">
      <h2 className="text-xl font-bold mb-5">Prescripto</h2>
      <ul>
        <li className="mb-2"><Link to="/dashboard" onClick={() => onSelect("Dashboard")} className="flex items-center p-2 hover:bg-gray-200 rounded"><FaUserMd className="mr-2"/> Dashboard</Link></li>
        <li className="mb-2"><Link to="/appointments" onClick={() => onSelect("Appointments")} className="flex items-center p-2 hover:bg-gray-200 rounded"><FaCalendarCheck className="mr-2"/> Appointments</Link></li>
        <li className="mb-2"><Link to="/add-doctor" onClick={() => onSelect("Add Doctor")} className="flex items-center p-2 hover:bg-gray-200 rounded"><FaPlusCircle className="mr-2"/> Add Doctor</Link></li>
        <li className="mb-2"><Link to="/doctors-list" onClick={() => onSelect("Doctors List")} className="flex items-center p-2 hover:bg-gray-200 rounded"><FaList className="mr-2"/> Doctors List</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

const Dashboard = () => <Card><CardContent>Dashboard Content</CardContent></Card>;
const Appointments = () => (
  <Card>
    <CardContent>
      <h3 className="text-lg font-bold">All Appointments</h3>
      <table className="w-full mt-3 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">#</th>
            <th className="border p-2">Patient</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Date & Time</th>
            <th className="border p-2">Doctor</th>
            <th className="border p-2">Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Richard James</td>
            <td className="border p-2">Cardiology</td>
            <td className="border p-2">28</td>
            <td className="border p-2">24th July, 2024, 10-AM</td>
            <td className="border p-2">Dr. Richard James</td>
            <td className="border p-2">$50</td>
          </tr>
        </tbody>
      </table>
    </CardContent>
  </Card>
);
const AddDoctor = () => <Card><CardContent>Add Doctor Form</CardContent></Card>;
const DoctorsList = () => <Card><CardContent>Doctors List</CardContent></Card>;