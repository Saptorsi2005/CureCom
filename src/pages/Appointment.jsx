import React, { useContext, useEffect, useState, useMemo, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { PopupButton } from "react-calendly";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// Lazy Loading Components for Better Performance
const RelatedDoctors = lazy(() => import("../components/RelatedDoctors"));
const DoctorProfile = lazy(() => import("../components/DoctorProfile"));
const MiroBoard = lazy(() => import("../components/MiroBoard"));

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [userId] = useState("user456"); // Example logged-in user ID
  const [showMiroBoard, setShowMiroBoard] = useState(false); // Toggle Miro Board

  // Fetch doctor details
  useEffect(() => {
    if (doctors.length) {
      const foundDoctor = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoctor || null);
    }
  }, [doctors, docId]);

  // Generate Room ID for Video Call
  const roomID = useMemo(() => getUrlParams().get("roomID") || randomID(5), []);

  function myMeeting(element) {
    const appID = 1119050860;
    const serverSecret = "c6ed20e6310d6cfd250b41dcd93285bf";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url: window.location.protocol + "//" + window.location.host + window.location.pathname + "?roomID=" + roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // Fixed Typo
      },
    });
  }

  function randomID(len = 5) {
    let result = "";
    const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  function getUrlParams(url = window.location.href) {
    let urlStr = url.split("?")[1];
    return new URLSearchParams(urlStr);
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleVideoCall = () => {
    const container = document.createElement("div");
    container.className = "myCallContainer";
    container.style.width = "100vw";
    container.style.height = "100vh";
    document.body.appendChild(container);
    myMeeting(container);
    scrollToBottom();
  };

  return (
    docInfo && (
      <div className="px-4 md:px-10">
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <img className="bg-green-200 w-full sm:max-w-72 rounded-lg shadow-md" src={docInfo.image} alt={docInfo.name} />
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

        {/* Calendly Scheduling */}
        <div className="App">
          <PopupButton
            className="mt-6 px-14 py-3 rounded-full text-white bg-green-500 hover:bg-green-700"
            url="https://calendly.com/curecom"
            rootElement={document.getElementById("root")}
            text="Click here to schedule!"
          />
        </div>

        {/* Video Call Button */}
        <div>
          <button
            className="mt-6 px-14 py-3 rounded-full text-white bg-green-500 hover:bg-green-700"
            onClick={handleVideoCall}
          >
            Video Call
          </button>
        </div>

        {/* Toggle Miro Board */}
        <div>
          <button
            className="mt-6 px-14 py-3 rounded-full text-white bg-blue-500 hover:bg-blue-700"
            onClick={() => setShowMiroBoard(!showMiroBoard)}
          >
            {showMiroBoard ? "Close Whiteboard" : "Open Whiteboard"}
          </button>
          {showMiroBoard && (
            <Suspense fallback={<p>Loading Whiteboard...</p>}>
              <MiroBoard />
            </Suspense>
          )}
        </div>

        {/* Doctor Profile */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">Doctor Review System</h1>
          <Suspense fallback={<p>Loading reviews...</p>}>
            <DoctorProfile doctorId={docId} userId={userId} />
          </Suspense>
        </div>

        {/* Related Doctors */}
        <Suspense fallback={<p>Loading related doctors...</p>}>
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </Suspense>
      </div>
    )
  );
};

export default Appointment;
