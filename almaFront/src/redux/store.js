// store.js

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice'; // Import movie reducer

// Configure Redux store
const store = configureStore({
  reducer: {
    movie: movieReducer, // Include movie reducer in the store
  },
});

export default store;
