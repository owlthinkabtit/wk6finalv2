import React, { useRef } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const CastScroll = ({ castData = [] }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrev = () => {
    containerRef.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-white text-xl lg:text-2xl font-bold mb-3">Cast</h2>
      <div className="relative">
        <div
          className="grid grid-cols-[repeat(auto-fit,150px)] grid-flow-col gap-6 overflow-hidden relative overflow-x-scroll z-10 scroll-smooth transition-all scrollbar-none"
          ref={containerRef}
        >
          {castData.map((member) => (
            <div key={member.id} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white min-w-[150px]">
              {member.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
              ) : (
                <div className="w-full h-40 bg-gray-700 flex items-center justify-center rounded-lg mb-2">
                  <span className="text-sm text-gray-400">Image not found</span>
                </div>
              )}
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.character}</p>
            </div>
          ))}
        </div>
        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button onClick={handlePrev} className="bg-white p-1 text-black rounded-full -ml-2 z-10">
            <FaAngleLeft />
          </button>
          <button onClick={handleNext} className="bg-white p-1 text-black rounded-full -mr-2 z-10">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CastScroll;
