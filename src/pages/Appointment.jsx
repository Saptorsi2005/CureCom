import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // Fetch doctor details
  useEffect(() => {
    if (doctors.length) {
      const foundDoctor = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoctor || null);
    }
  }, [doctors, docId]);

  // Generate available slots
  const docSlots = useMemo(() => {
    if (!docInfo) return [];

    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currDate = new Date(today);
      currDate.setDate(today.getDate() + i);
      currDate.setHours(i === 0 ? Math.max(10, today.getHours() + 1) : 10, 0, 0, 0);

      const endTime = new Date(currDate);
      endTime.setHours(21, 0, 0, 0);

      const timeSlots = [];
      while (currDate < endTime) {
        timeSlots.push({
          datetime: new Date(currDate),
          time: currDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        });
        currDate.setMinutes(currDate.getMinutes() + 30);
      }

      slots.push(timeSlots);
    }

    return slots;
  }, [docInfo]);

  return (
    docInfo && (
      <div className="px-4 md:px-10">
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <img className="bg-primary w-full sm:max-w-72 rounded-lg shadow-md" src={docInfo.image} alt={docInfo.name} />
          <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img className="w-5" src={assets.verified_icon} alt="Verified" />
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {docInfo.degree} - {docInfo.speciality}
              <span className="ml-2 px-2 py-0.5 text-xs border rounded-full">{docInfo.experience} yrs</span>
            </p>
            <p className="text-sm font-medium text-gray-900 mt-3 flex items-center gap-1">
              About <img src={assets.info_icon} alt="Info" />
            </p>
            <p className="text-sm text-gray-500 mt-1">{docInfo.about}</p>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mt-6 font-medium text-gray-700">
          <p>Booking Slots</p>

          <div className="flex gap-3 overflow-x-auto mt-4">
            {docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer transition-all duration-300 ${
                  slotIndex === index ? "bg-blue-500 text-white" : "border border-gray-300 hover:bg-gray-100"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 overflow-x-auto mt-4">
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                    item.time === slotTime ? "bg-blue-500 text-white" : "border border-gray-300 text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  {item.time}
                </p>
              ))}
          </div>

          <button
            disabled={!slotTime}
            className={`mt-6 px-14 py-3 rounded-full text-white ${
              slotTime ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {slotTime ? "Book An Appointment" : "Select a Slot"}
          </button>
        </div>

        {/* Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
