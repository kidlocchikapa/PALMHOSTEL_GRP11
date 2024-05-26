import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HostelCards from './components/HostelListing/cardst';
import HostelDetails from './components/HostelListing/HostelDetails';
import HomePageHero from './components/HostelListing/home';

function App() {
  return (<>
  <Router>
      <div>
        <Navbar />
        <HomePageHero/>
        <Routes>
          <Route exact path="/" element={<HostelCards />} />
          <Route path="/hostels/:hostelName" element={<HostelDetails />} />
        </Routes>
      </div>
        
    </Router>

  </>
    
  );
}

export default App;