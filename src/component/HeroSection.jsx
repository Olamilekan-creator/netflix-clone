import React, { useState } from "react";
import TitleImage from "../asset/title.png";
import Button from "./Button";
import Play from '../asset/play.png'
import VideoModal from "./VideoModal";

function HeroSection() {
    const [showVideo, setShowVideo] = useState(false);
    const handleWatchTrailer = () => {
        setShowVideo(true);
    }
  return (
    <div className="text-white flex flex-col gap-3 mt-3 md:mt-24 py-4 z-20 px-10 md:px-0">
      <div>
        <img src={TitleImage} alt="title image" className="w-full md:w-1/5" />
      </div>

      <div>
        <div className="text-gray-400 font-semibold flex items-center gap-2">
          <p>2020</p>
          <span>|</span>
          <p className="bg-red-800 px-2 text-white">18+</p>
          <span>|</span>
          <p>1h 56min</p>
          <span>|</span>
          <p>Action</p>
        </div>
        <p className="text-lg mb-4 w-full md:w-1/3 mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          vel nam, quos quam numquam eius culpa ullam sint asperiores maxime,
          dolore accusamus natus facere, nulla libero iste. Eveniet temporibus
          asperiores suscipit minima voluptatem aut, impedit natus ipsum
          debitis, esse dolorum!
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          text="Play"
          icon="fa-play"
          className="bg-red-800"
          onClick={() => {}}
        />
        <Button
          text="My List"
          icon="fa-plus"
          className="border border-gray-800 hover:bg-red-800"
          onClick={() => {}}
        />
      </div>
      <div className="flex gap-2 mt-12">
        <img src={Play} alt="Play" className="w-25 h-25" />
        <Button text="Watch Trailer" onClick={handleWatchTrailer} />
      </div>
      <VideoModal showVideo={showVideo} setShowVideo={setShowVideo} />
    </div>
  );
}
export default HeroSection;
