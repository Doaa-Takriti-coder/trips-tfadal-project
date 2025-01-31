import { createSlice } from '@reduxjs/toolkit';

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [],
  },
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    updateTripStatus: (state, action) => {
      const { id, status } = action.payload;
      const trip = state.trips.find(trip => trip.id === id);
      if (trip) {
        trip.status = status;
      }
    },
  },
});

export const { addTrip, updateTripStatus } = tripSlice.actions;
export default tripSlice.reducer;
