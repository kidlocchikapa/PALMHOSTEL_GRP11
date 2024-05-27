import React from 'react';
import Navbar from './components/HostelListing/NavBar';
import HomePageHero from './components/home';
import Footer from './components/HostelListing/Footer';
import Cards from './components/HostelListing/Cards';
import FoodCards from './components/HostelListing/HotelRatingCard';
import HostelCards from './components/HostelListing/Hostellisting';


function App() {
  return (
   <div className="relative">
    
    <Navbar/>
       <HomePageHero/>
       <Cards/>
       <HostelCards/>
       <Footer/>
   </div>
  );
}

export default App;
