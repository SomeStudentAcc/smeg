import React from "react";

export default function VideoSlider() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden mb-12 md:mb-20">
      <video
        className="w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        src={"/sliderVideo.mp4"}
      ></video>
    </div>
  );
}
