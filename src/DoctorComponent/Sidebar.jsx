import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-green-600 text-white p-5">
      <ul className="flex flex-col gap-4">
        <NavLink 
          to={'/dashboard'} 
          className={({ isActive }) => `flex items-center gap-3 p-3 rounded-md transition ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <img src={assets.homeimg} alt="Dashboard" className="w-6 h-6" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink 
          to={'/all-appointments'} 
          className={({ isActive }) => `flex items-center gap-3 p-3 rounded-md transition ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <img src={assets.appointmenticon} alt="Appointments" className="w-6 h-6" />
          <p>Appointments</p>
        </NavLink>
        <NavLink 
          to={'/add-doctor'} 
          className={({ isActive }) => `flex items-center gap-3 p-3 rounded-md transition ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <img src={assets.addicon} alt="Add Doctors" className="w-6 h-6" />
          <p>Add Doctors</p>
        </NavLink>
        <NavLink 
          to={'/doctor-list'} 
          className={({ isActive }) => `flex items-center gap-3 p-3 rounded-md transition ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <img src={assets.peopleicon} alt="Doctors List" className="w-6 h-6" />
          <p>Doctors List</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;