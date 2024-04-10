import React from "react";
import { FaStar } from "react-icons/fa6";

// Card component for displaying movie details
function Card({ img, onMouseEnter, onMouseLeave, isHovered, star, vote }) {
  return (
    <div
      className="relative w-full overflow-hidden bg-black border border-transparent group-hover:border-slate-700 rounded-xl"
      onMouseEnter={onMouseEnter} // Event handler for mouse enter
      onMouseLeave={onMouseLeave} // Event handler for mouse leave
    >
      {/* Movie image */}
      <img
        src={img}
        alt="movie"
        className="w-full h-auto transition duration-300 transform group-hover:scale-105"
        style={{ minHeight: "320px" }}
      />

      {/* Movie details */}
      <div className="absolute w-full h-12 bg-black bottom-0 text-white flex- items-center">
        <div className="w-[93%] mx-auto flex gap-3 items-center mt-2">
          {/* Star rating */}
          <div className="flex gap-2">
            <FaStar color="red" fontSize={25} />
            <div className="text-xl font-semibold">{star} / 10 </div>
          </div>
          {/* Vote count */}
          <div className="text-xl font-semibold">{vote} Votes</div>
        </div>
      </div>

      {/* Overlay on hover */}
      {isHovered && (
        <div className="absolute z-100 inset-0 bg-neutral-50 dark:bg-slate-800 opacity-75 transition duration-300"></div>
      )}

      {/* View details button */}
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
        <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-300 hover:text-black focus:outline-none">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;
