import React from 'react';
import ipl from "../assets/ipl.jpg";
import kids from "../assets/kids.jpg";
import music from "../assets/music.jpg";
import standup from "../assets/standup.jpg";
import workshop from "../assets/workshop.jpg";
import { useDispatch } from "react-redux";
import { setMovieName } from '../redux/movieSlice';
import { useNavigate } from 'react-router-dom';

const shows = [
    { id: 0, img: ipl, name: "Chennai vs Mumbai Indians" },
    { id: 1, img: kids, name: "Disney Wonder" },
    { id: 2, img: music, name: "King Musical Journey" },
    { id: 3, img: standup, name: "Anubhav Bassi" },
    { id: 4, img: workshop, name: "Skill-India" }
];

function Shows() {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const navigate = useNavigate(); // Initialize useNavigate hook

  const bookShow = (movieName) => {
    dispatch(setMovieName(movieName)); // Dispatching action to set movie name in Redux store
    navigate("/booking"); // Navigate to booking page
  };

  return (
    <div className="flex lg:flex-row max-sm:flex-col max-sm:gap-3 gap-[5%] w-11/12 mx-auto mt-10 rounded-md bg-slate-700 p-5">
      {shows.map((show) => (
        <div key={show.id} className='flex max-w-[15%] max-sm:max-w-[90%]  bg-contain rounded-md ml-3 cursor-pointer' onClick={() => bookShow(show.name)}>
          <img src={show.img} alt="" className='rounded-md'/>
        </div>
      ))}
    </div>
  );
}

export default Shows;
