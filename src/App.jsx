import React from "react";
import BgImage from './asset/mulan.jpg'
import NavBar from "./component/NavBar";
import HeroSection from "./component/HeroSection";

function App () {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${BgImage})`}}>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/30 z-10"></div>
      <div className="relative z-20 mx-14 pt-10">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
}
export default App;