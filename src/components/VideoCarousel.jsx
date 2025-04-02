import React, { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, src: "https://www.w3schools.com/html/movie.mp4" },
  { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const positions = [
    { x: 0, y: 0, z: 0, opacity: 1, scale: 1.7, shadow: "shadow-2xl", zIndex: 10 },
    { x: 130, y: -130, z: -50, opacity: 0.1, scale: 1.3, shadow: "", zIndex: 5 },
    { x: 210, y: -230, z: -60, opacity: 0.1, scale: 1.1, shadow: "", zIndex: 1 },
  ];

  const getPosition = (index) => {
    const adjustedIndex = (index - activeIndex + videos.length) % videos.length;
    return positions[adjustedIndex];
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="relative w-[500px] h-[289px]">
        {videos.map((video, index) => {
          const { x, y, opacity, scale, shadow, zIndex } = getPosition(index);
          return (
            <motion.div
              key={video.id}
              initial={{ opacity: 0 }}
              animate={{ opacity, x, y, scale }}
              transition={{ duration: 0.5 }}
              className={`absolute w-[390px] h-[247px] rounded-lg overflow-hidden ${shadow}`}
              style={{ zIndex }}
            >
              <video src={video.src} controls className="w-full h-full object-cover" controlsList="nodownload nofullscreen" />
            </motion.div>
          );
        })}
      </div>
      <div className="absolute bottom-30 flex space-x-4">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all ${
              activeIndex === index ? "w-6 h-6 bg-gradient-to-r from-[#DC3545] to-[#FD7E14]" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoCarousel;
