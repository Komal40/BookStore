import { useState } from 'react'
// import Navbar from './Components/Navbar'
// import Banner from './Components/Banner'
// import Footer from './Components/Footer'
// import Freebook from './Components/Freebook'
// import { useAuth } from './context/AuthProvider'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Components/Courses.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import SignUp from "./Components/SignUp.jsx";
import toast, { Toaster } from 'react-hot-toast';
import AuthProvider, { useAuth } from "./context/AuthProvider";
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx';


function App() {

  const [user, setUser]=useAuth()
  console.log('app', user)

  return (
    <>
 <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={user ? <Courses/> : <Navigate to='/signup'/>} />
        <Route path="/signup" element={<SignUp/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
      <Toaster/>
      <Footer />

    </BrowserRouter>


    </>
  )
}

export default App;
