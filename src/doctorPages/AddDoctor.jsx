import React from 'react';
import Sidebar from '../DoctorComponent/Sidebar'; // Import the sidebar
import { assets } from '../assets/assets';

const AddDoctor = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-grow p-8">
        <form className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
          <p className="text-2xl font-semibold text-gray-700 text-center">Add Doctor</p>

          {/* Image Upload Section */}
          <div className="flex flex-col items-center space-y-2">
            <label htmlFor="doc-img" className="cursor-pointer">
              <img src={assets.profile} alt="Upload" className="w-24 h-24 object-cover border rounded-full" />
            </label>
            <input type="file" id="doc-img" hidden />
            <p className="text-gray-500 text-sm text-center">Upload Doctor <br /> Picture</p>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Doctor Name</label>
                <input type="text" placeholder="Name" required 
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Doctor Email</label>
                <input type="email" placeholder="Email" required 
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Doctor Password</label>
                <input type="password" placeholder="Password" required 
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Experience</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none">
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={`${i + 1} year`}>{i + 1} year</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Doctor Fees</label>
                <input type="number" placeholder="Fees" required 
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Speciality</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none">
                  {["General physician", "Gynecologist", "Dermatologist", "Pediatrician", "Neurologist", "Gastroenterologist"].map((specialty, index) => (
                    <option key={index} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Education</label>
                <input type="text" placeholder="Education" required 
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Address</label>
                <input type="text" placeholder="Address" required 
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-green-500 text-white py-2 rounded-lg text-lg hover:bg-green-600 transition-all">
                Add Doctor
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;