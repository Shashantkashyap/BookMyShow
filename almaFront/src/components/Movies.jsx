import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import movie1 from '../assets/movie1.jpg';
import movie2 from '../assets/movie2.jpg';
import movie3 from '../assets/movie3.jpg';
import movie4 from '../assets/movie4.jpg';
import movie5 from '../assets/movie5.jpg';
import { useNavigate } from "react-router-dom";
import { setMovieName } from '../redux/movieSlice';

function Movies() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const movies = [
    { name: "Kung Fu Panda", img: movie1, index: 0, star: 8, vote: " 23.5K" },
    { name: "Kong Vs Godzilla", img: movie2, index: 1, star: 6.5, vote: " 13.5K" },
    { name: "Shaitaan", img: movie3, index: 2, star: 9, vote: " 29.5K" },
    { name: "Yoddha", img: movie4, index: 3, star: 8.5, vote: " 25.5K" },
    { name: "Savarkar", img: movie5, index: 4, star: 9.5, vote: " 53.5K" }
  ];

  const handleMouseEnter = index => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const bookMovie = (movieName) => { // Pass the movie name to the function
    dispatch(setMovieName(movieName)); // Dispatch action to set movie name
    navigate("booking");
  };

  return (
    <div>
      <div className="flex flex-row max-sm:flex-col gap-[3%] max-sm:gap-4 w-11/12 mx-auto mt-14">
        {movies.map((movie, index) => (
          <div key={index} className="max-w-[17%] max-sm:max-w-[89%] max-sm:mx-auto rounded-md shadow-md" onClick={() => bookMovie(movie.name)}>
            <Card
              img={movie.img}
              star={movie.star}
              vote={movie.vote}
              onMouseEnter={() => handleMouseEnter(movie.index)}
              onMouseLeave={handleMouseLeave}
              isHovered={hoveredIndex === movie.index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
