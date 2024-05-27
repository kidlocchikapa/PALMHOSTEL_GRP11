import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/NavBar";
import About from "./components/AboutUs";
import LandlordLogin from "./components/LandlordLogin";
import LandLordDashboard from "./components/LandLordDashboard";
import HostelUp from "./components/HostelUp";
import HomePageHero from "./components/HostelListing/home";
import HostelCards from "./components/HostelListing/cardst";
import HostelListing from "./components/HostelListing";
import ChatWithLandlord from "./components/ContactOwner";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <HomePageHero />
              <HostelCards />
            </>
          }
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/landlord-profile" element={<LandlordLogin />} />
        <Route path="/dashboard" element={<LandLordDashboard />} />
        <Route path="/hostel-upload" element={<HostelUp />} />
        <Route path="/All-hostels" element={<HostelCards />} />
        <Route path="/hostel-listing" component={HostelListing} />
        <Route path="/ContactOwner" component={ChatWithLandlord} />

        <Route path="/" element={<HostelCards />} />
        <Route path="/hostel/" element={<HostelListing />} />
      </Routes>
    </Router>
  );
}

export default App;
