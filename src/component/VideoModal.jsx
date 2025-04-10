import React from "react";
import TrailerVideo from '../video/trailer.mp4'

function VideoModal ({ showVideo, setShowVideo }) {
    
    if (!showVideo) return null;
    return (
<div className="fixed inset-0 bg-black flex justify-center items-center z-50">
    <div className="relative w-4/5 md:w-3/4">
        <button className="absolute -top-6 -right-6 text-3xl cursor-pointer"
        onClick={() => setShowVideo(false)}>X</button>
        <video controls autoPlay className="w-full rounded-md" style={{ maxHeight: "80vh" }}>
    <source src={TrailerVideo} type="video/mp4" />
    </video>
    </div>
</div>
    );
}
export default VideoModal;