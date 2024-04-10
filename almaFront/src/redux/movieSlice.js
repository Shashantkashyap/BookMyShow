// movieSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  movieName: '', // Initial movie name is empty
  
};

// Create movie slice
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieName: (state, action) => {
      state.movieName = action.payload; // Set movie name
    },


  },
});

// Export action creators
export const { setMovieName } = movieSlice.actions;

// Export reducer
export default movieSlice.reducer;
