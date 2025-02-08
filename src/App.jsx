import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './doctorPages/Dashboard'
import AllAppointments from './doctorPages/AllAppointments'
import { useEffect } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Sidebar from './DoctorComponent/Sidebar'
import AddDoctor from './doctorPages/AddDoctor'
import DoctorList from './doctorPages/DoctorList'


// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//   url = window.location.href
// ) {
//   let urlStr = url.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

const App = () => {

  // const roomID = getUrlParams().get('roomID') || randomID(5);
  //     let myMeeting = async (element) => {
  //    // generate Kit Token
  //     const appID = 1119050860;
  //     const serverSecret = "c6ed20e6310d6cfd250b41dcd93285bf";
  //     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));

    
  //    // Create instance object from Kit Token.
  //     const zp = ZegoUIKitPrebuilt.create(kitToken);
  //     // start the call
  //     zp.joinRoom({
  //       container: element,
  //       sharedLinks: [
  //         {
  //           name: 'Copy link',
  //           url:
  //            window.location.protocol + '//' + 
  //            window.location.host + window.location.pathname +
  //             '?roomID=' +
  //             roomID,
  //         },
  //       ],
  //       scenario: {
  //         mode: ZegoUIKitPrebuilt.OneoNoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
  //       },
  //     });

    
  // };

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,zh",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script"); 
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  
  return (
    <div>
      <Navbar/>
      <div id="google_translate_element"></div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctor' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/add-doctor' element={<AddDoctor/>}/>
        <Route path='/all-appointments' element={<AllAppointments/>}/>
        <Route path='/doctor-list' element={<DoctorList/>}/>

      </Routes>
      {/* <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div> */}
      <Footer/>
    </div>
  )
}

export default App
