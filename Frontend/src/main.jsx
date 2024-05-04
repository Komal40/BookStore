import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Components/Courses.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import SignUp from "./Components/SignUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="dark:bg-slate-900 dark:text-white">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
   
  </React.StrictMode>
);
