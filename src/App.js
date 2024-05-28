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
import LandlordProfiles from "./components/LandlordProfiles";
import ContactOwner from "./components/ContactOwner"
import Cards from "./components/HostelListing/Cards";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePageHero />
              <Cards/>
              <HostelCards />
              
            </>
          }
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/landlord-profile" element={<LandlordLogin />} />
        <Route path="/dashboard" element={<LandLordDashboard />} />
        <Route path="//landlord-profiles" element={<LandlordProfiles />} />

        <Route path="/All-hostels" element={<HostelCards />} />
        <Route path="/hostel-listing" component={<HostelListing /> } />
        <Route path="/contactOwner" element={<ContactOwner /> } />

        <Route path="/" element={<HostelCards />} />
        <Route path="/hostels/view" element={<HostelListing />} />
        <Route path="/hostel-upload" element={<HostelUp />} />


      </Routes>
      
     
    </Router>
   
    </>
  );
}

export default App;
